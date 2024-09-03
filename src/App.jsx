import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Reactquery from './components/Reactquery'
import Traditionalway from './components/Traditionalway'

const router=createBrowserRouter([
  {path:"/",element:<Home/>},
  {path:"/reactquery",element:<Reactquery/>},
  {path:"/traditional",element:<Traditionalway/>}
])
function App() {

  return (
      <RouterProvider router={router}/>
  )
}

export default App
