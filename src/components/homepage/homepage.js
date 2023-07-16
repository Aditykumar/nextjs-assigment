"use client";
import React from "react";
import styles from "../../styles/home.module.css";
import Filter from "../filter/filter";
import ItemCard from "./itemCard";
const Homepage = ({
  resData,
  filterdata,
  setFilterData,
  searchfilterdata,
}) => {
  return (
    <div className={styles.hompage}>
      <div className={styles.leftSec}>
        <Filter setFilterData={setFilterData} resData={resData} />
      </div>
      <div className={styles.rightSec}>

        {searchfilterdata || filterdata ? (
          <>
          {/* ---------------filter Data------------- */}

            {searchfilterdata ? (
              <>
                <ItemCard data={searchfilterdata} />
              </>
            ) : (
              <>
                {filterdata?.menu_items?.map((value, index) => (
                  <ItemCard key={index} data={value} />
                ))}
              </>
            )}
          {/* ---------------filter Data------------- */}

          </>
          
        ) : (
          <>
          {/* ---------------all Data------------- */}
            {resData?.array?.categorys?.map((value) => (
              <>
                {value?.menu_items?.map((value, index) => (
                  <ItemCard key={index} data={value} />
                ))}
              </>
            ))}
          {/* ---------------all Data------------- */}

          </>
        )}
      </div>
    </div>
  );
};

export default Homepage;
