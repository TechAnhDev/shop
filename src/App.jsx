import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './routes/Layout/Layout'
import HomePage from './routes/Homepage/HomePage'
import Blog from './components/Blog/Blog'
import ListPage from './routes/ListPage/ListPage'
import Products from './components/Products/Products'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/blog',
          element: <Blog />
        },
        {
          path: '/list',
          element: <ListPage />,
          children: [
            {
              index: true,
              element: <Products />
            }
          ]
        }
        // {
        //   path:"/profile",
        //   element:<ProfilePage/>
        // },
        // {
        //   path:"/login",
        //   element:<Login/>
        // },
        // {
        //   path:"/register",
        //   element:<Register/>
        // }
      ]
    }
  ])

  return <RouterProvider router={router} />
}

export default App
