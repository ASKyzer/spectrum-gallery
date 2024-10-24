export type CometCardProps = {
  children: React.ReactNode;
  className?: string;
  title?: string;
  info?: string;
  imageSrc?: string;
  imageBelowTitle?: boolean;
  border?: boolean;
  buttonConfig?: ButtonConfig;
};

export type ButtonConfig = {
  disabled?: boolean;
  label?: string;
  size?: "small" | "large";
  theme:
    | "comet"
    | "danger"
    | "default"
    | "info"
    | "link"
    | "primary"
    | "primary-inverted"
    | "subtle"
    | "success"
    | "warning";
  icon?: ButtonIcon;
  onClick?: () => void;
};

export type ButtonIcon = {
  name: string;
  position: "prefix" | "suffix";
};

export const CometCard = ({
  children,
  className,
  title,
  info,
  imageSrc,
  imageBelowTitle = false,
  border = false,
  buttonConfig,
}: CometCardProps) => {
  const handleActionButtonClick = () => {
    if (buttonConfig?.onClick) {
      buttonConfig.onClick();
    }
  };

  return (
    <div className={className}>
      <comet-card
        title={title}
        info={info}
        imageSrc={imageSrc}
        imageBelowTitle={imageBelowTitle}
        border={border}
        buttonConfig={buttonConfig}
        action-button-click={handleActionButtonClick}
      >
        {children}
      </comet-card>
    </div>
  );
};
