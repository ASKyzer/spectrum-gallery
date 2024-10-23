export type CometSmallCardProps = {
  children?: React.ReactNode;
  title: string;
  description: string;
  logo?: string;
  className?: string;
};

export default function CometSmallCard({
  children,
  title,
  description,
  logo,
  className,
}: CometSmallCardProps) {
  return (
    <comet-small-card
      title={title}
      description={description}
      className={className}
    >
      {children}
    </comet-small-card>
  );
}
