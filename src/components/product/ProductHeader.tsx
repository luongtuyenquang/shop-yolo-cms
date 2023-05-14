import React from 'react';

const TABLE_HEADER = [
  { title: 'STT', className: 'w-[50px]' },
  { title: 'Mã hàng', className: 'w-[100px]' },
  { title: 'Tên sản phẩm' },
  { title: 'Hình ảnh' },
  { title: 'Màu sắc', className: 'w-[120px]' },
  { title: 'Kích cỡ', className: 'w-[100px]' },
  { title: 'Thể loại', className: 'w-[140px]' },
  { title: 'Giới tính', className: 'w-20' },
  { title: 'Số lượng còn', className: 'w-[120px]' },
  { title: 'Xử lý', className: 'w-[217px]' },
];

const ProductHeader: React.FC = () => {
  return (
    <tr>
      {TABLE_HEADER.map((item) => (
        <th className={item.className} key={item.title}>
          {item.title}
        </th>
      ))}
    </tr>
  );
};

export default ProductHeader;
