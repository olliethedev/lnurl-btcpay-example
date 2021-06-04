import React, { useMemo, useState } from "react";
import PropTypes from "prop-types";
import { useCookies } from "react-cookie";
import NavBar from "./NavBar";
import useSWR from "swr";
import DepositModal from "./DepositModal";
import WithdrawModal from "./WithdrawModal";
import Spinner from "./Spinner";

const Dashboard = ({ account, invoices, withdrawals }) => {
  const request = [
    `${process.env.NEXT_PUBLIC_API_URL}/account/logout`,
    useMemo(() => ({ credentials: "include" }), []),
  ];
  console.log(request);
  const [shouldLogout, setShouldLogout] = useState(false);
  const [showDepositModal, setShowDepositModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const { data: logoutData, error: logoutError } = useSWR(() =>
    shouldLogout ? request : null
  );
  const [cookies, setCookie, removeCookie] = useCookies(["connect.sid"]);
  if (shouldLogout && !logoutData) {
    removeCookie(); //todo: debug if needed as server side is source of session
    return (
      <div className="text-center text-5xl">
        <Spinner size="large" className="mr-2" /> Logging out...
      </div>
    );
  }

  return (
    <div>
      <NavBar
        title="LNURL Demo"
        items={[
          {
            name: "Deposit",
            onClick: () => {
              setShowDepositModal(true);
            },
          },
          {
            name: "Withdraw",
            onClick: () => {
              setShowWithdrawModal(true);
            },
          },
          {
            name: "Logout",
            onClick: () => {
              setShouldLogout(true);
            },
          },
        ]}
      />
      <main className="container mx-auto">
        {logoutError && <span>Error logging out</span>}
        <div className="text-center text-5xl">Dashboard</div>
        <div className="text-center text-3xl">
          Account Balance: {account.balance} sats
        </div>
        {showDepositModal && (
          <DepositModal
            invoices={invoices}
            close={() => {
              setShowDepositModal(false);
            }}
          />
        )}
        {showWithdrawModal && (
          <WithdrawModal
            withdrawals={withdrawals}
            close={() => {
              setShowWithdrawModal(false);
            }}
          />
        )}
      </main>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
