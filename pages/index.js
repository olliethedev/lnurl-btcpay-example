import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'
import appMiddleware from '../middleware/appMiddleware';

export default function Home({ views }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BTCPAY Server + LNURL Example</title>
        <meta name="description" content="Example project using BTCPAY and LNURL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        <h1 className={styles.title}>
          Hello world!
        </h1>
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
  // let options = getConfig();
  // await applySession(req, res, options);
  // try {
    await appMiddleware.run(req, res);
  // } catch (e) {
  //   // handle the error
  // }
  // console.log("got session");
  // req.session.views = req.session.views ? req.session.views + 1 : 1;
  // console.log("closing db connection");
  req.dbClient.close();
  // console.log("closed db connection");
  return {
    props: {
      views: req?.session?.views ?? 0
    }
  }
}
