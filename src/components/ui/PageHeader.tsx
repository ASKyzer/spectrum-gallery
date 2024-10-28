import './PageHeader.css';

export type PageHeaderProps = {
  title: string;
  description: string;
};

export default function PageHeader({
  title = 'Page Title',
  description = 'Enter the description of the page here.',
}: PageHeaderProps) {
  return (
    <div>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
    </div>
  );
}
