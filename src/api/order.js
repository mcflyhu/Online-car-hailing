import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/order/query',
    method: 'get',
    params: query
  })
}

export function fetchOrder(orderid) {
  return request({
    url: '/order/search',
    method: 'GET',
    params: { orderid }
  })
}

export function fetchOrderbyDate(date) {
  return request({
    url: '/order/search/date',
    method: 'GET',
    params: { date }
  })
}

export function addOrder(data) {
  return request({
    url: '/order/insert',
    method: 'post',
    data
  })
}
