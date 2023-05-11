import React, { ReactNode } from 'react';
import Header from '@/components/Header';

const AppContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />

      <div className="px-5 pt-5">{children}</div>
    </>
  );
};

export default AppContainer;
