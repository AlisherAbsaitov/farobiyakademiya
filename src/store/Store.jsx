import { create } from "zustand";
export const useStore=create((set)=>({
    login:false,
    setLogin:(value)=>set(()=>({login:value})),
    loader:false,
    setLoader:(value)=>set(()=>({loader:value})),
    lang:false,
    setLang:(value)=>set(()=>({lang:value})),
    courses:null,
    setcourses:(value)=>set(()=>({courses:value})),
    subcategory:null,
    setsubcategory:(value)=>set(()=>({subcategory:value})),
    categories:null,
    setcategories:(value)=>set(()=>({categories:value})),
    navbar:false,
    setNavbar:(value)=>set(()=>({navbar:value})),
}))