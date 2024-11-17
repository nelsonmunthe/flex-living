import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import RootLayout from './pages/RootLayout';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element : <RootLayout />,
      children: [
        {
          path : "/",
          index: true,
          element: <Home />
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
