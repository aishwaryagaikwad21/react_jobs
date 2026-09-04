import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import MainLayout from './layouts/MainLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJob from './pages/SingleJob'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/jobs' element= {<JobsPage />} />
      <Route path='/jobs/:id' element={<SingleJob />} />
      <Route path='*' element= {<NotFoundPage />} />
    </Route>
  )
)

const App = () => { //provides the router
  return <RouterProvider router={router} />
}

export default App