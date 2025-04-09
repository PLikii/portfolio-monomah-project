export type Project = {
  id: number;
  location: string;
  stationType: string;
  moduleType: string;
  title: string;
  img: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "Grid Solar Power Plant 82.8 kW Fora Lisnyky",
    location: "Kyiv region, Kotsyubynske",
    stationType: "Grid-connected station for self-consumption compensation",
    moduleType: "Monocrystalline Canadian Solar 460 W",
    img: "/benefits1.jpg",
  },
  {
    id: 2,
    title: "Grid Solar Power Plant 56.4 kW AgroTech Boryspil",
    location: "Kyiv region, Boryspil",
    stationType: "Grid-connected station for reducing operational electricity costs",
    moduleType: "Monocrystalline Jinko Solar 550 W",
    img: "/benefits2.jpg",
  },
  {
    id: 3,
    title: "Grid Solar Power Plant 82.8 kW Fora Lisnyky",
    location: "Kyiv region, Kotsyubynske",
    stationType: "Grid-connected station for self-consumption compensation",
    moduleType: "Monocrystalline Canadian Solar 460 W",
    img: "/about.jpg",
  },
  {
    id: 4,
    title: "Grid Solar Power Plant 56.4 kW AgroTech Boryspil",
    location: "Kyiv region, Boryspil",
    stationType: "Grid-connected station for reducing operational electricity costs",
    moduleType: "Monocrystalline Jinko Solar 550 W",
    img: "/benefits1.jpg",
  },
  {
    id: 5,
    title: "Grid Solar Power Plant 82.8 kW Fora Lisnyky",
    location: "Kyiv region, Kotsyubynske",
    stationType: "Grid-connected station for self-consumption compensation",
    moduleType: "Monocrystalline Canadian Solar 460 W",
    img: "/benefits2.jpg",
  },
  {
    id: 6,
    title: "Grid Solar Power Plant 56.4 kW AgroTech Boryspil",
    location: "Kyiv region, Boryspil",
    stationType: "Grid-connected station for reducing operational electricity costs",
    moduleType: "Monocrystalline Jinko Solar 550 W",
    img: "/benefits1.jpg",
  },
];
