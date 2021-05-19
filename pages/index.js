import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>BTCPAY Server + LNURL Example</title>
        <meta name="description" content="Example project using BTCPAY and LNURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello world!
        </h1>
      </main>
    </div>
  )
}
