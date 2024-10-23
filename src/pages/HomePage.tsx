import CometFeaturesBanner from "../components/comet/features-banner/CometFeaturesBanner";
import DashboardSectionTitle from "../components/common/DashboardSectionTitle";
import FeaturedCarriers from "../components/sections/FeaturedCarriers";
import SalesSummary from "../components/sections/SalesSummary";
import PageHeader from "../components/ui/PageHeader";
import { HOME_PAGE_MAIN_FEATURES_BANNER_DATA } from "../constants/features-banner";
import { SALES_SUMMARY_DATA } from "../constants/sales-summary";

export default function HomePage() {
  const HOME_PAGE_HEADER_DATA = {
    title: "Welcome to InsureGuard: Your Trusted Insurance Partner",
    description:
      "Discover our comprehensive risk analysis tool that empowers you to make informed decisions and find the perfect policy tailored to your unique needs.",
    classNames: "my-10",
  };

  const handleFeatureBannerButtonClick = () => {
    console.log("Feature banner button clicked");
    // TODO: Navigate to the customers list page.
  };

  const handleCarrierButtonClick = () => {
    console.log("Carrier button clicked");
    // TODO: Navigate to the carriers list page.
  };

  const handleLeadButtonClick = () => {
    console.log("Lead button clicked");
    // TODO: Navigate to the leads list page.
  };

  return (
    <>
      <div className="">
        <div className="mt-4 mb-10">
          <PageHeader {...HOME_PAGE_HEADER_DATA} />
        </div>
        <div className="mb-14">
          <CometFeaturesBanner
            {...HOME_PAGE_MAIN_FEATURES_BANNER_DATA}
            onClick={handleFeatureBannerButtonClick}
          />
        </div>
        <div className="mb-14">
          <div className="mb-4">
            <DashboardSectionTitle
              title="Featured Carriers"
              description="Explore our top-rated insurance providers, known for their excellent coverage options and customer service."
              buttonText="View all carriers"
              onClick={handleCarrierButtonClick}
            />
          </div>
          <FeaturedCarriers />
        </div>
        <div className="mb-12">
          <div className="mb-4">
            <DashboardSectionTitle
              title="Sales Summary"
              description="Here is a summary of your three most recent sales."
              buttonText="View all sales"
              onClick={handleLeadButtonClick}
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {SALES_SUMMARY_DATA.map((sale, index) => (
              <SalesSummary
                key={index}
                iconType={sale.iconType}
                icon={sale.icon}
                title={sale.title}
                totalLabel={sale.totalLabel}
                total={sale.total}
                data={sale.data}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
