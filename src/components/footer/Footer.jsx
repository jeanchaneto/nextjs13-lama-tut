import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>2023 WebDeveLap</div>
      <div className={styles.social}>
          <Image src="/1.png" width={16} height={16} className={styles.icon} alt="Social" />
          <Image src="/2.png" width={16} height={16} className={styles.icon} alt="Social" />
          <Image src="/3.png" width={16} height={16} className={styles.icon} alt="Social" />
          <Image src="/4.png" width={16} height={16} className={styles.icon} alt="Social" />
      </div>
    </div>
  );
};

export default Footer;
