import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import RegisterLayout from './layouts/RegisterLayout/RegisterLayout'
import Login from './pages/Login/Login'
import ProductList from './pages/ProductList/ProductList'
import Register from './pages/Register/Register'

const isAuthenticated = false
function ProtectedRoute() {
  return isAuthenticated ? <Outlet /> : <Navigate to='/login' />
}

function RejectedRoute() {
  return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
}
const useRouteElements = () => {
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <RegisterLayout>
              <Login />
            </RegisterLayout>
          )
        },
        {
          path: 'register',
          element: (
            <RegisterLayout>
              <Register />
            </RegisterLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtectedRoute />,
      children: [
        {
          path: 'profile',
          element: (
            <MainLayout>
              <Profile />
            </MainLayout>
          )
        },
        {
          path: '',
          index: true,
          element: (
            <MainLayout>
              <ProductList />
            </MainLayout>
          )
        }
      ]
    }
  ])
  return routeElements
}

export default useRouteElements
