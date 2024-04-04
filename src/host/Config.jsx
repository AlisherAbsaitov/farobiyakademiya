import axios from "axios";
import { api } from "./Host";

export const getSubCategory=(token)=>{
  return(axios.get(`${api}/api/sub_categories/`))
}

export const getCourses=(id)=>{
  return(axios.get(`${api}/api/v1/farobiy/auth/courses/byCategories/${id}`))
}

export const getCourse=(id)=>{
  return(axios.get(`${api}/api/v1/farobiy/auth/course/${id}`))
}










