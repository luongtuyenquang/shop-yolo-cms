import React from 'react';

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-end gap-7 mt-5">
      <div>1-10 of 23</div>
      <div className="flex gap-6">
        <i className="fa-solid fa-chevron-left p-[3px] text-[#aaaaaa] hover:cursor-not-allowed" />
        <i className="fa-solid fa-chevron-right hover:cursor-pointer p-[3px]" />
      </div>
    </div>
  );
};

export default Pagination;
