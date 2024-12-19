import React from 'react';

const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-1/6 bg-[#086788] w-full p-4 sm:flex-col sm:h-auto sm:justify-center sm:space-y-3 sm:px-4">
      <h1 className="text-3xl font-semibold text-white sm:text-sm sm:text-center sm:w-full sm:px-4">
        {"<"} REV {"/ >"}
      </h1>
      <a href="/">
        <img
          src="/download.png"
          alt="logo"
          className="h-14 cursor-pointer sm:h-10"
        />
      </a>
    </div>
  );
};

export default NavBar;
