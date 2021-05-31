import React, { useMemo, useState } from "react";
import QRCode from "qrcode.react";
import useSWR from "swr";
import PropTypes from "prop-types";
import Modal from './Modal';

const Login = (props) => {
  const [showModal, setShowModal] = useState(false);
  const { data, error } = useSWR(() => [`${process.env.NEXT_PUBLIC_API_URL}/login-lnurl/login`, useMemo(()=>({credentials: "include"}),[])])
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  return (
    <div className="flex flex-col items-center">
      Login to use the app:
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:border-blue-700 active:bg-blue-700 transition ease-in-out duration-150"
      >
        Login with LNURL-Auth
      </button>
      {showModal && (
        <Modal title="Test title" close={() => setShowModal(false)}>
          <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
            <QRCode
                  renderAs="svg"
                  style={{ width: "100%", height: "auto" }}
                  value={data.url}
                />
          </p>
        </Modal>
      )}
    </div>
  );
};

Login.propTypes = {};

export default Login;
