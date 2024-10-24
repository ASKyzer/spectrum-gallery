import CometButton from '../comet/comet-button/CometButton';

export type DashboardSectionTitleProps = {
  title: string;
  description: string;
  buttonText: string;
  onClick: () => void;
};

export default function DashboardSectionTitle({
  title,
  description,
  buttonText,
  onClick,
}: DashboardSectionTitleProps) {
  const handleButtonClick = () => {
    if (onClick) onClick();
  };

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h3 className='text-2xl text-[--primary-80] font-bold'>{title}</h3>
        <p className='text-[--primary-80]'>{description}</p>
      </div>
      <div>
        <CometButton label={buttonText} onClick={handleButtonClick} />
      </div>
    </div>
  );
}
