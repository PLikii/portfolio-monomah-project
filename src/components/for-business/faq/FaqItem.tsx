"use client";

interface IProps {
  title: string;
  description: string;
  index: number;
  setActive: (value: number) => void;
  active?: number;
}

export default function FaqItem({ title, description, index, setActive, active }: IProps) {
  const Click = () => {
    index === active ? setActive(0) : setActive(index);
  };

  return (
    <div
      className="cursor-pointer border-gray/30 border-t-2 py-2 duration-500"
      onClick={Click}
      onKeyUp={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          Click();
        }
      }}
    >
      <div className="flex items-center space-x-5 font-medium text-lg">
        <div className="w-5 font-medium text-2xl">{active === index ? "-" : "+"}</div>
        <div className="w-full">{title}</div>
      </div>
      <div className="group m-2 overflow-hidden px-5 transition-max-height duration-500">
        {index === active ? <div data-aos="zoom-in">{description}</div> : ""}
      </div>
    </div>
  );
}
