import Image from "next/image";

export default function InfoFromBusiness() {
  return (
    <div>
      <div className="relative">
        <Image
          src="/hero1.jpg"
          width={1920}
          height={1280}
          className="-z-10 absolute inset-0 h-full w-full object-cover"
          alt="about"
        />

        <div className="place-content-center space-y-8 px-6 py-32 text-muted xl:flex xl:items-center xl:space-x-20 xl:space-y-0 lg:px-14 xl:px-24 xl:py-40">
          <div className="space-y-4">
            <div className="font-bold text-3xl xl:text-5xl">Для бізнесу</div>
            <div className="text-muted">
              Отримайте і Ви інструмент управління особистої енергетичної та економічної безпеки
            </div>
          </div>

          <div className="basis-4/5 space-y-4">
            <div className="font-bold text-3xl xl:text-5xl">Рішення доступне та вигідне</div>
            <div className="text-muted">
              У 2000 році вартість сонячних панелей була близько $3-4 за Ватт, тоді як в 2024 році ця вартість вже може
              бути порядку $0.3 за Ватт або навіть нижче, залежно від технології та якості виготовлення. Цей значний
              спад вартості стимулював широке поширення сонячних технологій та значно підвищив їхню доступність.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
