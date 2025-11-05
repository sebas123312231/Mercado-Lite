'use client'

import { useState, useCallback } from 'react'
import { AxiosError } from 'axios'
import { apiClient } from '@/lib/api'

export function useApi<T = any>() {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const get = useCallback(async (url: string) => {
    setLoading(true)
    try {
      const { data: response } = await apiClient.get<T>(url)
      setData(response)
      setError(null)
      return response
    } catch (err) {
      const axiosError = err as AxiosError
      setError(axiosError.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const post = useCallback(async (url: string, payload: any) => {
    setLoading(true)
    try {
      const { data: response } = await apiClient.post<T>(url, payload)
      setData(response)
      setError(null)
      return response
    } catch (err) {
      const axiosError = err as AxiosError
      setError(axiosError.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const put = useCallback(async (url: string, payload: any) => {
    setLoading(true)
    try {
      const { data: response } = await apiClient.put<T>(url, payload)
      setData(response)
      setError(null)
      return response
    } catch (err) {
      const axiosError = err as AxiosError
      setError(axiosError.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  const remove = useCallback(async (url: string) => {
    setLoading(true)
    try {
      const { data: response } = await apiClient.delete<T>(url)
      setData(response)
      setError(null)
      return response
    } catch (err) {
      const axiosError = err as AxiosError
      setError(axiosError.message)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, get, post, put, delete: remove }
}
