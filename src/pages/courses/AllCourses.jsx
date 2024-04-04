import { useParams } from "react-router-dom";
import "../../css/dashboard/AllCourses.css";
import DashForm from "../dashboard/DashForm";
import AllCoursesButtons from "./AllCoursesButtons";
import AllCoursesCards from "./AllCoursesCards";
import axios from "axios";
import { useEffect, useState } from "react";
import { getCourses } from "../../host/Config";
import { api } from "../../host/Host";
import { useStore } from "../../store/Store";
function AllCourses() {
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  let lang=useStore((state)=>state.lang)
  useEffect(() => {
    getCourses(id).then(res=>{
      setCourses(res.data)
    })
  }, [id]);
  return (
    <div className="allcourses">
      <AllCoursesButtons id={id}/>
      <AllCoursesCards courses={courses} lang={lang} />
    </div>
  );
}

export default AllCourses;
