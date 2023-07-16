"use client"
import React from "react";
import styles from "../../styles/header.module.css";
import cast from "../../../public/icon/cast.svg";
import facebook from "../../../public/icon/facebook.svg";
import instagram from "../../../public/icon/instagram.svg";
import pintrest from "../../../public/icon/pintrest.svg";
import twitter from "../../../public/icon/twitter.svg";
import youtube from "../../../public/icon/youtube.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const HeaderMenu = () => {
  const pathname = usePathname();
  return (
    <div className={styles.headerMenu}>
      <div className="container">
        <div className={styles.headerInnerSection}>
          <ul>
            <li>
              <Link className={pathname == "/" ? styles.active : ""} href={"/"}>
                HOME
              </Link>
            </li>
            <li>
              <Link
                className={pathname == "/categories" ? styles.active : ""}
                href={"/categories"}
              >
                CATEGORIES
              </Link>
            </li>
            <li>
              <Link
                className={pathname == "/recipes" ? styles.active : ""}
                href={"/recipes"}
              >
                RECIPES
              </Link>
            </li>
            <li>
              <Link
                className={pathname == "/contact" ? styles.active : ""}
                href={"/contact"}
              >
                CONTACT
              </Link>
            </li>
            <li>
              <Link
                className={pathname == "/about" ? styles.active : ""}
                href={"/about"}
              >
                ABOUT
              </Link>
            </li>
          </ul>
          <ul>
            <li className={styles.SocialMediaIcon}>
              <Link href={"#"}>
                <Image src={instagram} height={15} width={15} alt="instagram" />
              </Link>
              <Link href={"#"}>
                <Image src={twitter} height={15} width={15} alt="twitter"  />
              </Link>
              <Link href={"#"}>
                <Image src={facebook} height={15} width={15} alt="facebook"  />
              </Link>
              <Link href={"#"}>
                <Image src={pintrest} height={15} width={15} alt="pintrest"  />
              </Link>
              <Link href={"#"}>
                <Image src={cast} height={15} width={15} alt="cast"  />
              </Link>
              <Link href={"#"}>
                <Image src={youtube} height={15} width={15} alt="youtube"  />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenu;
