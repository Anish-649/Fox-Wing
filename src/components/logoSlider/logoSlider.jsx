import "./logoSlider.css"
import CompanySlide from "../companySlide/CompanySlide";
import Aliceblue from "../../assets/companyLogo/aliceblue.webp"
import EstaGlobal from "../../assets/companyLogo/estaglobal.webp"
import Justdial from "../../assets/companyLogo/justdial.png";
import Neesh from "../../assets/companyLogo/neeshperfumes.png";
import Yourstory from "../../assets/companyLogo/yourstory.png";
import Zeemusic from "../../assets/companyLogo/zeemusic.png";
import Zinmatt from "../../assets/companyLogo/zinmatt.webp";
const LogoSlider = ({ width = 100, height = 50, reverse = false }) => {
  const companies = [
    {
      name: "Aliceblue",
      logo: Aliceblue
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
      name:"Zinmatt",
      logo: Zinmatt
    }
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
