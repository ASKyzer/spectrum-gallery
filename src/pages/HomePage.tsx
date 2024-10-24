import { useNavigate } from 'react-router-dom';
import CometFeaturesBanner from '../components/comet/features-banner/CometFeaturesBanner';
import DashboardSectionTitle from '../components/common/DashboardSectionTitle';
import FeaturedCarriers from '../components/sections/FeaturedCarriers';
import SalesSummary from '../components/sections/SalesSummary';
import PageHeader from '../components/ui/PageHeader';
import {
  HOME_PAGE_MAIN_FEATURES_BANNER_DATA,
  HOME_PAGE_SECONDARY_FEATURES_BANNER_DATA,
} from '../constants/features-banner';
import { HOME_PAGE_HEADER_DATA } from '../constants/home-page-header';
import { SALES_SUMMARY_DATA } from '../constants/sales-summary';

export default function HomePage() {
  const navigate = useNavigate();

  const handleFeatureBannerButtonClick = () => {
    console.log('Feature banner button clicked');
  };

  const handleCarrierButtonClick = () => {
    console.log('Carrier button clicked');
  };

  const handleSalesSummaryButtonClick = () => {
    console.log('Sales summary button clicked');
  };

  const handleSecondaryFeatureButtonClick = () => {
    navigate('/support');
  };

  return (
    <>
      <div className=''>
        <div className='mt-4 mb-10'>
          <PageHeader {...HOME_PAGE_HEADER_DATA} />
        </div>
        <div className='mb-14'>
          <CometFeaturesBanner
            {...HOME_PAGE_MAIN_FEATURES_BANNER_DATA}
            onClick={handleFeatureBannerButtonClick}
          />
        </div>
        <div className='mb-14'>
          <div className='mb-4'>
            <DashboardSectionTitle
              title='Featured Carriers'
              description='Explore our top-rated insurance providers, known for their excellent coverage options and customer service.'
              buttonText='View all carriers'
              onClick={handleCarrierButtonClick}
            />
          </div>
          <FeaturedCarriers />
        </div>
        <div className='mb-12'>
          <div className='mb-4'>
            <DashboardSectionTitle
              title='Sales Summary'
              description='Here is a summary of your three most recent sales.'
              buttonText='View all sales'
              onClick={handleSalesSummaryButtonClick}
            />
          </div>
          <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
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
        <div className='mb-14 mt-14'>
          <CometFeaturesBanner
            {...HOME_PAGE_SECONDARY_FEATURES_BANNER_DATA}
            onClick={handleSecondaryFeatureButtonClick}
          />
        </div>
      </div>
    </>
  );
}
