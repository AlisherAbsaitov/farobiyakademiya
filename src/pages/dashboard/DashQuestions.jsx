import { Collapse } from "antd";
import React from "react";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import "../../css/dashboard/DashQuestions.css";
import { useTranslation } from "react-i18next";
const { Panel } = Collapse;
export default function DashQuestions() {
  const { t } = useTranslation();
  return (
    <div className="dashQuestion">
      <div id="bigBox">
        <div id="questions"></div>
      </div>
      <h1 className="title">{t("Ko'p so'raladigan savollar")}</h1>
      <Collapse
        expandIcon={({ isActive }) =>
          isActive ? (
            <MinusCircleFilled
              style={{
                fontSize: "24px",
                marginRight: "12px",
                color: "#959595",
              }}
            />
          ) : (
            <PlusCircleFilled
              style={{
                fontSize: "24px",
                marginRight: "12px",
                color: "#959595",
              }}
            />
          )
        }
        collapsible="header"
        expandIconPosition={"end"}
        defaultActiveKey={["-1"]}
      >
        <Panel header={t("Farobiy IT Academy bu nima?")}>
          <p className="p_text_ques"></p>
        </Panel>
        <Panel header={t("Farobiy IT Academy a'zoligimga nimalar kiradi?") }>
          <p className="p_text_ques"></p>
        </Panel>
        <Panel header={ t("Farobiy IT Academy dan nimani o'rganishim mumkin?") }>
          <p className="p_text_ques"></p>
        </Panel>
        <Panel header={ t("Sinovim tugagandan keyin nima bo'ladi?") }>
          <p className="p_text_ques"></p>
        </Panel>
        <Panel header={t("Farobiy IT Academy da dars bera olamanmi?") }>
          <p className="p_text_ques"></p>
        </Panel>
      </Collapse>
    </div>
  );
}
