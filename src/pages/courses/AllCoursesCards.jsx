import "../../css/dashboard/AllCoursesCard.css";
import img1 from "../../assets/allcourses/menimg1.svg";
import img2 from "../../assets/allcourses/menimg2.svg";
import img3 from "../../assets/allcourses/menimg3.svg";
import img4 from "../../assets/allcourses/menimg4.svg";
import img5 from "../../assets/allcourses/menimg5.svg";
import img6 from "../../assets/allcourses/menimg6.svg";
import img7 from "../../assets/allcourses/menimg7.svg";
import img8 from "../../assets/allcourses/menimg8.svg";
import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import { api } from "../../host/Host";
import { useTranslation } from "react-i18next";
function AllCoursesCards({ courses, lang }) {
  return (
    <div className="container">
      <div className="allcoursescards">
        <Row>
          {courses != null ? (
            courses.map((item, id) => {
              console.log(item);
              return (
                <Col key={id} lg={4} md={6} sm={12}>
                  <Link
                    to={`/onecourse/${
                      lang === "uz"
                        ? item.nameUz
                        : lang === "ru"
                        ? item.nameRu
                        : item.nameEn
                    }/${item.id}`}
                    className="courses_card courses_card_1"
                  >
                    <div className="courses_card_text">
                      {lang === "uz"
                        ? item.nameUz
                        : lang === "ru"
                        ? item.nameRu
                        : item.nameEn}
                    </div>
                    <div className="courses_card_img">
                      <img
                        src={`${api}:/api/v1/farobiy/auth/file/${item.imgsId}`}
                        alt=""
                      />
                    </div>
                  </Link>
                </Col>
              );
            })
          ) : (
            <></>
          )}
        </Row>
      </div>
    </div>
  );
}

export default AllCoursesCards;
