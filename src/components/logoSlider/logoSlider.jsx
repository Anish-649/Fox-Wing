import "./logoSlider.css"
import CompanySlide from "../companySlide/CompanySlide";
import Aliceblue from "../../assets/companyLogo/aliceblue.webp"
import EstaGlobal from "../../assets/companyLogo/estaglobal.webp"
import Justdial from "../../assets/companyLogo/justdial.png";
import Neesh from "../../assets/companyLogo/neeshperfumes.png";
import Yourstory from "../../assets/companyLogo/yourstory.png";
import Zeemusic from "../../assets/companyLogo/zeemusic.png";
import Zinmatt from "../../assets/companyLogo/zinmatt.webp";
import Gxp from "../../assets/companyLogo/gxp-logo-white.png";
import Salonik from "../../assets/companyLogo/logo_Salonik.png";
import LPU from "../../assets/companyLogo/LPUnew.png";
import Pror from "../../assets/companyLogo/pror.png";
const LogoSlider = ({ width = 100, height = 50, reverse = false }) => {
  const companies = [
    {
      name: "Aliceblue",
      logo: Aliceblue,
    },
    {
      name: "EstaGlobal",
      logo: EstaGlobal,
    },
    {
      name: "Justdial",
      logo: Justdial,
    },
    {
      name: "Neesh",
      logo: Neesh,
    },
    {
      name: "Yourstory",
      logo: Yourstory,
    },
    {
      name: "Zeemusic",
      logo: Zeemusic,
    },
    {
      name: "Zinmatt",
      logo: Zinmatt,
    },
    {
      name: "Lpu",
      logo: LPU,
    },
    {
      name: "Gxp",
      logo: Gxp,
    },
    {
      name: "Salonik",
      logo: Salonik,
    },
    {
      name: "pror",
      logo: Pror,
    },
  ];

  const quantity = companies.length;
  return (
    <div
      className="slider"
      reverse={reverse ? "true" : undefined}
      style={{
        "--width": `${width}px`,
        "--height": `${height}px`,
        "--quantity": quantity,
      }}
    >
      <div className="list">
        {companies.map((company, idx) => (
          <CompanySlide
            key={idx}
            position={idx + 1}
            width={width}
            height={height}
            logo={company.logo}
            name={company.name}
          />
        ))}
      </div>
    </div>
  );
};

export default LogoSlider
