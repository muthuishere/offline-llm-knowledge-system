import * as pdfjsLib from 'pdfjs-dist'
import mammoth from 'mammoth'

// Configure the PDF.js worker source
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.mjs',
  import.meta.url
).href

/**
 * Extract plain text from a PDF file buffer.
 */
export async function parsePdf(buffer: ArrayBuffer): Promise<string> {
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(buffer) })
  const pdf = await loadingTask.promise

  const pageTexts: string[] = []
  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum)
    const textContent = await page.getTextContent()
    const pageText = textContent.items
      .map((item) => {
        if ('str' in item) {
          return item.str
        }
        return ''
      })
      .join(' ')
    pageTexts.push(pageText)
  }

  return pageTexts.join('\n')
}

/**
 * Extract plain text from a DOCX file buffer using mammoth.
 */
export async function parseDocx(buffer: ArrayBuffer): Promise<string> {
  const result = await mammoth.extractRawText({ arrayBuffer: buffer })
  return result.value
}

/**
 * Parse a Markdown file buffer and return the raw text.
 */
export async function parseMd(buffer: ArrayBuffer): Promise<string> {
  return new TextDecoder().decode(buffer)
}

/**
 * Parse a plain text file buffer and return its contents.
 */
export async function parseTxt(buffer: ArrayBuffer): Promise<string> {
  return new TextDecoder().decode(buffer)
}
