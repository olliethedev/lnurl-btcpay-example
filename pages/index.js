import Head from 'next/head'
import { useMemo } from 'react';
import useSWR from "swr";
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
import styles from '../styles/Home.module.css'

export default function Home() {
  const { data, error } = useSWR(() => [`${process.env.NEXT_PUBLIC_API_URL}/account`, useMemo(()=>({credentials: "include"}),[])])
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div>
      <Head>
        <title>LNURL Example</title>
        <meta name="description" content="Example project using LNURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto">
        {data.loggedin ? <Dashboard/> : <Login/>}
      </main>
    </div>
  )
}

