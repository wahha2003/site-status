import React from "react";
import { Home, Mail } from "@icon-park/react";
import CustomLink from "@/components/customLink";
import Package from "../../package.json";

const Footer = () => {
  // 加载配置
  const homeUrl = import.meta.env.VITE_HOME_URL;
  const siteIcp = import.meta.env.VITE_SITE_ICP;

  return (
    <footer id="footer">
      <div className="social">
        <CustomLink iconDom={<Home />} to={homeUrl} />
      </div>
      <div className="text">
        <p>
          {Package.alia}&nbsp;Version&nbsp;{Package.version}
{Package.alia}&nbsp;Version&nbsp;{Package.version}
        </p>
        <p>
          基于&nbsp;
          <CustomLink to="https://uptimerobot.com/" text="UptimeRobot" />
          &nbsp;接口&nbsp;|&nbsp;检测频率 5 分钟
        </p>
        <p>
          {siteIcp ? (
            <React.Fragment>
              &nbsp;|&nbsp;
              <CustomLink to="https://beian.miit.gov.cn/" text={siteIcp} />
            </React.Fragment>
          ) : null}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
