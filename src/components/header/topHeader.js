"use client"
import React, { useState } from 'react'
import styles from "../../styles/header.module.css";
import Link from "next/link";
import loginIcon from "../../../public/icon/login-icon.svg";
import register from "../../../public/icon/register.svg";
import userAvtar from "../../../public/icon/userAvtar.svg";
import Image from 'next/image';
const TopHeader = () => {
    const [logIn,setLogIn]=useState(false)
  return (
    <div className={styles.topHeader}>
        <div className={styles.headerInnerSection + " " + "container"}>
          <ul>
            <li>
              <Link href={"/forum"}>Forum</Link>
            </li>
            <li>
              <Link href={"/categories"}>Categories</Link>
            </li>
            <li>
              <Link href={"/books"}>Books</Link>
            </li>
            <li>
              <Link href={"/recipe-index"}>Recipe Index</Link>
            </li>
            <li>
              <Link href={"/popular"}>Popular</Link>
            </li>
          </ul>
          <ul className={logIn?styles.logInSec + " " +styles.show:styles.logInSec}>
            <li>
              <Link href={"#"}>
                <Image src={register} height={15} width={15} alt="register" /> REGISTER
              </Link>
            </li>
            <li>
              <Link href={"#"}>
                <Image src={loginIcon} height={15} width={15} alt="login" /> LOGIN
              </Link>
            </li>
          </ul>
          <div onClick={()=>setLogIn(!logIn)} className={styles.moblileLoginIcoc}><Image src={userAvtar} width={30}height={30} alt="avtar" /></div>
        </div>
      </div>
  )
}

export default TopHeader