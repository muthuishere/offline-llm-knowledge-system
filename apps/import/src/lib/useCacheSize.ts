import { useState, useEffect, useCallback } from 'react'

export interface CacheSizeInfo {
  used: number
  quota: number
  loading: boolean
}

function fmt(bytes: number): string {
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(0)} KB`
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`
}

export function formatCacheSize(info: CacheSizeInfo): string {
  if (info.loading) return '…'
  if (info.used === 0) return 'empty'
  return `${fmt(info.used)} used`
}

export function useCacheSize(): { info: CacheSizeInfo; refresh: () => void } {
  const [info, setInfo] = useState<CacheSizeInfo>({ used: 0, quota: 0, loading: true })

  const refresh = useCallback(async () => {
    setInfo(prev => ({ ...prev, loading: true }))
    try {
      const est = await navigator.storage.estimate()
      setInfo({ used: est.usage ?? 0, quota: est.quota ?? 0, loading: false })
    } catch {
      setInfo({ used: 0, quota: 0, loading: false })
    }
  }, [])

  useEffect(() => { refresh() }, [refresh])

  return { info, refresh }
}
