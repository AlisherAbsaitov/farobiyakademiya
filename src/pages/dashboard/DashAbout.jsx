import { Row, Col} from "react-bootstrap";
import style from "../../css/dashboard/DashAbout.module.css";
import like from "../../assets/DashAbout/Aicon1.svg";
import card1img from "../../assets/DashAbout/AboutImg2.svg";
import card2img from "../../assets/DashAbout/AboutImg1.svg";
import medal from "../../assets/DashAbout/Aicon2.svg";
import { useTranslation } from "react-i18next";

export default function DashAbout() {
  const { t } = useTranslation();
  return (
    <div>
      <div id="bigBox">
        <div id="about"></div>
      </div>
      <div className={style.dashAbout}>
        <h2 className={"title"}>{t("Biz haqimizda")}</h2>
        <Row>
          <Col className={style.col1} lg={5} md={12}>
            <div className={style.card1}>
              <img src={like} alt="like" />
              <h1>{t("Farobiy IT Academy - da biz oddiy ko'rinadigan yaratish harakati odamlar hayotida o'sish.")}</h1>
            </div>
            <div className={style.about_img1}>
              <img
                className={""}
                src={card1img}
                alt="image"
                width={"100%"}
                height={"100%"}
              />
            </div>
          </Col>
          <Col className={style.col2} lg={7} md={12}>
            <div style={{ width: "100%" }}>
              <img
                className={""}
                src={card2img}
                alt="image"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div className={style.card2}>
              <img src={medal} alt="like" />
              <h1>{t("Farobiy IT Academy - bu illyustratsiya, dizayn, fotografiya, video, freelancing va boshqa mavzularda ijodiy va qiziquvchan.")}</h1>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
