import React from 'react'
import logo from '../assets/logo.svg'
import style from '../css/components/Footer.module.css'
import { useTranslation } from 'react-i18next'
import { Col, Row } from 'react-bootstrap'

export default function Footer() {
  const { t } = useTranslation()
  const items = [
    {
      key: "1",
      label: (
        <div onClick={() => {i18n.changeLanguage("uz");}}>UZ</div>
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={() => {i18n.changeLanguage("ru");}}>RU</div>
      ),
    },
    {
      key: "3",
      label: (
        <div onClick={() => {i18n.changeLanguage("en");}}>EN</div>
      ),
    },
  ];


  return (
    <div className={style.footer}>
      <div className={style.farobiy}>
        <Row>
          <Col lg={3} md={6} >
            <img src={logo} alt="" />
            <p style={{ paddingTop: "20px" }}>{t('Biz sizga mahsulot sotish uchun bu yerda  emasmiz, biz tajribamiz orqali qiymat sotamiz.')}</p>
          </Col>

          <Col lg={3} md={6} >
            <h6>{t('Manzil')}</h6>
            <p>{t("Toshkent shahri, Yunusobod tumani,ko'ch. Amir Temur 129B")}</p>
          </Col>

          <Col lg={3} md={6}>
            <h6>{t('Yordam')}</h6>
            <p>+998 91 7775411</p>
          </Col >


          <Col className={style.address} lg={3} md={6} >
            <div className={style.top}>
              <h6>{t('Pochta')}</h6>
              <p>{t('Info@farobiy.com')}</p>
            </div>
            <div className={style.bottom}>
              <p>{t('Instagram')}</p>
              <p>{t('Twitter')}</p>
              <p>{t('Telegram')}</p>
              <p>{t('Facebook')}</p>
            </div>

          </Col>


        </Row>
      </div>

      <hr />
      <div className={style.farbiy2}>
        <p>{t('© 2023 by. Farobiy IT Academy')}</p>
      </div>



    </div>
  )
}
