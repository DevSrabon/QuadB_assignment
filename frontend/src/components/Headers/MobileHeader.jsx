import React, { useState, useEffect } from "react";
import companyName from "./../../images/HODLINFO.8f78fc06.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./../../css/Header.css";

export const MobileHeader = () => {
  const [btn2text, setbtn2text] = useState("BTC");
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    window.setTimeout(() => {
      if (timer == 0) setTimer(60);
      else setTimer(timer - 1);
    }, 1000);
    return () => {};
  }, [timer]);
  return (
    <div className="d-flex flex-column align-items-center bg-dark">
      <div
        className="d-flex flex-column align-items-center p-2"
        style={{
          alignContent: "flex-start",
          cursor: "pointer",
          width: "40%",
        }}
      >
        <img src={companyName} className="fiat-logo" width="90%"></img>
        <p
          className="text-secondary m-0 "
          style={{ textAlign: "left", verticalAlign: "middle" }}
        >
          <b>
            {" "}
            Powered By <span className="text-info">Finstreet</span>
          </b>
        </p>
      </div>
      <div className="d-flex align-items-center">
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            className="m-2"
            variant="secondary"
            title="INR"
          >
            <Dropdown.Item href="#/action-1">INR</Dropdown.Item>
          </DropdownButton>
        </div>
        <div>
          <DropdownButton
            id="dropdown-basic-button"
            variant="secondary"
            title={btn2text}
          >
            <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
            <Dropdown.Item
              href="#/action-2"
              onClick={() => {
                setbtn2text("ETH");
              }}
            >
              ETH
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-3"
              onClick={() => {
                setbtn2text("USDT");
              }}
            >
              USDT
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              onClick={() => {
                setbtn2text("XRP");
              }}
            >
              XRP
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-5"
              onClick={() => {
                setbtn2text("TRX");
              }}
            >
              TRX
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              onClick={() => {
                setbtn2text("DASH");
              }}
            >
              DASH
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-5"
              onClick={() => {
                setbtn2text("ZEC");
              }}
            >
              ZEC
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              onClick={() => {
                setbtn2text("XEM");
              }}
            >
              XEM
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-5"
              onClick={() => {
                setbtn2text("IOST");
              }}
            >
              IOST
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              onClick={() => {
                setbtn2text("WIN");
              }}
            >
              WIN
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-5"
              onClick={() => {
                setbtn2text("BTT");
              }}
            >
              BTT
            </Dropdown.Item>
            <Dropdown.Item
              href="#/action-4"
              onClick={() => {
                setbtn2text("WRX");
              }}
            >
              WRX
            </Dropdown.Item>
          </DropdownButton>
        </div>

        <button className="btn btn-secondary m-2">BUY {btn2text}</button>
      </div>

      <div className="d-flex justify-content-center align-items-center">
        <div style={{ width: "8vh" }}>
          <CircularProgressbar
            value={timer}
            maxValue={60}
          ></CircularProgressbar>
        </div>
        <div
          className="text-info"
          style={{
            position: "relative",
            left: "-10%",
            fontSize: "18px",
            fontWeight: "100%",
          }}
        >
          <b>{timer}</b>
        </div>

        <div
          className="d-flex align-items-center btn btn-info pointer m-4 ml-0"
          style={{ borderRadius: "10px", height: "40px" }}
        >
          <img
            src="data:image/png;base64,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"
            alt="Loading..."
            height="15px"
            className="m-2"
          />
          <div className="text-nowrap text-white">
            <b>Connect Telegram</b>
          </div>
        </div>
        {/* <button className="switch">theme</button> */}
        <label className="switch">
          <input type="checkbox" checked />
          <span className="slider round"></span>
        </label>
      </div>
    </div>
  );
};
