import React, { useMemo } from "react";
import PropTypes from "prop-types";
import QRCode from "qrcode.react";
import Modal from "./Modal";
import useSWR from "swr";
import Spinner from "./Spinner";

const DepositModal = ({account, invoices, close }) => {
  const request = [
    `${process.env.NEXT_PUBLIC_API_URL}/pay-lnurl/pay`,
    useMemo(() => ({ credentials: "include" }), []),
  ];
  const { data: payLinkData, error: payLinkError } = useSWR(() => request);

  return (
    <Modal title="LNURL Pay" close={close}>
      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
        <span>Scan with your Lightning Wallet:</span>
        <br />
        <br />
        {payLinkError && (
          <div className="text-center text-5xl">Failed to load pay code</div>
        )}
        {!payLinkData && (
          <div className="text-center text-5xl">
            <Spinner size="large" className="mr-2" /> Loading pay code...
          </div>
        )}
        {payLinkData && (
          <QRCode
            renderAs="svg"
            style={{ width: "100%", height: "auto" }}
            value={payLinkData.url}
          />
        )}
        {invoices && invoices.slice(0, 5).map(invoice => <div className ="flex justify-between">
            <div>{invoice.amountInvoiced}sats</div>
            <div>{invoice.state}</div>
        </div>)}
        {invoices.length} more invoices...
      </p>
    </Modal>
  );
};

DepositModal.propTypes = {
  close: PropTypes.func.isRequired,
};

export default DepositModal;
