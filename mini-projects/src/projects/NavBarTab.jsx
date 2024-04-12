import React from "react";

const NavBarTab = () => {

    const elementStyle = "text-xl border border-black px-2 py-1 bg-green-500 text-white"

  return (
    <>
        <div className=" flex justify-start gap-5 bg-cyan-400 p-2 lg:overflow-hidden overflow-x-scroll scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-100 whitespace-nowrap">
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
            <p className={elementStyle}>testetst1</p>
        </div>
    </>
  );
};

export default NavBarTab;
