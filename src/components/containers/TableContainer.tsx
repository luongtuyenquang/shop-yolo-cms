import React, { ReactNode } from 'react';

const TableContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <table className="bg-white w-full">{children}</table>;
};

export default TableContainer;
