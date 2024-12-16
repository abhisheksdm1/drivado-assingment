import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import Home from "./pages/Home";
import VehicleSelection from "./pages/VechileSelection";
import BookingForm from "./pages/BookingForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "vechile",
        element: <VehicleSelection />,
      },
      {
        path: "booking-form",
        element: <BookingForm />,
      },
    ],
  },
]);
function App() {
  return (
    <RouterProvider
      router={router}
      future={{
        v7_relativeSplatPath: true,
      }}
    />
  );
}

export default App;
