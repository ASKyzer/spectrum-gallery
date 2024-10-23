import "./FeaturesBanner.css";

export type CometFeaturesBannerProps = {
  theme?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  icon?: string;
};

export default function CometFeaturesBanner({
  theme = "primary",
  title,
  description,
  buttonLabel,
  icon,
}: CometFeaturesBannerProps) {
  return (
    <div className="FeaturesBanner">
      <comet-features-banner
        className="CometFeaturesBanner"
        theme={theme}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        icon={icon}
      ></comet-features-banner>
    </div>
  );
}
