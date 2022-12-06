import { AuthResponse } from 'src/types/auth.type'
import http from 'src/utils/http'
const URL = 'categories'
const categoryApi = {
  getCategories(body: { email: string; password: string }) {
    return http.post<AuthResponse>('/register', body)
  }
}

export default authApi
