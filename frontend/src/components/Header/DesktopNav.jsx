'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function DesktopNav() {
  const pathname = usePathname();

  const getLinkClass = (path) =>
    `transition ${
      pathname === path ? 'text-[#438EFF]' : 'text-black'
    }`;

  return (
    <nav className="font-[Manrope] font-bold hidden xl:flex gap-6 xl:gap-8 text-[14px]">
      <Link href="/#" className={getLinkClass('/')}>
        ГЛАВНОЕ
      </Link>
      <Link href="/#" className={getLinkClass('/chat')}>
        ИИ&nbsp;ЧАТ
      </Link>
      <Link href="/#" className={getLinkClass('/knowledge')}>
        БАЗА&nbsp;ЗНАНИЙ
      </Link>
      <Link href="/about" className={getLinkClass('/about')}>
        О&nbsp;НАС
      </Link>
      <Link href="/#" className={getLinkClass('/pricing')}>
        ТАРИФЫ
      </Link>
    </nav>
  );
}


