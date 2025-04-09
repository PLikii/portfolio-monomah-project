import HeroItem from "./HeroItem";

export default function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <HeroItem
        imgSrc="/hero1.jpg"
        title="Для бізнесу"
        description="Для приватного сектору"
        href="/for-business"
        dataAos="fade-right"
      />
      <HeroItem
        imgSrc="/hero2.jpg"
        title="Для дому"
        description="Для комерційного сектору"
        href="/for-home"
        dataAos="fade-left"
      />
    </div>
  );
}
