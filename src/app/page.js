'use client'
import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import Homepage from "@/components/homepage/homepage";
import { dummyData } from "@/data";
const Home = () => {
const [resData,setResData]=useState(dummyData)
  const [filterdata,setFilterData]=useState("")
  const [searchfilterdata,setSearchfilterdata]=useState("")
    return (
    <>
    {/* ------------header------------ */}
      <Header resData={resData} setResData={setResData}  setSearchfilterdata={setSearchfilterdata} searchfilterdata={searchfilterdata}  />
    {/* ------------header------------ */}


    {/* ------------home other Component------------ */}

      <div className="container">
        <Homepage resData={resData}  filterdata={filterdata} setFilterData={setFilterData}  searchfilterdata={searchfilterdata}  />
      </div>

    {/* ------------home other Component------------ */}

    </>
  );
};

export default Home;
