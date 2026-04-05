# Test Fixtures

## Available Fixtures

- `sample.txt` — Plain text fixture (~200 words, lorem ipsum style)
- `sample.md` — Markdown fixture with headings, lists, and paragraphs (~150 words)

## Binary Fixtures (not committed)

`sample.pdf` and `sample.docx` are binary files and are not committed to this repository.

### Generating them

To generate `sample.pdf`, you can use any PDF creation tool or convert `sample.txt`:

```bash
# Using LibreOffice (Linux/macOS):
libreoffice --headless --convert-to pdf tests/fixtures/sample.txt --outdir tests/fixtures/

# Using pandoc:
pandoc tests/fixtures/sample.txt -o tests/fixtures/sample.pdf
```

To generate `sample.docx`:

```bash
# Using pandoc:
pandoc tests/fixtures/sample.md -o tests/fixtures/sample.docx
```

## Unit Test Approach for PDF and DOCX

Because PDF and DOCX are binary formats, unit tests for `parsePdf` and `parseDocx` do not rely on fixture files on disk. Instead, they:

1. Stub the external libraries (`pdfjs-dist` and `mammoth`) using `vi.mock()`
2. Pass a minimal `ArrayBuffer` as input
3. Assert that the stub was called and the return value matches the expected plain text

This approach keeps unit tests fast, deterministic, and free of binary file dependencies.
