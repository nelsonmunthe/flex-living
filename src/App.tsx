import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import RootLayout from './pages/RootLayout';
import Landlord from './pages/landLord/LandLord';
import ErrorPage from './pages/ErrorPage';
import Blog from './pages/blog/Blog';
import Booking from './pages/booking/Booking';

const router = createBrowserRouter(
  [
    {
      path: "/",
      element : <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path : "/",
          index: true,
          element: <Home />
        },
        {
          path: "/landloards",
          element: <Landlord />
        },
        {
          path: "/blog",
          element: <Blog />
        },
        {
          path: "/booking",
          element: <Booking />
        }
      ]
    }
  ]
)

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
