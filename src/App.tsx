import React from "react";
import { Footer } from "./Components/Footer";
import { Media } from "./Pages/Media";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "./Components/Navbar";
import { HomePage } from "./Pages/Home";
import { DonationPage } from "./Pages/Donation";
import { FestivalPage } from "./Pages/Festival";
import { Contact } from "./Pages/Contact";
import { VisitUs } from "./Pages/VisitUs";
import { routes } from "./routes";

export const App: React.FunctionComponent = () => {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route caseSensitive path={routes.home} element={<HomePage />} />
          <Route
            caseSensitive
            path={routes.festival}
            element={<FestivalPage />}
          />
          <Route caseSensitive path={routes.visitUs} element={<VisitUs />} />
          <Route caseSensitive path={routes.media} element={<Media />} />
          <Route caseSensitive path={routes.contact} element={<Contact />} />
          <Route
            caseSensitive
            path={routes.donation}
            element={<DonationPage />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
