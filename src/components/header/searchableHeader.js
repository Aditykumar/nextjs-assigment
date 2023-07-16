"use client";
import React, { useEffect, useState } from "react";
import styles from "../../styles/header.module.css";
import Link from "next/link";
import basket from "../../../public/icon/basket.svg";
import bookmark from "../../../public/icon/bookmark.svg";
import searchsvg from "../../../public/icon/search.svg";
import Image from "next/image";
const SearchableHeader = ({ resData, setSearchfilterdata ,searchfilterdata}) => {
  const [applyFilter, setApplyFilter] = useState({ name: "", inputValue: "" });
  const [searchdata, setSearchData] = useState(null);
  const handleChange = (e) => {
    e.target.value;
    setApplyFilter({ ...applyFilter, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    //filtering data on submit
    e.preventDefault();
    if (applyFilter.name !== ""&&applyFilter.inputValue !== "") {
      
      await resData?.array?.categorys
        ?.filter((value) => value.name == applyFilter.name)
        .map((value) => (
          value?.menu_items
          ?.filter((value) =>
            value.name
              .toLowerCase()
              .includes(applyFilter.inputValue.toLowerCase())
          )
          .map((value) => setSearchfilterdata(value))
         
       ))}
       else {
      alert("PLEASE Fill ALL OF THESE FIELD!! ");
    }
  };


  return (
    <div className="container">
      <div className={styles.searchableHeader}>
        <Link className={styles.easyMealsLogo} href={"/"}>
          <p>Hotel</p>
          <p>NANDOS BANANI</p>
        </Link>
        <div className={styles.headerRightSec}>
          <div className={styles.SearchGroup}>
            <div className={styles.inputGroup}>
              <select
                name="name"
                className={styles.categoriesGroup}
                onChange={handleChange}
              >
                <option value={""}>------SELECT------</option>
                {resData?.array?.categorys?.map((value,index) => (
                  <option key={index} value={value.name}>{value.name}</option>
                ))}
              </select>
              <input
                type="text"
                name="inputValue"
                placeholder="Search Dish..."
                value={applyFilter.inputValue}
                onChange={handleChange}
              />
            </div>
            <button onClick={handleSubmit}>
              <Image src={searchsvg} width={20} height={20} alt="search" />
            </button>
          </div>
          <div className={styles.cartSection}>
            <Link href={"#"}>
              <Image src={bookmark} width={15} height={15} alt="bookmark" />{" "}
              <span> Favorites</span>
            </Link>
            <Link href={"#"}>
              <Image src={basket} width={15} height={15} alt="cart" />{" "}
              <span> Cart (0.00)</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchableHeader;
