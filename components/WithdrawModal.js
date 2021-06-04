import React, {useMemo} from 'react'
import PropTypes from 'prop-types'
import QRCode from "qrcode.react";
import Modal from "./Modal";
import useSWR from "swr";
import Spinner from "./Spinner";

const WithdrawModal = ({withdrawals, close}) => {
    const request = [
        `${process.env.NEXT_PUBLIC_API_URL}/withdraw-lnurl/withdraw`,
        useMemo(() => ({ credentials: "include" }), []),
    ];
    const { data: withdrawLinkData, error: withdrawLinkError } = useSWR(() => request);
    
    return (
        <Modal title="LNURL Withdraw" close={close}>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            <span>Scan with your Lightning Wallet:</span>
            <br />
            <br />
            {withdrawLinkError && (
              <div className="text-center text-5xl">Failed to load withdrawal code</div>
            )}
            {!withdrawLinkData && (
              <div className="text-center text-5xl">
                <Spinner size="large" className="mr-2" /> Loading withdrawal code...
              </div>
            )}
            {withdrawLinkData && (
                <a href={withdrawLinkData.url}>
                    <QRCode
                        renderAs="svg"
                        style={{ width: "100%", height: "auto" }}
                        value={withdrawLinkData.url}
                    />
                </a>
            )}
            History:
            {withdrawals && withdrawals.slice(0, 5).map(withdrawals => <div className ="flex justify-between">
                <div>{withdrawals.amountRequested}sats</div>
                <div>{withdrawals.state}</div>
            </div>)}
            {withdrawals?.length ?? 0} more invoices...
          </p>
        </Modal>
      )
}

WithdrawModal.propTypes = {
    close: PropTypes.func.isRequired,
}

export default WithdrawModal
