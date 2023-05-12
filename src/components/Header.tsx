import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PATH_ROUTES } from '@/globals/constants';
import { useRouter } from 'next/router';
import logo from '../../public/assets/images/yolo-logo.png';

const Header: React.FC = () => {
  const router = useRouter();

  const handleActiveHeader = (url: string) => {
    if (url === router.pathname) return 'header-active';
    return 'header-hover';
  };

  return (
    <header className="flex items-center justify-between bg-gray-600 h-[50px] px-5 text-white">
      <div className="flex gap-8">
        <Link href={PATH_ROUTES.home}>
          <Image src={logo} alt="Yolo Logo" width={70} priority />
        </Link>
        <div className="flex gap-5 opacity-80 text-[15px]">
          <Link href={PATH_ROUTES.product_manager} className={handleActiveHeader(PATH_ROUTES.product_manager)}>
            Product
          </Link>
          <Link href={PATH_ROUTES.account_manager} className={handleActiveHeader(PATH_ROUTES.account_manager)}>
            Account
          </Link>
        </div>
      </div>
      <div>
        <p>Logout</p>
      </div>
    </header>
  );
};

export default Header;
