import React from "react";
import HeaderMenu from "./headerMenu";
import TopHeader from "./topHeader";
import SearchableHeader from "./searchableHeader";
const Header = ({resData, setSearchfilterdata,searchfilterdata}) => {
  return (
    <header>
      {/* ----------------top Header Section (end)-------------   */}
      <TopHeader />
      {/* ----------------top Header Section (end)-------------   */}



      {/* ----------------search Header Section (start)-------------   */}
      <SearchableHeader resData={resData} setSearchfilterdata={setSearchfilterdata} searchfilterdata={searchfilterdata} />
      {/* ----------------search Header Section (end)-------------   */}



      {/* ----------------Header Menu Section (start)-------------   */}
      <HeaderMenu />
      {/* ----------------Header Menu Section (end)-------------   */}
    </header>
  );
};

export default Header;
