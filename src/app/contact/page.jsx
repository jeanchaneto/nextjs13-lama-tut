/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

export const metadata = {
  title: "Next.js 13 Tut | Contact ",
  description: "Follow along project contact page",
};

const Contact = () => {
  
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's get in touch</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image src="/contact.png" alt="" fill={true} className={styles.img} />
        </div>
        <form className={styles.form}>
          <input type="text" placeholder="name" className={styles.input} />
          <input type="text" placeholder="email" className={styles.input} />
          <textarea
            type="text"
            placeholder="message"
            cols="30"
            rows="10"
            className={styles.textarea}
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
