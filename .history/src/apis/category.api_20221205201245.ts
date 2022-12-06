import { Category } from 'src/types/categories.type'
import { SuccessResponse } from 'src/types/utils.type'
import http from 'src/utils/http'
const URL = 'categories'
const categoryApi = {
  getCategories(body: { email: string; password: string }) {
    return http.get<SuccessResponse<Category[]>>(URL)
  }
}

export default categoryApi
