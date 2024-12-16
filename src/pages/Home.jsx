import React from "react";
import Banner from "../components/Banner";
import BookingForm from "../components/BookingForm";
import ServicePage from "../components/ServicePage";
import OperationPage from "../components/OperationPage";

export default function Home() {
  return (
    <div>
      <Banner />
      <BookingForm />
      <ServicePage />
      <OperationPage />
    </div>
  );
}
