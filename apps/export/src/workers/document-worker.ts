import { parsePdf, parseDocx, parseMd, parseTxt } from '../lib/parsers'

type InMsg =
  | { type: 'PARSE_FILE'; id: string; name: string; buffer: ArrayBuffer }

type OutMsg =
  | { type: 'PARSE_DONE'; id: string; text: string }
  | { type: 'PARSE_ERROR'; id: string; error: string }

function getExtension(filename: string): string {
  const parts = filename.toLowerCase().split('.')
  return parts.length > 1 ? parts[parts.length - 1] : ''
}

self.onmessage = async (event: MessageEvent<InMsg>) => {
  const msg = event.data

  if (msg.type === 'PARSE_FILE') {
    const { id, name, buffer } = msg
    try {
      const ext = getExtension(name)
      let text: string

      switch (ext) {
        case 'pdf':
          text = await parsePdf(buffer)
          break
        case 'docx':
          text = await parseDocx(buffer)
          break
        case 'md':
          text = await parseMd(buffer)
          break
        case 'txt':
          text = await parseTxt(buffer)
          break
        default:
          throw new Error(`Unsupported file type: .${ext}`)
      }

      const response: OutMsg = { type: 'PARSE_DONE', id, text }
      self.postMessage(response)
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : String(err)
      const response: OutMsg = { type: 'PARSE_ERROR', id, error: errorMsg }
      self.postMessage(response)
    }
  }
}
