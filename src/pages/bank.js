import React from "react";
import { GrHeroku } from 'react-icons/gr'
import {SiUbereats} from 'react-icons/si'
import { FaDigitalOcean } from 'react-icons/fa'

export default function Bank() {
  const [active, setActive] = React.useState(false);
  const openMobileMenu = function () {
    setActive(true);
  };
  const close = function () {
    setActive(false);
  };
  return (
    <div className="w-screen h-screen flex flex-col bg-gray-900">
      <div className="w-full h-full lg:flex flex-row">
        <aside className="hidden lg:flex flex-col w-1/5 bg-gray-900 shadow-lg">
          <SideBar />
        </aside>
        <main className="w-full h-full flex flex-col relative">
          <aside
            className={`mobile-nav w-full bg-gray-900  ${
              active ? "flex absolute top-0 left-0 right-0 bottom-0" : "hidden"
            }  flex-col h-full z-10`}
          >
            <MobileSidebar close={close} />
          </aside>
          <nav
            className={`flex flex-row m-n  md:hidden justify-between px-8 text-gray-100 py-10 w-full`}
          >
            <h1 className="font-bold tracking-wider">Overview</h1>
            <svg
              onClick={openMobileMenu}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </nav>
          <nav className="w-full md:flex flex-row justify-between h-16 p-10 items-center">
            <h1 className="font-semibold text-gray-100 text-2xl">Overview</h1>
            <div className="flex flex-row-reverse w-full h-full items-center">
              <div className="h-10 w-10 bg-green-500 rounded-lg flex mx-4 flex-col justify-center items-center">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </nav>

          <div className="w-full h-full px-10 py-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full h-48 bg-gray-900 shadow-lg rounded-lg  flex flex-col py-2 px-4 text-gray-300">
                    <h1 className="font-black tracking-wider lg:text-lg mb-2">Transactions</h1>
                    
                    <div className="w-full h-full overflow-auto flex flex-col">
                        <div className="flex flex-row justify-between items-center  mb-3">
                            <div className="flex flex-row items-center">
                                <GrHeroku className="mr-2 text-2xl text-green-500"/>
                                <div className="flex flex-col">
                                    <h2 className="tracking-wide text-xs font-semibold">Heroku</h2>
                                    <small className="font-semibold text-xs">29.09.20</small>
                                </div>
                            </div>
                            <h2 className="text-xs text-red-500 font-semibold">₵126</h2>
                        </div>
                        <div className="flex flex-row justify-between items-center  mb-3">
                            <div className="flex flex-row items-center">
                                <SiUbereats className="mr-2 text-2xl text-green-500"/>
                                <div className="flex flex-col">
                                    <h2 className="tracking-wide text-xs font-semibold">Uber eats</h2>
                                    <small className="font-semibold text-xs">27.09.20</small>
                                </div>
                            </div>
                            <h2 className="text-xs  text-red-500 font-semibold">₵300</h2>
                        </div>
                        <div className="flex flex-row justify-between items-center  mb-2">
                            <div className="flex flex-row items-center">
                                <FaDigitalOcean className="mr-2 text-2xl text-green-500"/>
                                <div className="flex flex-col">
                                    <h2 className="tracking-wide text-xs font-semibold">Digital Ocean</h2>
                                    <small className="font-semibold text-xs">27.09.20</small>
                                </div>
                            </div>
                            <h2 className="text-xs  text-red-500 font-semibold">₵65</h2>
                        </div>
                        
                    </div>
                </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function SideBar() {
  return (
    <div className="w-full h-full flex flex-col py-4">
      <ul className="w-full px-4 my-4">
        <li className="w-full my-1 cursor-pointer bg-green-600 rounded-sm items-center flex py-2 flex-row px-6 text-xs font-semibold   text-gray-100 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <h4 className="tracking-wider">Overview</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold  text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Budget</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs  font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="tracking-wider">Scheduler</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Reports</h4>
        </li>
      </ul>
      <ul className="w-full px-4 my-2">
        <small className="font-semibold tracking-wider text-gray-200">
          Accounts
        </small>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">All transactions</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Cash</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Credit card</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Business</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Loan</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Asset</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-xs font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Investment</h4>
        </li>
      </ul>
    </div>
  );
}

function MobileSidebar(props) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="w-full h-full flex flex-col py-4">
      <div className="my-4 flex h-20 flex-row-reverse w-full items-center">
        <svg
          onClick={props.close}
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div className="h-full flex flex-row-reverse w-full items-center">
          {!show ? (
            <svg
              onClick={() => setShow(true)}
              className="w-6 h-6 text-gray-100"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          ) : (
            <>
              <svg
                onClick={() => setShow(false)}
                className="w-6 h-6 text-gray-100"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <input className="h-full border outline-none bg-white rounded-sm w-full mx-2" />
            </>
          )}
        </div>
      </div>
      <ul className="w-full px-4 my-4">
        <li className="w-full my-1 cursor-pointer bg-green-600 rounded-sm items-center flex py-2 flex-row px-6 text-4xl font-semibold   text-gray-100 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            />
          </svg>
          <h4 className="tracking-wider">Overview</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold  text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Budget</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl  font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h4 className="tracking-wider">Scheduler</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Reports</h4>
        </li>
      </ul>
      <ul className="w-full px-4 my-2">
        <small className="font-semibold tracking-wider text-4xl text-gray-200">
          Accounts
        </small>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">All transactions</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Cash</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Credit card</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Business</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Loan</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Asset</h4>
        </li>
        <li className="w-full my-1 cursor-pointer   rounded-lg items-center flex py-2 flex-row px-6 text-4xl font-semibold text-gray-400 ">
          <svg
            className="w-6 h-6 mx-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>{" "}
          <h4 className="tracking-wider">Investment</h4>
        </li>
      </ul>
    </div>
  );
}
