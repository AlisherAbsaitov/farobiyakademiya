import React, { useEffect, useState } from "react";
import image from "../../assets/DashForm/image.svg";
import { api } from "../../host/Host";
import { Col, Container, Row } from "react-bootstrap";
import style from "../../css/dashboard/DashForm.module.css";
import { Button,message,Space  } from "antd";
import { useTranslation } from "react-i18next";
import axios from "axios";
export default function DashForm() {
  const [messageApi, contextHolder] = message.useMessage();
  // const [Data,setData]=useState(null)
  const [userInfos,setUserinfos]=useState({fullname:"",phone:"",email:""})
  const { t } = useTranslation();
  const Send=()=>{
    axios.post(`${api}/api/v1/farobiy/auth/feedback/save/`,userInfos).then(res=>{
      setUserinfos({fullname:"",phone:"",email:""})
      messageApi.open({
        type: 'success',
        content: "Sizning ma'lumotlaringiz yuborildi",
      });
    }).catch(error=>{
      console.log(error);
    })
  }
  return (
    <>
    {contextHolder}
    <div className={style.wrap} id="form">
      <div className={style.header1}>
        <div className={style.text}>
          <h1>{t("Tanlovda yordam beramiz!")}</h1>
          <p>
            {t(
              "Kurs haqida savollaringiz bo'lsa yoki nimani tanlashni bilmasangiz, raqamingizni qoldiring - biz barcha savollaringizga javob beramiz."
            )}
          </p>
          <img src={image} className={style.img2} />
        </div>

        <div className={style.inputs}>
          <Row>
            <Col lg={12} md={12} sm={12} className={style.form_pad}>
              <input
                type="text"
                name="name"
                value={userInfos.fullname}
                onChange={(e)=>(setUserinfos({...userInfos, fullname:e.target.value}))}
                placeholder={t("Ismingiz")}
                className={style.input1}
              />
            </Col>
          </Row>
          <Row style={{ display: "flex", justifyContent: "space-between" }}>
            <Col lg={6} md={12} sm={12} className={style.form_pad}>
              <input
                type={"tel"}
                name="name1"
                value={userInfos.phone}
                placeholder={t("Telefon raqamingiz")}
                className={style.input2}
                onChange={(e)=>(setUserinfos({...userInfos, phone:e.target.value}))}
              />
            </Col>
            <Col lg={6} md={12} sm={12} className={style.form_pad}>
              <input
                type={"email"}
                name="name1"
                value={userInfos.email}
                placeholder={t("Pochtangiz")}
                className={style.input3}
                onChange={(e)=>(setUserinfos({...userInfos, email:e.target.value}))}
              />
            </Col>
          </Row>
          <Space>
             <Button onClick={Send} className="headBtn">{t("Yuborish")}</Button>
          </Space>
        </div>
      </div>
    </div>
    </>
  );
}
