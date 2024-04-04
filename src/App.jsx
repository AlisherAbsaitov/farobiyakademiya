import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Onecourse from "./pages/dashboard/onecourse";
import AllCourses from "./pages/courses/AllCourses";
import { useStore } from "./store/Store";
import "react-quill/dist/quill.core.css";
import { useCookies } from "react-cookie";
import Loader from "./components/Loader";
import DashForm from "./pages/dashboard/DashForm";
export default function App() {
  const setLogin = useStore((state) => state.setLogin);
  const login = useStore((state) => state.login);
  const [cookies, setCookie] = useCookies();
  const loader = useStore((state) => state.loader);
  useEffect(() => {
    if (cookies.token) {
      setLogin(true);
    }
  }, []);
  return (
    <div>
      {loader ? <Loader /> : <></>}
      <Routes>
        <Route
          path="/*"
          element={
            <>
              {/* <Navbar />  */}
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/onecourse/:name/:id" element={<Onecourse />} />
                <Route path="/allcourses/:id" element={<AllCourses />} />
              </Routes>
              <DashForm/>
              <Footer />
            </>
          }
        />

  
      </Routes>
    </div>
  );
}
