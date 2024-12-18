import axios from 'axios'

const API_URL = 'https://smt-v6uu.onrender.com/token/'

export async function login(email, password) {
  const response = await axios.post(API_URL, {
    email,
    password,
  })
  return response.data
}

export function setAuthToken(token) {
  if (token) {
    localStorage.setItem('psg_auth_token', token)
    localStorage.setItem('psg_auth_token2', token)
  } else {
    delete localStorage.delItem('psg_auth_token')
  }
}