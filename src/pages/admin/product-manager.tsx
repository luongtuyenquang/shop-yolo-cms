import Head from 'next/head';
import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/images/ao-somi-1.jpg';
import img2 from '../../../public/assets/images/ao-somi-2.jpg';

const ProductManegerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Product Manager</title>
      </Head>

      <table className="bg-slate-400 w-full">
        <thead>
          <tr>
            <th className="w-[50px]">STT</th>
            <th className="w-[100px]">Mã hàng</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th className="w-[200px]">Màu sắc</th>
            <th>Kích cỡ</th>
            <th className="w-[140px]">Thể loại</th>
            <th className="w-20">Giới tính</th>
            <th className="w-[120px]">Số lượng còn</th>
            <th className="w-[217px]">Xử lý</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => {
            return (
              <tr key={index}>
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
                  <span className="btn-category bg-slate-500">áo sơ mi</span>
                </td>
                <td>Nam</td>
                <td>100</td>
                <td>
                  <div className="flex gap-2">
                    <span className="btn-action bg-[#7188ff] hover:bg-[#576ee9]">Xem chi tiết</span>
                    <span className="btn-action bg-[#5cc3d4] hover:bg-[#41a3b3]">Sửa</span>
                    <span className="btn-action bg-[#dc6666] hover:bg-[#c55151]">Xóa</span>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductManegerPage;
