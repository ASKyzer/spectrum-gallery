import Hero from "../components/Hero";

export default function HomePage() {
  const heroData = {
    title: "Explore Stunning Photography",
    description:
      "Discover a breathtaking collection of amazing photographs from world-renowned photographers, featuring a vast array of categories. From landscapes and portraits to wildlife and architecture, immerse yourself in visual stories that capture the essence of the world.",
    buttonText: "Start Exploring",
  };

  const handleButtonClick = () => {
    console.log("Button clicked");
  };

  return (
    <>
      <Hero {...heroData} onButtonClick={handleButtonClick} />
    </>
  );
}
