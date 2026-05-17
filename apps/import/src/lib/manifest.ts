import type { Manifest } from '../types'

/**
 * Validate and parse a manifest from unknown JSON input.
 * Throws descriptive errors on missing or invalid fields.
 */
export function parseManifest(json: unknown): Manifest {
  if (typeof json !== 'object' || json === null || Array.isArray(json)) {
    throw new Error('Manifest must be a JSON object')
  }

  const obj = json as Record<string, unknown>

  // version
  if (typeof obj['version'] !== 'string' || !obj['version']) {
    throw new Error('Manifest missing required field: version (must be a non-empty string)')
  }

  // created_at
  if (typeof obj['created_at'] !== 'string' || !obj['created_at']) {
    throw new Error('Manifest missing required field: created_at (must be a non-empty string)')
  }

  // chat_model
  if (typeof obj['chat_model'] !== 'object' || obj['chat_model'] === null) {
    throw new Error('Manifest missing required field: chat_model (must be an object)')
  }
  const chatModel = obj['chat_model'] as Record<string, unknown>
  if (typeof chatModel['name'] !== 'string' || !chatModel['name']) {
    throw new Error('Manifest.chat_model missing required field: name')
  }
  if (typeof chatModel['size_bytes'] !== 'number') {
    throw new Error('Manifest.chat_model missing required field: size_bytes (must be a number)')
  }

  // embed_model
  if (typeof obj['embed_model'] !== 'object' || obj['embed_model'] === null) {
    throw new Error('Manifest missing required field: embed_model (must be an object)')
  }
  const embedModel = obj['embed_model'] as Record<string, unknown>
  if (typeof embedModel['name'] !== 'string' || !embedModel['name']) {
    throw new Error('Manifest.embed_model missing required field: name')
  }
  if (typeof embedModel['dimensions'] !== 'number') {
    throw new Error('Manifest.embed_model missing required field: dimensions (must be a number)')
  }
  if (typeof embedModel['path'] !== 'string' || !embedModel['path']) {
    throw new Error('Manifest.embed_model missing required field: path')
  }

  // chunking
  if (typeof obj['chunking'] !== 'object' || obj['chunking'] === null) {
    throw new Error('Manifest missing required field: chunking (must be an object)')
  }
  const chunking = obj['chunking'] as Record<string, unknown>
  if (typeof chunking['chunk_size'] !== 'number') {
    throw new Error('Manifest.chunking missing required field: chunk_size (must be a number)')
  }
  if (typeof chunking['chunk_overlap'] !== 'number') {
    throw new Error('Manifest.chunking missing required field: chunk_overlap (must be a number)')
  }

  // sources
  if (!Array.isArray(obj['sources'])) {
    throw new Error('Manifest missing required field: sources (must be an array)')
  }
  for (let i = 0; i < (obj['sources'] as unknown[]).length; i++) {
    const src = (obj['sources'] as unknown[])[i] as Record<string, unknown>
    if (typeof src !== 'object' || src === null) {
      throw new Error(`Manifest.sources[${i}] must be an object`)
    }
    if (typeof src['name'] !== 'string') {
      throw new Error(`Manifest.sources[${i}] missing required field: name`)
    }
    if (!['pdf', 'docx', 'md', 'txt'].includes(src['type'] as string)) {
      throw new Error(`Manifest.sources[${i}] type must be one of: pdf, docx, md, txt`)
    }
    if (typeof src['chunks'] !== 'number') {
      throw new Error(`Manifest.sources[${i}] missing required field: chunks (must be a number)`)
    }
    if (typeof src['checksum'] !== 'string') {
      throw new Error(`Manifest.sources[${i}] missing required field: checksum (must be a string)`)
    }
  }

  // total_chunks
  if (typeof obj['total_chunks'] !== 'number') {
    throw new Error('Manifest missing required field: total_chunks (must be a number)')
  }

  // manifest_hash
  if (typeof obj['manifest_hash'] !== 'string' || !obj['manifest_hash']) {
    throw new Error('Manifest missing required field: manifest_hash (must be a non-empty string)')
  }

  // skills — backward compatible: absent in pre-v1.1 manifests, default to []
  if (obj['skills'] === undefined) {
    obj['skills'] = []
  } else if (!Array.isArray(obj['skills'])) {
    throw new Error('Manifest.skills must be an array if present')
  }

  // chat_model.supports_tools — backward compatible: default false for old manifests
  if (chatModel['supports_tools'] === undefined) {
    chatModel['supports_tools'] = false
  }

  return obj as unknown as Manifest
}

/**
 * Compute a SHA-256 hash of the manifest (excluding manifest_hash itself).
 * Returns a hex string prefixed with "sha256:".
 */
export async function buildManifestHash(manifest: Omit<Manifest, 'manifest_hash'>): Promise<string> {
  const jsonStr = JSON.stringify(manifest)
  const encoder = new TextEncoder()
  const data = encoder.encode(jsonStr)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
  return `sha256:${hashHex}`
}

/**
 * Format a deterministic, filesystem-safe chunk ID.
 */
export function formatChunkId(source: string, index: number): string {
  const sanitized = source.replace(/[^a-z0-9]/gi, '_')
  const paddedIndex = String(index).padStart(4, '0')
  return `chunk_${sanitized}_${paddedIndex}`
}
