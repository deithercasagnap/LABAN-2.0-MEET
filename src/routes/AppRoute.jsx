import React from "react";
import { ToastContainer} from 'react-toastify';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';



//value is the about us page
import AboutUs from "../components/LandingPageComponents/AboutUs";
//value is the our team page
import Value from "../components/LandingPageComponents/Value";
//value is the contact us page
import Footer from "../components/LandingPageComponents/Footer";


//value is the navbar
import Jobs from "../components/LandingPageComponents/Jobs";

//value is the navbar
import NavBar2 from "../components/LandingPageComponents/NavBar2";

//value is the navbar
import NavBar from "../components/LandingPageComponents/NavBar";

import LoginDoctorDiv from "../components/LoginDoctorComponents/LoginDoctorDiv";
import HomeDoctor from "../pages/HomeDoctor";
import DoctorNavbar from "../components/DoctorLandingPageComponents/DoctorNavbar";
import Notification from "../components/DoctorLandingPageComponents/Notification";
import Appointment from "../components/DoctorLandingPageComponents/Appointment";


import ViewPatient from "../components/DoctorLandingPageComponents/ViewPatient";
import EntryPatients from "../components/DoctorLandingPageComponents/EntryPatients";

import AdmitPatient from "../components/DoctorLandingPageComponents/AdmitPatient";
import DischargePatient from "../components/DoctorLandingPageComponents/DischargePatient";
import VacantRoomDetails from "../components/DoctorLandingPageComponents/VacantRoomDetails";
import RegularDoctor from "../components/AdminLandingPageComponents/RegularDoctor";
import DoctorOnCall from "../components/AdminLandingPageComponents/DoctorOnCall";
import Departments from "../components/AdminLandingPageComponents/Departments";
import LoginNurseDiv from "../components/LoginNurseComponents/LoginNurseDiv";
import HomeNurse from "../pages/HomeNurse";
import OccupiedRoomDetails from "../components/DoctorLandingPageComponents/OccupiedRoomDetails";
import ViewAdmittedPatients from "../components/DoctorLandingPageComponents/ViewAdmittedPatients";
import ViewDischargedPatients from "../components/DoctorLandingPageComponents/ViewDischargedPatients";
import ViewOneAdmittedPatient from "../components/DoctorLandingPageComponents/ViewOneAdmittedPatient";
import ViewOneDischargedPatient from "../components/DoctorLandingPageComponents/ViewOneDischargedPatient";
import OccupiedShowPatient from "../components/DoctorLandingPageComponents/OccupiedShowPatient";
import NurseNavbar from "../components/NurseLandingPageComponents/NurseNavBar";
import NurseAppointment from "../components/NurseLandingPageComponents/NurseAppointment";
import NurseNotification from "../components/NurseLandingPageComponents/NurseNotification";
import InsertPatient from "../components/NurseLandingPageComponents/InsertPatient";
import NurseVacantRoomDetails from "../components/NurseLandingPageComponents/NurseVacantRoomDetails";
import HomeBiller from "../pages/HomeBiller";
import BillerNavBar from "../components/BillerLandingPageComponents/BillerNavBar";
import BillerNotification from "../components/BillerLandingPageComponents/BillerNotification";
import BillerAppointment from "../components/BillerLandingPageComponents/BillerAppointment";
import LoginBillerDiv from "../components/LoginBillerComponents/LoginBillerDiv";
import InsertDepartment from "../components/AdminLandingPageComponents/InsertDepartment";
import AdminVacantRoomDetails from "../components/AdminLandingPageComponents/AdminVacantRoomDetails";
import AdminNavbar from "../components/AdminLandingPageComponents/AdminNavbar";
import AdminNotification from "../components/AdminLandingPageComponents/AdminNotification";
import AdminAppointment from "../components/AdminLandingPageComponents/AdminAppointment";
import HomeAdmin from "../pages/HomeAdmin";
import LoginAdminDiv from "../components/LoginAdminComponents/LoginAdminDiv";
import InsertRoom from "../components/AdminLandingPageComponents/InsertRoom";
import DisplayDischargePatients from "../components/BillerLandingPageComponents/DisplayDischargePatients";
import DisplayOnePatientToDischarge from "../components/BillerLandingPageComponents/DisplayOnePatientToDischarge";
import PrintDischargePatientDetails from "../components/BillerLandingPageComponents/PrintDischargePatientDetails";

const LandingPage = React.lazy(() => import("../pages/LandingPage"));


export default function AppRoute() {
  return (
    <>
      <BrowserRouter>

        <ToastContainer  position="top-center" />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="#job" element={<Jobs />} />
          <Route path="/logindoctordiv" element={[<NavBar2/>,<LoginDoctorDiv />]} />
          <Route path="/loginadmindiv" element={[<NavBar2/>,<LoginAdminDiv />]} />
          <Route path="/loginnursediv" element={[<NavBar2/>,<LoginNurseDiv/>]} />
          <Route path="/loginbillerdiv" element={[<NavBar2/>,<LoginBillerDiv/>]} />
          <Route path="#aboutus" element={<AboutUs />} />
          <Route path="#ourteam" element={<Value />} />
          <Route path="#contactus" element={<Footer />} />
          <Route path="/homedoctor" element={<HomeDoctor  />} />
          <Route path="/notification" element={[<DoctorNavbar/>,<Notification/>]} />
          <Route path="/appointment" element={[<DoctorNavbar/>,<Appointment/>]} />
          <Route path="/entrypatients" element={[<DoctorNavbar/>,<EntryPatients/>]} />
          
          <Route path="/viewdischargedpatients" element={[<DoctorNavbar/>,<ViewDischargedPatients/>]} />
          <Route path="/viewonedischargedpatient/:patient_number" element={[<DoctorNavbar/>,<ViewOneDischargedPatient/>]}/>
          <Route path="/viewadmittedpatients" element={[<DoctorNavbar/>,<ViewAdmittedPatients/>]} />
          <Route path="/viewoneadmittedpatient/:patient_number" element={[<DoctorNavbar/>,<ViewOneAdmittedPatient/>]}/>
          <Route path="/vacantroomdetails" element={[<DoctorNavbar/>,<VacantRoomDetails/>]} />
          <Route path="/occupiedroomdetails" element={[<DoctorNavbar/>, <OccupiedRoomDetails/>]} />
          <Route path="/occupiedshowpatient/:patient_number" element={[<DoctorNavbar/>, <OccupiedShowPatient/>]} />

          
          <Route path="/admitpatient/:patient_number" element={[<DoctorNavbar/>, <AdmitPatient/>]}/>
          
          <Route path="/dischargepatient/:patient_number" element={[<DoctorNavbar/>,<DischargePatient/>]}/>
          <Route path="/viewpatient/:patient_number" element={[<DoctorNavbar/>,<ViewPatient/>]}/>
          
          <Route path="/addpatients" element={[<DoctorNavbar/>,<ViewPatient/>]}/>

          <Route path="/homeadmin" element={<HomeAdmin />} />
          <Route path="/adminnotification" element={[<AdminNavbar/>,<AdminNotification/>]} />
          <Route path="/adminappointment" element={[<AdminNavbar/>,<AdminAppointment/>]} />


          <Route path="/regulardoctor" element={[<AdminNavbar/>, <RegularDoctor/>]}/>
          <Route path="/doctoroncall" element={[<AdminNavbar/>, <DoctorOnCall/>]}/>
          <Route path="/departments" element={[<AdminNavbar/>, <Departments/>]}/>
          <Route path="/insertdepartment" element={[<AdminNavbar/>, <InsertDepartment/>]}/>
          <Route path="/insertroom" element={[<AdminNavbar/>, <InsertRoom/>]}/>
          
          <Route path="/adminvacantroomdetails" element={[<AdminNavbar/>, <AdminVacantRoomDetails/>]}/>


          <Route path="/homenurse" element={[ <NurseNavbar/> ,<HomeNurse/>]} />
          <Route path="/nursenotification" element={[<NurseNavbar/> ,<NurseNotification/>]} />
          <Route path="/nurseappointment" element={[<NurseNavbar/> ,<NurseAppointment/>]} />
          <Route path="/insertpatient" element={[<NurseNavbar/> ,<InsertPatient/>]} />
          <Route path="/nursevacantroomdetails" element={[<NurseNavbar/>,<NurseVacantRoomDetails/>]} />


          <Route path="/homebiller" element={[ <BillerNavBar/> ,<HomeBiller/>]} />
          <Route path="/billernotification" element={[<BillerNavBar/> ,<BillerNotification/>]} />
          <Route path="/billerappointment" element={[<BillerNavBar/> ,<BillerAppointment/>]} />
          <Route path="/displaydischargepatients" element={[<BillerNavBar/> ,<DisplayDischargePatients/>]} />
          <Route path="/displayonepatienttodischarge/:patient_number" element={[<BillerNavBar/> ,<DisplayOnePatientToDischarge/>]} />
          <Route path="/printdischargepatientdetails/:patient_number" element={[<BillerNavBar/> ,<PrintDischargePatientDetails/>]} />

        </Routes>
      </BrowserRouter>
    </>
  );
}
