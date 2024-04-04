import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar as NavbarBoot } from "react-bootstrap";
import style from "../css/components/Navbar.module.css";
import logo from "../assets/logo.svg";
import book from "../assets/icons/book.svg";
import phone from "../assets/icons/phone.svg";
import arrowDown from "../assets/icons/arrowDown.svg";
import { Button, Dropdown } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../locale/i18next";
import { Link } from "react-router-dom";
import { useStore } from "../store/Store";
import axios from "axios";
import { api } from "../host/Host";
import { IoIosArrowForward } from "react-icons/io";
export default function Navbar() {
  const { t } = useTranslation();
  const [category_id, setcategory_id] = useState(0);
  const [stop, setStop] = useState(true);
  const [sub_category_id, setsub_category_id] = useState(0);
  const [Newcourses , setNewCourses]=useState(null)

  const categories = useStore((state) => state.categories);
  const setcategories = useStore((state) => state.setcategories);
  const subcategory = useStore((state) => state.subcategory);
  const setsubcategory = useStore((state) => state.setsubcategory);
  const courses = useStore((state) => state.courses);
  const setcourses = useStore((state) => state.setcourses);
  const setNavbar = useStore((state)=>state.setNavbar);
  const navbar = useStore((state)=>state.navbar);
  const setLang = useStore((state)=>state.setLang)
  const lang = useStore((state)=>state.lang)
  useEffect(() => {
    setLang(i18n.language)
    if(stop){
      axios.get(`${api}/api/v1/farobiy/auth/courseCategories/`).then((res) => {
        setcategories(res.data);
      });
    }
    setStop(false)
  }, [i18n.language]);
  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("uz");
          }}
        >
          UZ
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          RU
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </div>
      ),
    },
  ];
  if (t("check") === "uz") {
    items.splice(0, 1);
  }
  if (t("check") === "ru") {
    items.splice(1, 1);
  }
  if (t("check") === "en") {
    items.splice(2, 1);
  }
  return (
    <>
      <div className={style.navbar}>
        <div className="container">
        <NavbarBoot expand="lg">
          <NavbarBoot.Brand>
            <Link to="/">
              <img src={logo} />
            </Link>
          </NavbarBoot.Brand>
          <NavbarBoot.Toggle aria-controls="basic-navbar-nav" onClick={()=>setNavbar(false)} />
          <NavbarBoot.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <div
                onClick={() => {
                  setNavbar(!navbar);
                }}
                className="btnAqua btnLeft"
              >
                <span>{t("Kurslar")}</span> <img src={book} />
              </div>
              <Nav.Link className={style.navLink} href="#teachers">
                {t("Bizning ustozlarimiz")}
              </Nav.Link>
              <Nav.Link className={style.navLink} href="#about">
                {t("Biz haqimizda")}
              </Nav.Link>
              <Nav.Link className={style.navLink} href="#questions">
                {t("Ko'p beriladigan savollar")}
              </Nav.Link>
              <Dropdown
                menu={{
                  items:items
                }}
                key={{items}}
                placement="bottom"
                className={style.dropdown}
              >
                <Button style={{ textTransform: "uppercase" }}>
                  {t("check")} <img src={arrowDown} />
                </Button>
              </Dropdown>
              <a href="tel:+998777773030" className="btnAqua">
                <img src={phone} />{" "}
                +998 77 777 30 30
              </a>
            </Nav>
          </NavbarBoot.Collapse>
        </NavbarBoot>
        </div>
      </div>
      <div
        className="big_course"
        style={{ display: navbar ? "flex" : "none" }}
      >
        <div className="container">
        <div className="nav_courses">
          <div className="nav_course_item">
            {categories !== null ? (
              categories.map((item, id) => {
                return (
                  <div key={id}
                    onMouseOver={() => {
                      setNewCourses(item)
                      setcategory_id(id);
                      setsub_category_id(0);
                    }}
                    className={`${
                      id === category_id ? "active_nav" : ""
                    } nav_course_children`}
                  >
                    <div>
                      <Link className={"navbar-link"} to={`/allcourses/${item.id}`}>{lang==="uz"?item.nameUz:lang==="ru"?item.nameRu:item.nameEn}</Link>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </div>
                );
              })
            ) : (
              <></>
            )}
          </div>
          <div className="nav_course_item">
            {categories !== null ? (
              categories[category_id].courses.map((item, id) => {
                return (
                  <Link id={id}
                    onClick={() => {
                      setNavbar(false);
                    }}
                    to={`/onecourse/${lang==="uz"?item.nameUz:lang==="ru"?item.nameRu:item.nameEn}/${item.id}`}
                    onMouseOver={() => {
                      setsub_category_id(id);
                    }}
                    className={`${
                      id === sub_category_id ? "active_nav" : ""
                    } nav_course_children`}
                  >
                    <div>
                      <p>{lang==="uz"?item.nameUz:lang==="ru"?item.nameRu:item.nameEn}</p>
                    </div>
                    <span>
                      <IoIosArrowForward />
                    </span>
                  </Link>
                );
              })
            ) : (
              <></>
            )}
          </div>
          {/* <div className="nav_course_item_right">
            {courses !== null ? (
              courses[category_id][sub_category_id].map((item, key) => {
                return (
                  <Link
                    onClick={() => {
                      setbig_nav(false);
                    }}
                    to="/"
                    className={`nav_course_children`}
                  >
                    <div>
                      <p>{item.title}</p>
                    </div>
                  </Link>
                );
              })
            ) : (
              <></>
            )}
          </div> */}
        </div>
        </div>
      </div>
    </>
  );
}
