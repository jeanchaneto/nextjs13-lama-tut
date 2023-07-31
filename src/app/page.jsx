import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>The react Framework practice</h1>
        <p className={styles.description}>
          Developping skills by learning Next.js 13. A super exiting project
          covering the main features.
        </p>
        <Button url={"mailto:jean@webdevelap.com"} text={'Learn more'}/>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="" className={styles.img} />
      </div>
    </div>
  );
}
