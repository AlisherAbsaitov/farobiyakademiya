import React from "react";
import { useTranslation } from "react-i18next";
import style from "../../css/dashboard/DashCourse.module.css";
import arrow from "../../assets/icons/arrow.svg";
import card_1 from "../../assets/course/card_1.png";
import card_2 from "../../assets/course/card_2.png";
import card_3 from "../../assets/course/card_3.png";
import card_4 from "../../assets/course/card_4.png";
import card_5 from "../../assets/course/card_5.png";
import { Link } from "react-router-dom";
export default function DashCourse() {
  const { t } = useTranslation();
  return (
    <div className={style.row}>
      <h1 className="title">Biz orgatadigan kurslar</h1>
      <div className={style.course}>
        <div className={style.left}>
          <div className={`${style.col} ${style.col_mini}`}>
            <div className={style.card}>
              <div className={style.card_img}>
                <img src={card_1} />
              </div>
              <div className={style.card_back}>
                <h3>{t("Dastrulash")}</h3>
                <Link to={"/allcourses/1"} className="btnBtn">
                  {t("Batafsil")} <img src={arrow} />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${style.col} ${style.col_big}`}>
            <div className={style.card}>
              <div className={style.card_img}>
                <img src={card_2} />
              </div>
              <div className={style.card_back}>
                <h3>{t("Dizayn")}</h3>
                <Link to={"/allcourses/2"} className="btnBtn">
                  {t("Batafsil")} <img src={arrow} />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${style.col} ${style.col_big}`}>
            <div className={style.card}>
              <div className={style.card_img}>
                <img src={card_4} />
              </div>
              <div className={style.card_back}>
                <h3>{t("Logistika broketligi")}</h3>
                <Link to={"/allcourses/4"} className="btnBtn">
                  {t("Batafsil")} <img src={arrow} />
                </Link>
              </div>
            </div>
          </div>
          <div className={`${style.col} ${style.col_mini}`}>
            <div className={style.card}>
              <div className={style.card_img}>
                <img src={card_5} />
              </div>
              <div className={style.card_back}>
                <h3>{t("Videomontaj va maxsus effektlar")}</h3>
                <Link to={"/allcourses/5"} className="btnBtn">
                  {t("Batafsil")} <img src={arrow} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.right}>
          <div className={`${style.col} ${style.col_right}`}>
            <div className={style.card}>
              <div className={style.card_img}>
                <img src={card_3} />
              </div>
              <div className={style.card_back}>
                <h3>{t("Marketing")}</h3>
                <Link to={"/allcourses/3"} className="btnBtn">
                  {t("Batafsil")} <img src={arrow} />
                </Link>
              </div>
            </div>
          </div>
          <div className={style.col}>
            <div className={style.card_new}>
              <p
                dangerouslySetInnerHTML={{
                  __html: t("Tez orada <br/> yangi kurs!"),
                }}
              ></p>
              <div className={style.lenta}>
                <span>{t("Tez orada yangi kurs")} </span>
                <span>{t("Tez orada yangi kurs")} </span>
                <span>{t("Tez orada yangi kurs")}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
