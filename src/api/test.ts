import request from '@/utils/axios'

export function login(): any {
  return request({
    url: '/api/login'
  })
}
