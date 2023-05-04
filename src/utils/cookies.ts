import { Cookies } from 'react-cookie'
import { Cookie, CookieSetOptions } from 'universal-cookie'

const cookies = new Cookies()

// 쿠키를 가져오는 함수
export const getCookie = (name: string) => {
  try {
    return cookies.get(name)
  } catch (error) {
    console.error(error)
  }
}

// 쿠키를 설정하는 함수
export const setCookie = (name: string, value: Cookie, option?: CookieSetOptions) => {
  try {
    cookies.set(name, value, { ...option })
  } catch (error) {
    console.error(error)
  }
}

// 쿠키를 삭제하는 함수
export const removeCookie = (name: string) => {
  try {
    cookies.remove(name)
  } catch (error) {
    console.error(error)
  }
}
