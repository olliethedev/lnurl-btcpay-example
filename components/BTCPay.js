import React from 'react'

export const BTCPay = () => {
    return (
        <form method="POST"  action="http://umbrel.local:3003/api/v1/invoices" className="btcpay-form btcpay-form--block">
          <input type="hidden" name="storeId" value="54sgJMXR9PJ3xiY5V8jG7z1oWLRRyQe4rJEMujo75FUE" />
          <input type="hidden" name="orderId" value="abc123" />
          <input type="hidden" name="browserRedirect" value="https://btcpay.olliecodes.com?invoicePaid=true" />
          <input type="hidden" name="checkoutQueryString" value="invoicePaid=true" ></input>
          <input type="hidden" name="price" value="0.001" ></input>
          <input type="hidden" name="currency" value="USD" ></input>
          <input type="image" className="submit" name="submit" src="http://umbrel.local:3003/img/paybutton/pay.svg" style={{width: '120px'}}alt="Pay with BtcPay, Self-Hosted Bitcoin Payment Processor"></input>
        </form>
    )
}
