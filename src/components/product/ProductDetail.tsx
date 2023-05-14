import Image from 'next/image';
import React, { ReactNode } from 'react';
import { PATH_ROUTES } from '@/globals/constants';
import { useRouter } from 'next/router';
import TableContainer from '../containers/TableContainer';
import img1 from '../../../public/assets/images/ao-somi-1.jpg';
import img2 from '../../../public/assets/images/ao-somi-2.jpg';
import Button from '../Button';

interface Props {
  children: ReactNode;
  title: string;
}

const CustomFieldItem: React.FC<Props> = ({ children, title }) => {
  return (
    <tr>
      <th className="w-[300px] text-left align-top pl-[15px]">{title}</th>
      <td>{children}</td>
    </tr>
  );
};

const ProductDetail: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <TableContainer>
        <tbody>
          <CustomFieldItem title="Mã hàng">ABC123</CustomFieldItem>

          <CustomFieldItem title="Tên sản phẩm">Áo sơ mi Keisha</CustomFieldItem>

          <CustomFieldItem title="Hình ảnh">
            <div className="flex gap-5">
              <Image src={img1} alt="Image Logo" priority width={120} />
              <Image src={img2} alt="Image Logo" priority width={120} />
            </div>
          </CustomFieldItem>

          <CustomFieldItem title="Kích cỡ">M, XL, XXL</CustomFieldItem>

          <CustomFieldItem title="Thể loại">
            <span className="btn-category bg-slate-500">áo sơ mi</span>
          </CustomFieldItem>

          <CustomFieldItem title="Giới tính">Nam</CustomFieldItem>

          <CustomFieldItem title="Số lượng còn lại">999</CustomFieldItem>

          <CustomFieldItem title="Ngày tạo">2023-05-12 10:42:12</CustomFieldItem>

          <CustomFieldItem title="Mô tả">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ullam, non culpa asperiores laboriosam saepe
            officia, nulla temporibus recusandae itaque sed alias eaque doloremque rem provident totam quas at nam?
          </CustomFieldItem>
        </tbody>
      </TableContainer>

      <Button bgcolor="bg-slate-300" isCenter onClick={() => router.push(PATH_ROUTES.product_manager)}>
        <i className="fa-solid fa-arrow-left" />
        <span>Quay lại</span>
      </Button>
    </>
  );
};

export default ProductDetail;
