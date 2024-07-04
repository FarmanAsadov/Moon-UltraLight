import { BrowserRouter, useRoutes } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/home/Home";
import Chat from "./pages/chat/Chat";
import Contact from "./pages/contact/Contact";
import Distributors from "./pages/distributors/Distributors";
import Locations from "./pages/locations/Locations";
import Order from "./pages/order/Order";
import OrderPolicy from "./pages/order-policy/OrderPolicy";
import Privacy from "./pages/privacy/Privacy";
import Returns from "./pages/returns/Returns";
import Shipping from "./pages/shipping/Shipping";
import Terms from "./pages/terms/Terms";
import Warranty from "./pages/warranty/Warranty";
import Login from "./shared/login/Login";
import NotFound from "./pages/notfound/NotFound";

function Routing() {
  const routes = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/chat",
          element: <Chat />,
        },
        {
          path: "/distributors",
          element: <Distributors />,
        },
        {
          path: "/where-to-buy",
          element: <Locations />,
        },
        {
          path: "/shop",
          element: <Order />,
        },
        {
          path: "/pre-order-policy",
          element: <OrderPolicy />,
        },
        {
          path: "/privacy-policy",
          element: <Privacy />,
        },
        {
          path: "/returns",
          element: <Returns />,
        },
        {
          path: "/shipping",
          element: <Shipping />,
        },
        {
          path: "/terms-of-use",
          element: <Terms />,
        },
        {
          path: "/limited-warranty",
          element: <Warranty />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },

    {
      path: "/contact",
      element: <Contact />,
    },
  ];

  const Elements = () => {
    return useRoutes(routes);
  };

  return (
    <>
      <BrowserRouter>
        <Elements />
      </BrowserRouter>
    </>
  );
}

export default Routing;
