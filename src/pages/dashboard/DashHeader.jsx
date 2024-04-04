import React, { useEffect, useState } from "react";
import style from "../../css/dashboard/DashHeader.module.css";
import header from "../../assets/header.svg";
import star from "../../assets/icons/star.svg";
import line from "../../assets/icons/line.svg";
import { Button, Carousel } from "antd";
import { useTranslation } from "react-i18next";
import { useStore } from "../../store/Store";
export default function DashHeader() {
  const { t } = useTranslation();
  const setNavbar = useStore((state)=>state.setNavbar);
  const navbar = useStore((state)=>state.navbar);
  return (
    <div className={style.header}>
      <div className={style.headerBox}>
        <Carousel autoplay>
        <div>
            <div className={style.headerItem}>
              <div className={style.headerText}>
                <p>
                  {t("Zamonaviy IT o'quv markazi")} <img src={star} />
                </p>
                {t("check") == "uz" ? (
                   <h1 className={style.headerTitle}>
                    Biz sizga{" "}
                    <span>
                      zamonaviy kasbni <img src={line} />
                    </span>{" "}
                    o'rganishga va ish boshlashingizga yordam beramiz
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "ru" ? (
                  <h1 className={style.ruText}>
                    Мы поможем вам освоить{" "}
                    <span>
                      современную профессию
                      <img src={line} />
                    </span>{" "}
                    и начать работать
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "en" ? (
                   <h1 className={style.headerTitle}>
                    We will help you learn a<br />{" "}
                    <span>
                      modern profession
                      <img src={line} />
                    </span>{" "}
                    and start working
                  </h1>
                ) : (
                  ""
                )}
                <button onClick={()=>setNavbar(!navbar)} className={style.headBtn}>
                  {t("Kurslarni tanlash")}
                </button>
              </div>
              <div className={style.headerImg}>
                <img src={header} />
              </div>
            </div>
          </div>
          <div>
            <div className={style.headerItem}>
              <div className={style.headerText}>
                <p>
                  {t("Zamonaviy IT o'quv markazi")} <img src={star} />
                </p>
                {t("check") == "uz" ? (
                   <h1 className={style.headerTitle}>
                    Biz sizga{" "}
                    <span>
                      zamonaviy kasbni <img src={line} />
                    </span>{" "}
                    o'rganishga va ish boshlashingizga yordam beramiz
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "ru" ? (
                  <h1 className={style.ruText}>
                    Мы поможем вам освоить{" "}
                    <span>
                      современную профессию
                      <img src={line} />
                    </span>{" "}
                    и начать работать
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "en" ? (
                   <h1 className={style.headerTitle}>
                    We will help you learn a<br />{" "}
                    <span>
                      modern profession
                      <img src={line} />
                    </span>{" "}
                    and start working
                  </h1>
                ) : (
                  ""
                )}
                <button onClick={()=>setNavbar(!navbar)} className={style.headBtn}>
                  {t("Kurslarni tanlash")}
                </button>
              </div>
              <div className={style.headerImg}>
                <img src={header} />
              </div>
            </div>
          </div>
          <div>
            <div className={style.headerItem}>
              <div className={style.headerText}>
                <p>
                  {t("Zamonaviy IT o'quv markazi")} <img src={star} />
                </p>
                {t("check") == "uz" ? (
                   <h1 className={style.headerTitle}>
                    Biz sizga{" "}
                    <span>
                      zamonaviy kasbni <img src={line} />
                    </span>{" "}
                    o'rganishga va ish boshlashingizga yordam beramiz
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "ru" ? (
                  <h1 className={style.ruText}>
                    Мы поможем вам освоить{" "}
                    <span>
                      современную профессию
                      <img src={line} />
                    </span>{" "}
                    и начать работать
                  </h1>
                ) : (
                  ""
                )}
                {t("check") == "en" ? (
                   <h1 className={style.headerTitle}>
                    We will help you learn a<br />{" "}
                    <span>
                      modern profession
                      <img src={line} />
                    </span>{" "}
                    and start working
                  </h1>
                ) : (
                  ""
                )}
                <button onClick={()=>setNavbar(!navbar)} className={style.headBtn}>
                  {t("Kurslarni tanlash")}
                </button>
              </div>
              <div className={style.headerImg}>
                <img src={header} />
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
}
