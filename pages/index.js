import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

export default function Home({ views }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BTCPAY Server + LNURL Example</title>
        <meta name="description" content="Example project using BTCPAY and LNURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <h1 className={styles.title}>
          Hello world!
        </h1>
        <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
          <div className="flex-shrink-0">
            <img className="h-12 w-12" src="/img/logo.svg" alt="ChitChat Logo"/>
          </div>
          <div>
            <div className="text-xl font-medium text-black">ChitChat</div>
            <p className="text-gray-500">You have a new message!</p>
          </div>
        </div>
        <div>
        <p>Session views: {views}</p>
        <form method="POST"  action="http://umbrel.local:3003/api/v1/invoices" className="btcpay-form btcpay-form--block">
          <input type="hidden" name="storeId" value="54sgJMXR9PJ3xiY5V8jG7z1oWLRRyQe4rJEMujo75FUE" />
          <input type="hidden" name="orderId" value="abc123" />
          <input type="hidden" name="browserRedirect" value="https://btcpay.olliecodes.com?invoicePaid=true" />
          <input type="hidden" name="checkoutQueryString" value="invoicePaid=true" ></input>
          <input type="hidden" name="price" value="0.001" ></input>
          <input type="hidden" name="currency" value="USD" ></input>
          <input type="image" className="submit" name="submit" src="http://umbrel.local:3003/img/paybutton/pay.svg" style={{width: '120px'}}alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"></input>
        </form>
        </div>
      </main>
    </div>
  )
}

export async function getServerSideProps({ req, res }) {
  console.log("getServerSideProps");
  return {
    props: {
      views: 0
    }
  }
}
