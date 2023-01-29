import { Toast } from "flowbite-react";
import React from "react";

const ToastWarning = ({ modals, messages }) => {
  const ToastWarning = () => {
    return (
      <>
        <div
          style={{
            display: `${modals ? "flex" : "none"}`,
            position: "absolute",
            top: 10,
            width: "100%",
            justifyContent: "center",
            zIndex: 99999,
          }}
        >
          <Toast
            style={{
              display: `${modals ? "flex" : "none"}`,
              position: "absolute",
              top: 10,
              width: "100%",
              justifyContent: "center",
              zIndex: 99999,
            }}
          >
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-500 dark:bg-orange-700 dark:text-orange-200">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Error icon</span>
            </div>
            <div className="ml-3 text-sm font-normal">{messages}</div>
            <Toast.Toggle />
          </Toast>
        </div>
      </>
    );
  };
  return (
    <div>
      <ToastWarning />
    </div>
  );
};

export default ToastWarning;
