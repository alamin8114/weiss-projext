import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Layout from './Layout/Layout'

function App() {
  const myroute=createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout/>}/>
        <Route index element={<Home/>}/>
      </Route>
    )
  )


  return (
    <>
    <RouterProvider router={myroute}/>
    </>
  )
}

export default App
