interface CometSummaryProps {
  iconType?: string;
  icon?: string;
  title: string;
  totalLabel?: string;
  total?: string;
  data?: CometSummaryData;
}

export type CometSummaryData = { lines: string[]; downloadData?: DownloadData };

export type DownloadData = {
  title: string;
  description: string;
  buttonText: string;
  url: string;
};

export default function CometSummary(props: CometSummaryProps) {
  console.log("🚀 ~ CometSummary ~ props:", props);
  return (
    <div>
      <comet-summary
        iconType={props.iconType}
        icon={props.icon}
        title={props.title}
        totallabel={props.totalLabel}
        total={props.total}
        data={JSON.stringify(props.data)}
      ></comet-summary>
    </div>
  );
}
