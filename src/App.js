import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Footer from "./Footer/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import AboutCall from "./AboutCall/AboutCall";
import ServiceCall from "./ServiceCall/ServiceCall";
import ContactCall from "./ContactCall/ContactCall";
import Login from "./Login/Login";
import UserLogin from "./UserLogin/UserLogin";
import HRLogin from "./HRLogin/HRLogin";
import ProjManLogin from "./ProjectManagerLogin/ProjManLogin";
import EmployeePage from "./EmployeePage/EmployeePage";
import EmployeeProfile from "./EmployeeProfile/EmployeeProfile";
import EmpSignUp from "./EmployeeSignUp/EmpSignUp";
import AdminHome from "./AdminHome/AdminHome";
import AdminAddDesignation from "./AdminAddDesignation/AdminAddDesignation";
import AdminLogin from "./AdminLogin/AdminLogin";
import EmpEditProf from "./EmployeeEditProfile/EmpEditProf";
import EmpLeave from "./EmpLeave/EmpLeave";
import CareerLogin from "./CareerLogin/CareerLogin";
import ApplicantSignup from "./ApplicantSignup/ApplicantSignup";
import ApplicantHome from "./ApplicantHome/ApplicantHome";
import ApplicantProfile from "./ApplicantProfile/ApplicantProfile";
import AdminViewDesig from "./AdminViewDesig/AdminViewDesig";
import AdminEditDesig from "./AdminEditDesig/AdminEditDesig";
import EmployeeForgotPass from "./EmployeeForgotPass";
import AdminViewAppcnt from "./AdminViewAppcnt";
import ApplicantEditProf from "./ApplicantEditProf";
import ApplicantForgotPwd from "./ApplicantForgotPwd";
import HrHome from "./HrHome";
import HrProfile from "./HrProfile";
import HrEditProf from "./HrEditProf";
import HrAddJobs from "./HrAddJobs";
import ApplicantSearchResult from "./ApplicantSearchResult";
import HrViewJobs from "./HrViewJobs";
import ViewApplicantForJobs from "./ViewApplicantForJobs";
import HrScheduleInterview from "./HrScheduleInterview";
import HrViewEmployees from "./HrViewEmployees";
import HrGeneratePayroll from "./HrGeneratePayroll";
import PmHome from "./PmHome";
import HrSearchBySkills from "./HrSearchBySkills";
import EmplyeePayRoll from "./EmplyeePayRoll";
import EmployeeComplaints from "./EmployeeComplaints";
import HrViewComplaints from "./HrViewComplaints";
import PmProfile from "./PmProfile";
import PmEditProfile from "./PmEditProfile";
import PmLeave from "./PmLeave";
import HrScheduledInterviews from "./HrScheduledInterviews";
import ApplicantViewInterview from "./ApplicantViewInterview";
import HrUpdateComplaintStatus from "./HrUpdateComplaintStatus";
import PmAddProjects from "./PmAddProjects";
import HrLeavePage from "./HrLeavePage";
import PmViewProjects from "./PmViewProjects";
import PmViewSinglePrjct from "./PmViewSinglePrjct";
import PmEditProject from "./PmEditProject";
import EmployeeProject from "./EmployeeProject";
import EmployeeUpdatePercentage from "./EmployeeUpdatePercentage";
import EmpViewComplaintStatus from "./EmpViewComplaintStatus";
import AdminViewProjects from "./AdminViewProjects";
import AdminViewSingleEmploy from "./AdminViewSingleEmploy";

function App() {
  return (
    <BrowserRouter basename="hrms">
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutCall />} />
          <Route path="/services" element={<ServiceCall />} />
          <Route path="/contact" element={<ContactCall />} />
          <Route path="/login" element={<Login />} />

          <Route path="/hr-home" element={<HrHome />} />
          <Route path="/hr-profile" element={<HrProfile />} />
          <Route path="/hr-leavepage" element={<HrLeavePage />} />
          <Route path="/hr-edit-profile" element={<HrEditProf />} />
          

          <Route path="/employee-login" element={<UserLogin />} />
          <Route path="/employee-signup" element={<EmpSignUp />} />
          <Route path="/employee-home" element={<EmployeePage />} />
          <Route path="/emp_forgot_pass" element={<EmployeeForgotPass />} />
          
          <Route path="/employee-profile" element={<EmployeeProfile />} />
          <Route path="/employee-edit-profile" element={<EmpEditProf />} />
          <Route path="/employee-leavepage" element={<EmpLeave />} />
         

          <Route path="/admin" element={<AdminLogin />} />
          <Route path="/admin-dashboard" element={<AdminHome />} />
          
          <Route
            path="/admin-add-designation"
            element={<AdminAddDesignation />}
          />
          <Route path="/admin-view-designation" element={<AdminViewDesig />} />
          
          <Route
            path="/admin-edit-designation/:id"
            element={<AdminEditDesig />}
          />

          <Route path="/applicant-login" element={<CareerLogin />} />
          <Route path="/applicant-signup" element={<ApplicantSignup />} />
          <Route path="/applicant-home" element={<ApplicantHome />} />
          <Route path="/applicant-profile" element={<ApplicantProfile />} />
          <Route
            path="/applicant_edit_profile"
            element={<ApplicantEditProf />}
          />
          
          <Route path="/app_forgot_pass" element={<ApplicantForgotPwd />} />
          

          <Route path="/project-manager-login" element={<ProjManLogin />} />
          <Route path="/pm_home" element={<PmHome />} />
          <Route path="/pm-profile" element={<PmProfile />} />
          <Route path="/pm_edit_profile" element={<PmEditProfile />} />
          <Route path="/pm_leave_page" element={<PmLeave />} />
          
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
