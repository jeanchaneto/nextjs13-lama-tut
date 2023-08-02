"use client";

import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setIsloading(true);
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`
      );

      if (!res.ok) {
        setError(true);
      }

      setData(await res.json());
      setIsloading(false);
    };
    getData();
  }, []);
console.log(data);

  return <div>Dashboard</div>;
};

export default Dashboard;
