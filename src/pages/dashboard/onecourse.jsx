import React, { useEffect, useState } from "react";
import style from "../../css/dashboard/onecourse.module.css";
import course_image from "../../assets/onecourse/header.png";
import img2 from "../../assets/onecourse/header2.png";
import img4 from "../../assets/onecourse/header3.png";
import one from "../../assets/onecourse/one.png";
import two from "../../assets/onecourse/two.png";
import three from "../../assets/onecourse/three.png";
import four from "../../assets/onecourse/four.png";
import { Col, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import { Link, useParams } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import DashTeachers from "./DashTeachers";
import { getCourse } from "../../host/Config";
import { useStore } from "../../store/Store";
export default function Onecourse() {
  const { t } = useTranslation();
  const lang = useStore((state) => state.lang);
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    getCourse(id).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, [id]);
  return (
    <>
      <main className={style.course_main}>
        <section className={style.course_section}>
          <div className="container">
            <div className={style.course_infos_box}>
              <div className={style.course_infos}>
                <h3 className={style.course_title}>
                  {data !== null ? (
                    lang === "uz" ? (
                      data.nameUz
                    ) : lang === "ru" ? (
                      data.nameRu
                    ) : (
                      data.nameEn
                    )
                  ) : (
                    <></>
                  )}
                </h3>
                <p className={style.course_desc}>
                {data !== null ? (
                    lang === "uz" ? (
                      data.aboutUz
                    ) : lang === "ru" ? (
                      data.aboutRu
                    ) : (
                      data.aboutEn
                    )
                  ) : (
                    <></>
                  )}
                </p>
                <a className={style.course_link} href="#form">
                  {t("Kursga yozilish")}
                  <BsArrowRight className={style.course_link_icon} />{" "}
                </a>
              </div>
              <img
                className={style.course_img}
                src={course_image}
                alt="Json"
                width="314"
                height="314"
              />
            </div>
          </div>
        </section>
        <section className={style.course_about}>
          <div className="container">
            <Row>
              <Col lg={7} md={12} sm={12}>
                <div className={style.course_about_left}>
                  <div className={style.course_about_texts_box}>
                    <h2 className={style.course_about_title}>
                      {t("Professiya haqida")}
                    </h2>
                    <p className={style.course_about_desc}>
                      {t("Veb-ishlab chiquvchilarga bo'lgan talab yuqoriligicha qolmoqda - biznesning daromadi bevosita mijozlar uchun kompaniya veb-saytidan foydalanish qanchalik qulayligiga bog'liq. Bozorda mutaxassislar etarli emas, shuning uchun kompaniyalar yuqori maosh va masofadan ishlashni taklif qilishadi.")}
                    </p>
                  </div>
                  <img
                    className={style.course_about_left_image}
                    src={img2}
                    alt=""
                    width={"100%"}
                    height={"334"}
                  />
                </div>
              </Col>
              <Col lg={5} md={5} sm={12}>
                <img
                  className={style.course_about_right_image}
                  src={img4}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                />
              </Col>
            </Row>
          </div>
        </section>
        <section className={style.learn_course}>
          <div className="container">
            <h2 className={style.learn_course_title}>
              {t("Kursda nimalarga organasiz")}
            </h2>
            <Row>
              <Col lg={6} md={12} sm={12}>
                <div className={style.learn_course_card}>
                  <div>
                    <h3 className={style.card_title}>
                      {t("HTML va CSS-da veb-saytlar yarating")}
                    </h3>
                    <div className={style.card_desc_box}>
                      <p className={style.card_desc}>
                        {t("Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling.")}
                      </p>
                    </div>
                  </div>
                  <img
                    className={style.card_img}
                    src={one}
                    alt="bir raqami"
                    width={"40"}
                    height={"100"}
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className={style.learn_course_card}>
                  <div>
                    <h3 className={style.card_title}>
                      {t("JavaScript va PHP da dastur")}
                    </h3>
                    <div className={style.card_desc_box}>
                      <p className={style.card_desc}>
                        {t("Bir vaqtning o'zida ikkita mashhur dasturlash tilini o'zlashtiring. JavaScript-da siz interaktiv ")}
                      </p>
                    </div>
                  </div>
                  <img
                    className={style.card_img}
                    src={two}
                    alt="bir raqami"
                    width={"40"}
                    height={"100"}
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className={style.learn_course_card}>
                  <div>
                    <h3 className={style.card_title}>
                      {t("HTML va CSS-da veb-saytlar yarating")}
                    </h3>
                    <div className={style.card_desc_box}>
                      <p className={style.card_desc}>
                        {t("Eng mashhur maket tillarini o'zlashtirib oling va istalgan ekranda yaxshi ko'rinadigan veb-saytlarni yarata oling.")}
                      </p>
                    </div>
                  </div>
                  <img
                    className={style.card_img}
                    src={three}
                    alt="bir raqami"
                    width={"40"}
                    height={"100"}
                  />
                </div>
              </Col>
              <Col lg={6} md={12} sm={12}>
                <div className={style.learn_course_card}>
                  <div>
                    <h3 className={style.card_title}>
                      {t("HTML va CSS-da veb-saytlar yarating")}
                    </h3>
                    <div className={style.card_desc_box}>
                      <p className={style.card_desc}>
                        {t("Bir vaqtning o'zida ikkita mashhur dasturlash tilini o'zlashtiring. JavaScript-da siz interaktiv ")}
                      </p>
                    </div>
                  </div>
                  <img
                    className={style.card_img}
                    src={four}
                    alt="bir raqami"
                    width={"40"}
                    height={"100"}
                  />
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </main>
      <DashTeachers />
    </>
  );
}
