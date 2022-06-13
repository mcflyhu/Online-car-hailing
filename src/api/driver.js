import request from '@/utils/request'

export function fetchList() {
    return request({
      url: '/driver/query',
      method: 'get'
    })
  }
