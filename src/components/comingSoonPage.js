import Image from "next/image";
import React from "react";
import comingSoonPage from "../../public/icon/commingSoonPage.webp";
import Link from "next/link";
const CommingSoonPage = () => {
  return (
    <div className="commingSoon">
      <Image
        src={comingSoonPage}
        width="100%"
        height="100%"
        alt="commingSoonImage"
        className="commingSoonImage"
      />
      <h2>Feature Coming Soon</h2>
      <p>
        We are excited to announce that we will be launching soon and can&apos;t wait
        to share our new platform with you.
      </p>
      <Link href={"/"}>Go To Home Page</Link>
    </div>
  );
};

export default CommingSoonPage;
