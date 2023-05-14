import React, { ReactNode } from 'react';

const TableContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <table className="bg-white w-full my-0 mx-auto">{children}</table>;
};

export default TableContainer;
