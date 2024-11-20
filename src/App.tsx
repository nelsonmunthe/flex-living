import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import RootLayout from './pages/RootLayout';
import Landlord from './pages/landLord/LandLord';
import ErrorPage from './pages/ErrorPage';
import Blog from './pages/blog/Blog';
import Booking from './pages/booking/Booking';
import PropertyDetail from './pages/propertyDetail/propertyDetail';
import Checkout from './pages/checkout/Checkout';
import Contact from './pages/contact/Contact';
import SignUp from './pages/user/signUp/SignUp';
import Login from './pages/user/login/Login';

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
        },{
          path: "/landloards",
          element: <Landlord />
        },{
          path: "/blog",
          element: <Blog />
        },{
          path: "/booking",
          element: <Booking />
        },{
          path: "/detail",
          element: <PropertyDetail />
        }, {
          path: "/check-out",
          element: <Checkout />
        }, {
          path: "/contact",
          element: <Contact />
        }
      ]
    },
    {
      path: "/sign-up",
      element: <SignUp />
    },{
      path: "/log-in",
      element: <Login />
    }
  ]
)

function App() {
  return <RouterProvider  router={router}/>
}

export default App;
