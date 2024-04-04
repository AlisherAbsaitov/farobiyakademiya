import React, { useEffect, useState } from "react";
import style from "../../css/dashboard/DashTeachers.module.css";
import parse from "html-react-parser";
import { useTranslation } from "react-i18next";
import { Col, Row } from "antd";
import { api } from "../../host/Host";
import axios from "axios";
import teacher_logo_1 from "../../assets/DashTeach/logo1.svg";
import { useStore } from "../../store/Store";
export default function DashTeachers() {
  const { t } = useTranslation();
  const [Data, setData] = useState(null);
  const lang = useStore((state) => state.lang);
  useEffect(() => {
    getTeacherData();
  }, []);

  const getTeacherData = () => {
    axios.get(`${api}/api/v1/farobiy/auth/teachers/`).then((res) => {
      setData(res.data);
    });
  };

  return (
    <div className={style.dashTech}>
      <div id="bigBox">
        <div id="teachers"></div>
      </div>
      <h1 className={"title"}>{t("Bizning ustozlarimiz")}</h1>
      <Row>
        {Data != null
          ? Data.map((item, id) => {
              return (
                <Col key={id} lg={6} md={12} sm={24}>
                  <div className={style.dashCard}>
                    <div className={style.card_img}>
                      <img
                        src={`${api}:/api/v1/farobiy/auth/file/${item.imagesId}`}
                        alt=""
                      />
                    </div>
                    <div className={style.card_text}>
                      <h1>
                        {lang === "uz"
                          ? item.fullname
                          : lang === "ru"
                          ? item.name_ru
                          : item.name_en}
                      </h1>
                      {item.courses.map((item,id) => {
                        return (
                          <p key={id} className={style.teacher_text}>
                            <img src={teacher_logo_1} alt="" width={30} />
                            <span className={style.teacher_type}>
                              {lang === "uz"
                                ? parse(item.nameUz.substring(0, 299))
                                : lang === "ru"
                                ? parse(item.nameRu.substring(0, 299))
                                : parse(item.nameEn.substring(0, 299))}
                            </span>
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </Col>
              );
            })
          : ""}
      </Row>
      
    </div>
  );
}
