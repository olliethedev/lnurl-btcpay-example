import React, { useEffect, useMemo, useState } from "react";
import QRCode from "qrcode.react";
import useSWR from "swr";
import PropTypes from "prop-types";
import Modal from './Modal';
import Spinner from './Spinner';

const Login = () => {
  const [showModal, setShowModal] = useState(false);
  const { data, error } = useSWR(() => [`${process.env.NEXT_PUBLIC_API_URL}/lnurl/login-lnurl/login`, useMemo(()=>({credentials: "include"}),[])])
  
  if (error) return <div className="text-center text-5xl">Failed to load login code</div>
  if (!data) return <div className="text-center text-5xl"><Spinner  size="large" className="mr-2"/> Loading login code...</div>
  return (
    <div className="flex flex-col items-center">
      <span className="text-5xl">Login to use the app:</span>
      <br/>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-400 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150"
      >
        Login with LNURL-Auth
      </button>
      {showModal && (
        <Modal title="LNURL Auth" close={() => {
            setShowModal(false);
            }}>
            <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                <span>Scan with your Lightning Wallet:</span>
                <br/><br/>
                <a href={data.url}>
                    <QRCode
                        renderAs="svg"
                        style={{ width: "100%", height: "auto" }}
                        value={data.url}
                        />
                </a>
            </p>
        </Modal>
      )}
    </div>
  );
};

Login.propTypes = {};

export default Login;
