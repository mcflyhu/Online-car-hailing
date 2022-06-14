import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/comment/query',
    method: 'GET',
    params: query
  })
}

export function fetchById(id) {
  return request({
    url: '/comment/search',
    method: 'GET',
    params: { id }
  })
}
