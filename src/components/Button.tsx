import React, { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  width?: string;
  margin?: string;
  isCenter?: boolean;
  bgcolor?: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  children,
  width = 'w-[140px]',
  margin = 'mt-[30px]',
  isCenter,
  bgcolor,
  onClick,
}) => {
  return (
    <div
      className={`btn-main ${width} ${margin} ${bgcolor} ${isCenter && 'mx-auto my-0'} opacity-90
       hover:opacity-100 hover:cursor-pointer`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Button;
