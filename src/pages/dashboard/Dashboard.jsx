import React from "react";
import DashCourse from "./DashCourse";
import DashHeader from "./DashHeader";
import DashTeachers from "./DashTeachers";
import DashAbout from "./DashAbout";
import DashForm from "./DashForm";
import DashQuestions from "./DashQuestions";

export default function Dashboard() {
  return (
    <div>
      <DashHeader />
      <DashCourse/>
      <DashTeachers />
      <DashAbout/>
      <DashQuestions/>
    </div>
  );
}
