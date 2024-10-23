import FeaturesBanner from "../components/comet/features-banner/FeaturesBanner";
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

  return (
    <>
      <div className="">
        <div className="mt-4 mb-10">
          <PageHeader {...HOME_PAGE_HEADER_DATA} />
        </div>
        <FeaturesBanner
          {...HOME_PAGE_MAIN_FEATURES_BANNER_DATA}
          onClick={handleFeatureBannerButtonClick}
        />
      </div>
    </>
  );
}
