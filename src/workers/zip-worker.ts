import * as fflate from 'fflate'

type InMsg =
  | { type: 'COMPRESS'; id: string; entries: Array<{ path: string; data: Uint8Array }> }
  | { type: 'DECOMPRESS'; id: string; data: Uint8Array }

type OutMsg =
  | { type: 'COMPRESS_DONE'; id: string; zip: Uint8Array }
  | { type: 'COMPRESS_PROGRESS'; id: string; percent: number }
  | { type: 'DECOMPRESS_DONE'; id: string; files: Array<{ path: string; data: Uint8Array }> }
  | { type: 'DECOMPRESS_PROGRESS'; id: string; percent: number }
  | { type: 'ZIP_ERROR'; id: string; error: string }

self.onmessage = (event: MessageEvent<InMsg>) => {
  const msg = event.data

  if (msg.type === 'COMPRESS') {
    const { id, entries } = msg

    try {
      const zipObj: fflate.AsyncZippable = {}
      const total = entries.length

      entries.forEach((entry, index) => {
        zipObj[entry.path] = entry.data

        // Report progress as entries are added to the zip object
        const percent = Math.round(((index + 1) / total) * 50) // first 50% = building
        const progressMsg: OutMsg = { type: 'COMPRESS_PROGRESS', id, percent }
        self.postMessage(progressMsg)
      })

      fflate.zip(zipObj, (err, data) => {
        if (err) {
          const errorMsg: OutMsg = { type: 'ZIP_ERROR', id, error: err.message }
          self.postMessage(errorMsg)
          return
        }

        const doneProgress: OutMsg = { type: 'COMPRESS_PROGRESS', id, percent: 100 }
        self.postMessage(doneProgress)

        const doneMsg: OutMsg = { type: 'COMPRESS_DONE', id, zip: data }
        self.postMessage(doneMsg, { transfer: [data.buffer as ArrayBuffer] })
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      const response: OutMsg = { type: 'ZIP_ERROR', id, error: errorMsg }
      self.postMessage(response)
    }

    return
  }

  if (msg.type === 'DECOMPRESS') {
    const { id, data } = msg

    try {
      fflate.unzip(data, (err, unzipped) => {
        if (err) {
          const errorMsg: OutMsg = { type: 'ZIP_ERROR', id, error: err.message }
          self.postMessage(errorMsg)
          return
        }

        const paths = Object.keys(unzipped)
        const files: Array<{ path: string; data: Uint8Array }> = []
        const total = paths.length

        paths.forEach((path, index) => {
          files.push({ path, data: unzipped[path] })

          const percent = Math.round(((index + 1) / total) * 100)
          const progressMsg: OutMsg = { type: 'DECOMPRESS_PROGRESS', id, percent }
          self.postMessage(progressMsg)
        })

        const doneMsg: OutMsg = { type: 'DECOMPRESS_DONE', id, files }
        // Transfer the underlying buffers to avoid copying large data
        const transferables = files.map(f => f.data.buffer as ArrayBuffer)
        self.postMessage(doneMsg, { transfer: transferables })
      })
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      const response: OutMsg = { type: 'ZIP_ERROR', id, error: errorMsg }
      self.postMessage(response)
    }
  }
}
