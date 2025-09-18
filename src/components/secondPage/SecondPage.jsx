import "./secondPage.css"

export default function SecondPage() {
     const companies = [
    { name: "Google", logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/lfc4548375734de4aa0151bef377e72b1708b5072.png" },
    { name: "Microsoft", logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l11f3242118ff2add5d117cbf216f29ac578f6ba6.png" },
    { name: "Apple", logo: "https://in.pinterest.com/pin/639722322113992754/" },
    { name: "Tesla", logo: "https://i.pinimg.com/1200x/eb/14/1f/eb141fab6930f002660a1e3fbba80854.jpg" },
    { name: "Amazon", logo: "https://api-ninjas-data.s3.us-west-2.amazonaws.com/logos/l74c0fda1054b04bf3e2365d467e32a47e3feba7b.png" },
    { name: "Tata", logo: "https://i.pinimg.com/1200x/dc/52/fd/dc52fdb15d4430b4a440ed1c571bd891.jpg" }
  ];
  return (
    <div className='secondPage'>
        
      <h2 className="title">Worked With</h2>
      <div className="secondPage_scroll">
     <div className="scroll-track">
          {companies.map((c, i) => (
            <div className="company" key={i}>
              <img src={c.logo} alt={c.name} />
            </div>
          ))}
          {/* duplicate logos for infinite effect */}
          {companies.map((c, i) => (
            <div className="company" key={`dup-${i}`}>
              <img src={c.logo} alt={c.name} />
            </div>
          ))}
        </div>
     
       </div> 
        
    </div>
 
  );
      
  
}
