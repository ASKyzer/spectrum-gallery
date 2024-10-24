import CometSummary, { CometSummaryData } from '../comet/summary/CometSummary';

export interface SalesSummaryProps {
  iconType: string;
  icon: string;
  title: string;
  totalLabel: string;
  total: string;
  data: CometSummaryData;
}

export default function SalesSummary({
  iconType,
  icon,
  title,
  totalLabel,
  total,
  data,
}: SalesSummaryProps) {
  return (
    <div>
      <CometSummary
        iconType={iconType}
        icon={icon}
        title={title}
        totalLabel={totalLabel}
        total={total}
        data={data}
      />
    </div>
  );
}
