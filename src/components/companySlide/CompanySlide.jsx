import "./companySlide.css"

const CompanySlide = ({position,width,height,logo,name}) => {
  return (
    <div
      className="item"
      style={{
        "--position": position,
        "--width": `${width}px`,
        "--height": `${height}px`,
      }}
    >
      <img src={logo} alt={name} />
      {<p className="company-name">{name}</p>}
    </div>
  );
}

export default CompanySlide
