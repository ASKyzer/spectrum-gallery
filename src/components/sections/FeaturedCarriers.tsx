import { CometCard } from "../comet/card/CometCard";
import CometSmallCard from "../comet/small-card/CometSmallCard";
import "./FeaturedCarriers.css";

type Carrier = {
  id: string;
  title: string;
  logo?: string;
  description: string;
};

export default function FeaturedCarriers() {
  const handleCarrierClick = () => {
    console.log("Carrier clicked");
  };

  const featuredCarriers: Carrier[] = [
    {
      id: "1",
      title: "Deurag",
      logo: "deurag",
      description: "Available products: 3",
    },
    {
      id: "2",
      title: "Allianz",
      logo: "allianz",
      description: "Available products: 3",
    },
    {
      id: "3",
      title: "AXA",
      logo: "axa",
      description: "Available products: 3",
    },
    {
      id: "4",
      title: "Arag",
      logo: "arag",
      description: "Available products: 3",
    },
    {
      id: "5",
      title: "Swiss Life",
      logo: "swiss-life",
      description: "Available products: 3",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      <div
        className="flex flex-nowrap overflow-x-auto gap-4 w-full cursor-pointer"
        onClick={handleCarrierClick}
      >
        {featuredCarriers?.map((carrier) => (
          <CometCard key={carrier.id} className="w-full">
            <CometSmallCard {...carrier}>
              <div slot="comet-small-card-icon" className="mr-4">
                <comet-icon
                  size="48"
                  name={carrier.logo}
                  type="company-logos"
                ></comet-icon>
              </div>
            </CometSmallCard>
          </CometCard>
        ))}
      </div>
    </div>
  );
}
