import HeroItem from "./HeroItem";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <HeroItem
        imgSrc="/hero1.jpg"
        title="For business"
        description="For the commercial sector"
        href="/for-business"
        dataAos="fade-right"
      />
      <HeroItem
        imgSrc="/hero2.jpg"
        title="For home"
        description="For the private sector"
        href="/for-home"
        dataAos="fade-left"
      />
    </div>
  );
}
