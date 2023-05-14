import { PATH_ROUTES } from '@/globals/constants';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import img1 from '../../../public/assets/images/ao-somi-1.jpg';
import img2 from '../../../public/assets/images/ao-somi-2.jpg';

const ProductItem: React.FC<{ index: number }> = ({ index }) => {
  const router = useRouter();

  return (
    <tr>
      <td>{index + 1}</td>
      <td>ABC123</td>
      <td>Áo sơ mi Keisha</td>
      <td>
        <div className="flex flex-col items-center gap-[10px]">
          <Image src={img1} alt="image-font" priority height={120} />
          <Image src={img2} alt="image-back" priority height={120} />
        </div>
      </td>
      <td>Màu đỏ, màu trắng</td>
      <td>X, L, XL</td>
      <td className="text-center">
        <span className="btn-category ellipsis whitespace-nowrap block w-[110px] bg-slate-500">
          áo sơ miii iiii iiii
        </span>
      </td>
      <td>Nam</td>
      <td>100</td>
      <td>
        <div className="flex gap-2">
          <span
            className="btn-action bg-[#aebbff] hover:bg-[#6c83ff]"
            onClick={() =>
              router.push({ pathname: PATH_ROUTES.product_detail, query: { product_id: 'ABC123', status: 'detail' } })
            }
          >
            Xem chi tiết
          </span>
          <span className="btn-action bg-[#5cc3d4] hover:bg-[#41a3b3]">Sửa</span>
          <span className="btn-action bg-[#dc6666] hover:bg-[#c55151]">Xóa</span>
        </div>
      </td>
    </tr>
  );
};

export default ProductItem;
