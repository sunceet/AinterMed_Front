import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';


export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="bg-white pt-24 px-4 sm:px-6 lg:px-0 overflow-hidden">
        <section className="max-w-[894px] mx-auto text-center">
          <h1 className="font-[involve] font-semibold text-[48px] leading-[40px] text-black">
            О нашей компании
          </h1>

          <p className="mt-16 text-[24px] font-[Manrope] font-medium leading-[100%] tracking-[0.01em] text-black">
            AIntermed — образовательная платформа нового поколения для студентов медицинских вузов, врачей-ординаторов и молодых специалистов.
            <br /><br />
            Мы — дальневосточный стартап, резиденты Технопарка «Якутия» и Центра технологического предпринимательства «OREH».
          </p>
        </section>

        {/* СЕКЦИЯ С earth.svg как фоном */}
        <section className="relative mt-24 w-full h-[657px] bg-[#F5F6F6] flex items-center justify-center">
          <div className="absolute w-[647px] h-[655px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[15.3deg] pointer-events-none">
            <Image
              src="/assets/svg/earth1.svg"
              alt="Earth background"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </section>

        <section className="max-w-[894px] mx-auto text-center mt-24">
          <p className="text-[24px] font-[Manrope] font-medium leading-[100%] tracking-[0.01em] text-black">
            Платформа сочетает передовые возможности искусственного интеллекта и медицинскую экспертизу, чтобы упростить обучение и ускорить профессиональный рост.
          </p>

          <p className="mt-16 max-w-[894px] mx-auto text-[24px] font-[Manrope] font-medium leading-10 tracking-[0.01em] text-black text-left align-middle">
            Что предлагает AIntermed:
            <br /><br />
            • Персонализированное обучение — интеллектуальный анализ запросов и предпочтений для создания индивидуальных маршрутов.
            <br />
            • AI-ассистенты — специализированные модели AIntermed General и AIntermed Pro, основанные на актуальных клинических рекомендациях и базах данных.
            <br />
            • Интерактивная практика — виртуальные пациенты, клинические кейсы, тесты и медицинские калькуляторы.
            <br />
            • Экономия времени — доступ к точной, структурированной информации и разбору сложных тем в удобном формате.
            <br /><br />
            Сегодня с нами более 3000 студентов из 50+ медицинских вузов России, Беларуси, Казахстана и Кыргызстана.
            <br />
            Присоединяйтесь к сообществу молодых медиков, выбирающих инновации!
          </p>

          <section className="relative w-full h-[645px] mt-32">
            {/* Earth background */}
            <Image
              src="/assets/svg/earth2.svg"
              alt="Earth 2"
              width={1003}
              height={645}
              className="absolute top-0 left-1/2 -translate-x-1/2  pointer-events-none"
            />

            {/* Texts on top */}
            <div className="absolute top-[295px] left-[50%] -translate-x-1/2 text-[48px] font-[involve] font-semibold uppercase text-black leading-[26px] tracking-[0.01em]">
              Россия
            </div>

            <div className="absolute top-[467px] left-[43px] text-[24px] font-[involve] font-semibold uppercase text-black leading-[26px] tracking-[0.01em]">
              Беларусь
            </div>

            <div className="absolute top-[514px] left-[643px] text-[32px] font-[involve] font-semibold uppercase text-black leading-[26px] tracking-[0.01em]">
              Казахстан
            </div>

            <div className="absolute top-[575px] left-[744px] text-[24px] font-[involve] font-semibold uppercase text-black leading-[26px] tracking-[0.01em]">
              Кыргызстан
            </div>
          </section>


          <div className="flex justify-center gap-16 mt-20 flex-wrap text-black">
            <div>
              <div className="text-[48px] font-[involve] font-semibold">3000+</div>
              <div className="text-[32px] font-[involve] font-semibold">студентов</div>
            </div>
            <div>
              <div className="text-[48px] font-[involve] font-semibold">50+</div>
              <div className="text-[32px] font-[involve] font-semibold">университетов</div>
            </div>
          </div>

          <p className="mt-20 text-[24px] font-[Manrope] font-medium tracking-[0.01em] max-w-[806px] mx-auto">
            Присоединяйтесь к тысячам студентов из ведущих медицинских вузов, которые уже сделали выбор в пользу инноваций!
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
}
