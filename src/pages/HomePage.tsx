import CometFeaturesBanner from "../components/comet/features-banner/CometFeaturesBanner";
import DashboardSectionTitle from "../components/common/DashboardSectionTitle";
import FeaturedCarriers from "../components/ui/FeaturedCarriers";
import PageHeader from "../components/ui/PageHeader";
import { HOME_PAGE_MAIN_FEATURES_BANNER_DATA } from "../constants/features-banner";

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

  return (
    <>
      <div className="">
        <div className="mt-4 mb-10">
          <PageHeader {...HOME_PAGE_HEADER_DATA} />
        </div>
        <div className="mb-10">
          <CometFeaturesBanner
            {...HOME_PAGE_MAIN_FEATURES_BANNER_DATA}
            onClick={handleFeatureBannerButtonClick}
          />
        </div>
        <div className="mb-10">
          <div className="mb-4">
            <DashboardSectionTitle
              title="Featured Carriers"
              description="Explore our top-rated insurance providers, known for their excellent coverage options and customer service."
              buttonText="See all"
              onClick={handleCarrierButtonClick}
            />
          </div>
          <FeaturedCarriers />
        </div>
      </div>
    </>
  );
}
