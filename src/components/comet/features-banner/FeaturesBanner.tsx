import { useEffect, useRef } from "react";
import "./FeaturesBanner.css";

export type CometFeaturesBannerProps = {
  theme?: string;
  title: string;
  description: string;
  buttonLabel?: string;
  icon?: string;
  onClick?: () => void;
};

export default function CometFeaturesBanner({
  theme = "primary",
  title,
  description,
  buttonLabel,
  icon,
  onClick,
}: CometFeaturesBannerProps) {
  const cometFeaturesBannerRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (onClick) onClick();
  };

  useEffect(() => {
    const cometFeaturesBanner = cometFeaturesBannerRef.current;

    cometFeaturesBanner?.addEventListener("button-click", handleButtonClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="FeaturesBanner">
      <comet-features-banner
        className="CometFeaturesBanner"
        theme={theme}
        title={title}
        description={description}
        buttonLabel={buttonLabel}
        icon={icon}
        ref={cometFeaturesBannerRef}
      ></comet-features-banner>
    </div>
  );
}
