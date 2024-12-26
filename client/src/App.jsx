import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import { RouterProvider } from 'react-router'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/login",
    element:<Login />
  },
])

const App = () => {
  return <RouterProvider router={appRouter} />;
}

export default App
