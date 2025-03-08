import React from "react";

const Navbar = ()=> {
  return (
    <div className="h-17 bg-red-500 w-screen ">
      <div className="logo">
        {/*<img src=""alt=""/>*/}
        <h4>Shooping Mart</h4>
      </div>
      <div className="categories">
        <h4>SHOP</h4>
        <h4>MEN</h4>
        <h4>WOMEN</h4>
        <h4>KIDS</h4>
      </div>
      <div className="right-opt">
        <button className="p-2 border-1 border-black rounded-md">LOGIN</button>
      </div>
    </div>
  );
};

export default Navbar;
