// 底部状态栏
import React, { useEffect } from "react";
import { Tooltip } from "antd";
import {
  HomeOutlined,
  HistoryOutlined,
  SwapOutlined,
  PayCircleOutlined,
  VideoCameraOutlined,
  ControlOutlined,
  CreditCardOutlined,
  BlockOutlined,
  CarOutlined,
  ContactsOutlined,
} from "@ant-design/icons";

// 导入样式
import Style from "../../assets/scss/footerComp.module.scss";
// 导入函数
import { initFooterComp } from "../../handleFuncJS/footerCompFunc";
import { eventBus } from "../../utils/eventBus";

function FooterComp(props) {
  useEffect(() => {
    initFooterComp();
  }, []);

  // 跳转页面
  const handleNavigation = (URL) => {
    eventBus.emit("menuClick", { navUrl: URL });
  };
  return (
    <div className={Style["container"]}>
      <div className={Style["dock"]}>
        <Tooltip title="首页">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/home")}
          >
            <HomeOutlined />
          </div>
        </Tooltip>
        <Tooltip title="场内记录">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/parking/record")}
          >
            <HistoryOutlined />
          </div>
        </Tooltip>
        <Tooltip title="进出记录">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/flow/record")}
          >
            <SwapOutlined />
          </div>
        </Tooltip>
        <Tooltip title="缴费明细">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/payment/record")}
          >
            <PayCircleOutlined />
          </div>
        </Tooltip>
        <Tooltip title="车道监控">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/monitor/gate")}
          >
            <VideoCameraOutlined />
          </div>
        </Tooltip>
        <Tooltip title="场景监控">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/monitor/scene")}
          >
            <ControlOutlined />
          </div>
        </Tooltip>
        <Tooltip title="停车卡管理">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/parking/cardManage/parkingCard")}
          >
            <CreditCardOutlined />
          </div>
        </Tooltip>
        <Tooltip title="已过期卡管理">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/parking/cardManage/monthlyCard")}
          >
            <ContactsOutlined />
          </div>
        </Tooltip>
        <Tooltip title="车位纠正">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/parking/rectify")}
          >
            <CarOutlined />
          </div>
        </Tooltip>
        <Tooltip title="交接班记录">
          <div
            className={Style["dock-item"]}
            onClick={() => handleNavigation("/relieveLog")}
          >
            <BlockOutlined />
          </div>
        </Tooltip>
      </div>
    </div>
  );
}

export default React.memo(FooterComp);
