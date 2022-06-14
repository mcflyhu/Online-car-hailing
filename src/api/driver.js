import request from '@/utils/request'

export function fetchList() {
  return request({
    url: '/order/query',
    method: 'get'
  })
}

export function fetchOrder(id) {
  return request({
    url: '/order/search',
    method: 'get',
    params: { id }
  })
}
