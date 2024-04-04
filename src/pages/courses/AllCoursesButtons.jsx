import { Button } from "antd";
import style from "../../css/dashboard/AllCoursesbutton.module.css";
import img1 from "../../assets/allcourses/img1.svg";
import img2 from "../../assets/allcourses/img2.svg";
import img3 from "../../assets/allcourses/img3.svg";
import img4 from "../../assets/allcourses/img4.svg";
import img5 from "../../assets/allcourses/img5.svg";
import { useStore } from "../../store/Store";
import { api } from "../../host/Host";
import { Link } from "react-router-dom";
function AllCoursesButtons({id}) {
  const categories = useStore((state) => state.categories);
  const lang = useStore((state) => state.lang);
  console.log(categories);
  return (
    <div className="container">
      <ul className={style.courses_list}>
        {categories !== null ? (
          categories.map((item,index) => {
            return (
              <li className={item.id===Number(id)?style.courser_active:style.courses_list_item} key={index}>
                <Link className={style.course_link} to={`/allcourses/${item.id}`}>
                <img
                  className={style.courses_item_img}
                  src={`${api}:/api/v1/farobiy/auth/file/${item.imgsId}`}
                  alt="Dasturlash"
                  width={25}
                  height={25}
                />
                <strong className={style.courses_item_title}>
                  {lang === "uz"
                    ? item.nameUz
                    : lang === "ru"
                    ? item.nameRu
                    : item.nameEn}
                </strong></Link>
              </li>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </div>
  );
}

export default AllCoursesButtons;
