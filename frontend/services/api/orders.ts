import { apiClient } from '@/lib/api'

export interface Order {
  id: number
  usuario_id: number
  items: OrderItem[]
  total: number
  estado: 'pendiente' | 'procesando' | 'enviado' | 'entregado'
  fecha: string
  dirección_entrega?: string
}

export interface OrderItem {
  producto_id: number
  cantidad: number
  precio_unitario: number
}

export const ordersApi = {
  getAll: async (): Promise<Order[]> => {
    const { data } = await apiClient.get<Order[]>('/orders')
    return data
  },

  getById: async (id: number): Promise<Order> => {
    const { data } = await apiClient.get<Order>(`/orders/${id}`)
    return data
  },

  create: async (payload: Partial<Order>): Promise<Order> => {
    const { data } = await apiClient.post<Order>('/orders', payload)
    return data
  },

  updateStatus: async (id: number, estado: string): Promise<Order> => {
    const { data } = await apiClient.patch<Order>(`/orders/${id}/status`, { estado })
    return data
  },
}
