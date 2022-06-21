import { HomePage } from "../page/HomePage"
import { AdminHomePage } from "../page/AdminHomePage"; //
import { ApplicationFormPage } from "../page/ApplicationFormPage"; //
import { CreateTripPage } from "../page/CreateTripPage"; 
import { ListTripsPage } from "../page/ListTripsPage"; //
import { LoginPage } from "../page/LoginPage"; //
import { TripDetailsPage } from "../page/TripDetailsPage"; //
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const Router = ()=> {
    return(
        <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/admin/trips/list" element={<AdminHomePage />} />
          <Route path="/trips/application" element={<ApplicationFormPage />} />
          <Route path="/admin/trips/create" element={<CreateTripPage />} />
          <Route path="/trips/list" element={<ListTripsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/admin/trips/:id" element={<TripDetailsPage />} />
        </Routes>
      </BrowserRouter>
    )
}