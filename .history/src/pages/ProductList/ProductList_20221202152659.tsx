import { useQuery } from '@tanstack/react-query'
import { useState } from 'react'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import useQueryParams from 'src/hooks/useQueryParams'
import AsideFilter from './AsideFilter'
import Product from './Product/Product'
import SortProductList from './SortProductList'
import { omitBy, isUndefined } from 'lodash'
import { useEffect } from 'react'
import { ProductListConfig } from 'src/types/product.type'

export type QueryConfig = {
  [key in keyof ProductListConfig]: string
}

const queryParams: QueryConfig = useQueryParams()
const queryConfig: QueryConfig = omitBy(
  {
    page: queryParams.page || '1',
    limit: queryParams.limit || 1,
    sort_by: queryParams.sort_by,
    exclude: queryParams.exclude,
    name: queryParams.name,
    order: queryParams.order,
    price_max: queryParams.price_max,
    price_min: queryParams.price_min,
    rating_filter: queryParams.rating_filter
  },
  isUndefined
)

export default function ProductList() {
  const [page, setPage] = useState(1)
  const queryParams = useQueryParams()
  const { data } = useQuery({
    queryKey: ['products', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })
  console.log(data)
  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
        {data && (
          <div className='grid grid-cols-12 gap-6'>
            <div className='col-span-3'>
              <AsideFilter />
            </div>
            <div className='col-span-9'>
              <SortProductList />
              <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
                {data &&
                  data.data.data.products.map((product) => (
                    <div className='col-span-1' key={product._id}>
                      <Product product={product} />
                    </div>
                  ))}
              </div>
              <Pagination page={page} setPage={setPage} pageSize={20} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
