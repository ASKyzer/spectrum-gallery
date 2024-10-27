export type CometStagesProps = {
  title: string;
  subtitle: string;
  router_link?: string;
  state: string;
  icon?: string;
};

export default function CometStages({
  stages,
}: {
  stages: CometStagesProps[] | string;
}) {
  return (
    <div>
      <comet-stages stages={JSON.stringify(stages)}></comet-stages>
    </div>
  );
}
