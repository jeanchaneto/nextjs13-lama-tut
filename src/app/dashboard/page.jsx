"use client";
import useSWR from 'swr';

import React, { useEffect, useState } from "react";
import { useSession } from 'next-auth/react';

const Dashboard = () => {

//   const [data, setData] = useState([]);
//   const [error, setError] = useState(false);
//   const [isLoading, setIsloading] = useState(false);

//   useEffect(() => {
//     const getData = async () => {
//       setIsloading(true);
//       const res = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/`
//       );

//       if (!res.ok) {
//         setError(true);
//       }

//       setData(await res.json());
//       setIsloading(false);
//     };
//     getData();
//   }, []);
// console.log(data);

const session = useSession();


const fetcher = (...args) => fetch(...args).then(res => res.json())

const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts/', fetcher)
 
  if (error) return <div>failed to load</div>
  if (isLoading) return <div>loading...</div>

  return <div>Dashboard</div>;
};

export default Dashboard;
