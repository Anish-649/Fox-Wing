import "./logoSlider.css"
import CompanySlide from "../companySlide/CompanySlide";

const LogoSlider = ({ width = 100, height = 50, reverse = false }) => {
  const companies = [
    {
      name: "Google",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lfc4548375734de4aa0151bef377e72b1708b5072.png",
    },
    {
      name: "Microsoft",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l11f3242118ff2add5d117cbf216f29ac578f6ba6.png",
    },
    {
      name: "Apple",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l476432a3e85a0aa21c23f5abd2975a89b6820d63.png",
    },
    {
      name: "Tesla",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lefd12553d6a4f7e57b3ac4f4927181d7a651d0d6.png",
    },
    {
      name: "Amazon",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l74c0fda1054b04bf3e2365d467e32a47e3feba7b.png",
    },
    {
      name: "Tata",
      logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l319f2de047c5d0998fcfcb29dfe08ee0e17fb90c.png",
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
