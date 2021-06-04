import Head from "next/head";
import { useMemo, useState } from "react";
import useSWR from "swr";
import Dashboard from "../components/Dashboard";
import Login from "../components/Login";
import Spinner from "../components/Spinner";
import styles from "../styles/Home.module.css";

export default function Home() {
  const request = [
    `${process.env.NEXT_PUBLIC_API_URL}/account`,
    useMemo(() => ({ credentials: "include" }), []),
  ];
  const { data, error } = useSWR(() => request, { refreshInterval: 5000 });
  if (error)
    return <div className="text-center text-5xl">Failed to load app data</div>;
  if (!data)
    return (
      <div className="text-center text-5xl">
        <Spinner size="large" className="mr-2" /> Loading app data...
      </div>
    );
  return (
    <div>
      <Head>
        <title>LNURL Example</title>
        <meta name="description" content="Example project using LNURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {data.loggedin ? (
        <Dashboard
          account={data.account}
          invoices={data.invoices}
          withdrawals={data.claims}
        />
      ) : (
        <Login />
      )}
    </div>
  );
}
