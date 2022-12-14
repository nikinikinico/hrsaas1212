import request from '@/utils/request'
export const getEmployeesSimple = () => {
  return request({
    url: '/sys/user/simple'
  })
}
