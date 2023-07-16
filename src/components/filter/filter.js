"use client";
import React, { useEffect, useState } from "react";
import styles from "@/styles/filter.module.css";
// import search from "../../../public/icon/whiteSearch.svg";
import filter from "../../../public/icon/filter.svg";
import Image from "next/image";

const Filter = ({ setFilterData, resData }) => {
  const [filterShow, setFilterShow] = useState(false);
  const [applyFilter, setApplyFilter] = useState({ name: "" });
  const handleChange = (e) => {
    e.target.value;
    setApplyFilter({ ...applyFilter, [e.target.name]: e.target.value });
  };

  // ---------------filtering data on onCahnge----------------
  useEffect(() => {
    if (applyFilter.name !== "") {
      resData?.array?.categorys
        ?.filter((value) => value.name == applyFilter.name)
        .map((value) => setFilterData(value));
    }
  }, [applyFilter, setApplyFilter]);

  return (
    <>
      <div style={{ display: "block" }}>
        <div
          className={styles.filterLogo}
          onClick={() => setFilterShow(!filterShow)}
        >
          <Image src={filter} width={15} height={15} alt="filter" />{" "}
          <span>Filter</span>
        </div>

        <div
          className={
            filterShow ? styles.filterSec + " " + styles.show : styles.filterSec
          }
        >
          <div className={styles.headingContainer}>
            <p>Filter Recipes:</p>
            <span>Check multiple box to narrow recipe search results:</span>
          </div>
          <ul className={styles.filterOptContainer}>
            <li>
              <p>ALL CATEGORIES</p>
              <div className={styles.checkboxGroup}>
                {resData?.array?.categorys?.map((value,index) => (
                  <label key={index}>
                    <input
                      name="name"
                      type="radio"
                      value={value.name}
                      onChange={(e) => handleChange(e)}
                    />
                    <span>{value.name}</span>
                  </label>
                ))}
              </div>
            </li>
          </ul>
          {/* <div className={styles.filterSearchGroup}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                name="search"
                placeholder="Search recipes..."
              />
            </div>
            <button>
              <Image src={search} width={20} height={20} alt="search" />
            </button>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Filter;
