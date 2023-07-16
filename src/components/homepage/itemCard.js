import React from "react";
import styles from "@/styles/home.module.css";
import Image from "next/image";
import dummy from "../../../public/icon/commingSoonPage.webp";
import energy from "../../../public/icon/energy.svg";
import time from "../../../public/icon/time.svg";
import like from "../../../public/icon/like.svg";
const ItemCard = ({ data }) => {
  return (
    <>
      {data?.menu_items?<>
      {data?.menu_items?.map((value, index)=>(
        <div key={index} className={styles.itemCard}>
          <div className={styles.imgContainer}>
            {data.position <= 10 && (
              <div className={styles.popularSec}>
                <Image src={energy} width={12} height={12} alt="POPULAR" />
                <span>POPULAR</span>
              </div>
            )}
            <Image src={dummy} width={200} height={250} alt="item" />
          </div>
          <ul className={styles.statusInfo}>
            <li>
              <Image src={time} width={15} height={15} alt="time" />
              <span>30 MINUTES</span>
            </li>
            <li>
              <Image src={like} width={15} height={15} alt="like" />
              <span>SUPER EASY</span>
            </li>
          </ul>
          <div className={styles.headingSec}>{data?.name}</div>
        </div>
      ))}
       </>
      : (
        <div className={styles.itemCard}>
          <div className={styles.imgContainer}>
            {data.position <= 10 && (
              <div className={styles.popularSec}>
                <Image src={energy} width={12} height={12} alt="POPULAR" />
                <span>POPULAR</span>
              </div>
            )}
            <Image src={dummy} width={200} height={250} alt="item" />
          </div>
          <ul className={styles.statusInfo}>
            <li>
              <Image src={time} width={15} height={15} alt="time" />
              <span>30 MINUTES</span>
            </li>
            <li>
              <Image src={like} width={15} height={15} alt="like" />
              <span>SUPER EASY</span>
            </li>
          </ul>
          <div className={styles.headingSec}>{data?.name}</div>
        </div>
      )}
    </>
  );
};

export default ItemCard;
