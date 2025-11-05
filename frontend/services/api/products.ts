import { apiClient } from '@/lib/api'

export interface Product {
  id: number
  nombre: string
  precio: number
  descripcion?: string
  categoria?: string
  stock?: number
  imagen?: string
}

export const productsApi = {
  getAll: async (): Promise<Product[]> => {
    const { data } = await apiClient.get<Product[]>('/products')
    return data
  },

  getById: async (id: number): Promise<Product> => {
    const { data } = await apiClient.get<Product>(`/products/${id}`)
    return data
  },

  create: async (payload: Partial<Product>): Promise<Product> => {
    const { data } = await apiClient.post<Product>('/products', payload)
    return data
  },

  update: async (id: number, payload: Partial<Product>): Promise<Product> => {
    const { data } = await apiClient.put<Product>(`/products/${id}`, payload)
    return data
  },

  delete: async (id: number): Promise<void> => {
    await apiClient.delete(`/products/${id}`)
  },
}
