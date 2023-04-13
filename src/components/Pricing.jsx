import tier1 from '../media/tier1.png'
import tier2 from '../media/tier2.png'
import tier3 from '../media/tier3.png'

function PricingComponent() {

  const pricing = [
    {
      title: "Basic",
      price: "20",
      perks: [
        "fitness",
        "science based training",
        "custom meal plan",
        "personal coach",
        "fat loss",
      ],
      tier: tier1,
    },
    {
      title: "Standard",
      price: "39",
      perks: [
        "fitness",
        "science based training",
        "custom meal plan",
        "personal coach",
        "fat loss",
      ],
      tier: tier2,
    },
    {
      title: "Extra",
      price: "65",
      perks: [
        "fitness",
        "science based training",
        "custom meal plan",
        "personal coach",
        "fat loss",
      ],
      tier: tier3,
    },
  ];

    return ( 
        <div className="w-100 text-center">
            <h1>Pricing plan</h1>
            <div className="flex" style={{justifyContent: 'center'}}>

            <p style={{maxWidth: '500px'}}>
              Fitter does not charge administration costs, registration is free.
            </p>
            </div>
            <div className="flex noflex" style={{ marginTop: '40px', justifyContent: "center" }}>
              {pricing.map((pricing, i) => {
                return (
                  <div style={{ display: "inline-block" }} key={i}>
                    <div
                      className="card rounded shadow-big"
                      style={{
                        height: "425px",
                        padding: "0px",
                        overflow: "hidden",
                      }}
                    >
                      <span
                        className="image-container"
                        style={{
                          display: "block",
                          height: "200px",
                          width: "100%",
                          backgroundImage: `url(${pricing.tier})`,
                          backgroundSize: "cover",
                          backgroundPosition: "right",
                        }}
                      ></span>
                      <div
                        className="flex"
                        style={{ justifyContent: "center" }}
                      >
                        <div style={{backgroundColor:'#fff', padding: '15px', maxWidth: '250px', marginTop: '-35px'}}>
                          <h1
                            className="text-header"
                            style={{ fontSize: "16px" }}
                          >
                            {pricing.title}
                          </h1>
                          <p>
                            <sup
                              style={{
                                fontWeight: "300",
                                fontSize: "20px",
                              }}
                            >
                              &euro;
                            </sup>
                            <span
                              style={{
                                fontWeight: "bold",
                                fontSize: "36px",
                                padding: "10px",
                              }}
                            >
                              {pricing.price}
                            </span>
                            <sub
                              style={{
                                fontWeight: "300",
                                fontSize: "20px",
                              }}
                            >
                              p/m
                            </sub>
                          </p>
                          <ul style={{textAlign: 'left'}}>

                          {pricing.perks.map((perk, i) => {
                            return <li key={i}>{perk}</li>;
                          })}
                          </ul>
                        </div>
                      </div>
                      <button className="btn btn-block" onClick={()=>{alert(`${pricing.title} subscription`)}}>go for it <span style={{color: '#fff'}}>&rarr;</span></button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
     );
}

export default PricingComponent;