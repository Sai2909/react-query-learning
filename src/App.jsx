import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
import Reactquery from './components/Reactquery';
import Traditionalway from './components/Traditionalway';
import Use from './components/Use';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/reactquery',
    element: <Reactquery />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/traditional',
    element: <Traditionalway />,
    errorElement: <ErrorPage />,
  },
  {
    path: '*', 
    element: <Use />, 
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
