import Head from 'next/head';
import React from 'react';
import Pagination from '@/components/Pagination';
import TableContainer from '@/components/containers/TableContainer';
import ProductItem from '@/components/product/ProductItem';
import ProductHeader from '@/components/product/ProductHeader';

const ProductManegerPage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Product Manager</title>
      </Head>

      <TableContainer>
        <thead>
          <ProductHeader />
        </thead>
        <tbody>
          {Array.from({ length: 10 }, (_, index) => {
            return <ProductItem index={index} key={index} />;
          })}
        </tbody>
      </TableContainer>

      <Pagination />
    </>
  );
};

export default ProductManegerPage;
