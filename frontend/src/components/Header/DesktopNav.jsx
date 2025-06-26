'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DesktopNav() {
  const pathname = usePathname();
  const router = useRouter();
  const [isTariffActive, setIsTariffActive] = useState(false);

  // Прокрутка наверх (если на главной — плавный скролл, иначе переход)
  const scrollToTop = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      router.push('/');
    }
  };

  // Прокрутка к секции тарифов (если не на главной — переход с якорем)
  const scrollToTariffs = () => {
    if (pathname !== '/') {
      router.push('/#tariffs');
    } else {
      const el = document.getElementById('tariffs');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // При скролле на главной проверяем — активна ли секция "ТАРИФЫ"
  useEffect(() => {
    if (pathname !== '/') return;

    const handleScroll = () => {
      const section = document.getElementById('tariffs');
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight / 2 &&
        rect.bottom >= window.innerHeight / 2;

      setIsTariffActive(isVisible);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Сразу проверяем

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Класс ссылки: активная — голубая, иначе — чёрная
  const getLinkClass = (active) =>
    `transition ${active ? 'text-[#438EFF]' : 'text-black'}`;

  return (
    // Контейнер навигации (скрыт на мобилках, виден на xl)
    <nav className="font-[Manrope] font-bold hidden xl:flex gap-6 xl:gap-8 text-[14px]">
      
      {/* Кнопка "ГЛАВНОЕ": активна если на главной и не в тарифах */}
      <button
        onClick={scrollToTop}
        className={`${getLinkClass(pathname === '/' && !isTariffActive)} bg-transparent border-none outline-none cursor-pointer`}
      >
        ГЛАВНОЕ
      </button>

      {/* Якорная ссылка "ИИ ЧАТ" — всегда неактивная */}
      <a href="#chat" className={getLinkClass(false)}>
        ИИ&nbsp;ЧАТ
      </a>

      {/* Якорная ссылка "БАЗА ЗНАНИЙ" — всегда неактивная */}
      <a href="#knowledge" className={getLinkClass(false)}>
        БАЗА&nbsp;ЗНАНИЙ
      </a>

      {/* Ссылка "О НАС" — активна, если мы на /about */}
      <Link href="/about" className={getLinkClass(pathname === '/about')}>
        О&nbsp;НАС
      </Link>

      {/* Кнопка "ТАРИФЫ": активна, если в зоне видимости секция tariffs */}
      <button
        onClick={scrollToTariffs}
        className={`${getLinkClass(pathname === '/' && isTariffActive)} bg-transparent border-none outline-none cursor-pointer`}
      >
        ТАРИФЫ
      </button>
    </nav>
  );
}
