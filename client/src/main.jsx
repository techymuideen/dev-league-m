import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store/store";
import { Provider } from "react-redux";
import ErrorPage from "./ErrorPage.jsx";
import About from "./pages/About/About.jsx";
// import Events from './pages/EventsPage/Events.jsx'
import Events from "./pages/Events/Events.jsx";
import EventView from "./pages/Events/EventView/EventView.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import BlogView from "./pages/Blog/BlogView.jsx";
// import Shop from "./pages/Shop/Shop.jsx";
import Home from "./pages/Home/Home.jsx";

import Login from "./pages/admin/login/login.jsx";
import AllPost from "./pages/admin/AllPost/AllPost";
import Admin from "./pages/admin/Admin.jsx";
import CreateBlog from "./pages/admin/CreateBlog/CreateBlog.jsx";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AllEvent from "./pages/admin/Event/AllEvent.jsx";
import NewEvent from "./pages/admin/Event/NewEvent.jsx";
// import Signup from "./pages/Signup/Signup.jsx";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/events/:eventId",
        element: <EventView />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/blog/:blogId",

        element: <BlogView />,
      },
      // {
      //   path: '/shop',
      //   element: <Shop />,
      // },
      {
        path: "/login",
        element: <Login />,
      },
      // {
      //   path: "/signup",
      //   element: <Signup />,
      // },
    ],
  },
  {
    path: "/admin",
    element: <Admin />,
    children: [
      {
        path: "allpost",
        element: <AllPost />,
      },
      {
        path: "create/blog",
        element: <CreateBlog />,
      },
      {
        path: "create/event",
        element: <NewEvent />,
      },
      {
        path: "allevent",
        element: <AllEvent />,
      },
      {
        path: "allblog",
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#494646",
            color: "#100f0f",
          },
        }}
      />
    </QueryClientProvider>
  </React.StrictMode>,
);
