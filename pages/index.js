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
        <div>
        <form method="POST"  action="http://umbrel.local:3003/api/v1/invoices" class="btcpay-form btcpay-form--block">
          <input type="hidden" name="storeId" value="54sgJMXR9PJ3xiY5V8jG7z1oWLRRyQe4rJEMujo75FUE" />
          <input type="hidden" name="browserRedirect" value="https://btcpay.olliecodes.com?invoicePaid=true" />
          <input type="hidden" name="checkoutQueryString" value="invoicePaid=true" ></input>
          <input type="hidden" name="price" value="0.001" ></input>
          <input type="hidden" name="currency" value="USD" ></input>
          <input type="image" class="submit" name="submit" src="http://umbrel.local:3003/img/paybutton/pay.svg" style={{width: '120px'}}alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"></input>
        </form>
        </div>
      </main>
    </div>
  )
}
