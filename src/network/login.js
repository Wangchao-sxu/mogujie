import {request2} from './request'

export function login(){
  return request2({
    url:'/login',
    method:'post'
  })
}

export function register(){
  return request2({
    url:'/register',
    method:'post'
  })
}
