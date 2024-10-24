export type CometButtonProps = {
  label: string;
  leadingIcon?: string;
  trailingIcon?: string;
  iconTheme?: string;
  size?: string;
  onClick?: () => void;
};

export default function CometButton({
  label,
  leadingIcon,
  trailingIcon,
  iconTheme,
  size = "medium",
  onClick,
}: CometButtonProps) {
  return (
    <div>
      <comet-button
        onClick={onClick}
        label={label}
        leadingIcon={leadingIcon}
        trailingIcon={trailingIcon}
        iconTheme={iconTheme}
        size={size}
      ></comet-button>
    </div>
  );
}
