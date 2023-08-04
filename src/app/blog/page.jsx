import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Next.js 13 Tut | Blog ",
  description: "Follow along project blog page",
};

async function getData() {
  const NEXT_URL =
    process.env.NEXT_PUBLIC_FRONTEND_URL || "http://localhost:3000";
  const res = await fetch(`${NEXT_URL}/api/posts`, { cache: "no-store" });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={styles.mainContainer}>
      {data.map((item) => (
        <Link
          href={`/blog/${item._id}`}
          className={styles.container}
          key={item.id}
        >
          <div className={styles.imageContainer}>
            <Image
              src={item.img}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
