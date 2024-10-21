import Button from "./ui/Button";

type HeroProps = {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void;
};

export default function Hero({
  title,
  description,
  buttonText,
  onButtonClick,
}: HeroProps) {
  return (
    <div className="bg-gray-900 text-white py-20 px-5">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold mb-5">{title}</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">{description}</p>
        <Button className="mx-auto" onClick={onButtonClick}>
          {buttonText}
        </Button>
      </div>
    </div>
  );
}
