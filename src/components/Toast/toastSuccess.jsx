import { Toast } from "flowbite-react";
import React from "react";

const ToastSuccess = ({ modals, messages }) => {
  const ToastSuccess = () => {
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
          <Toast>
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
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
      <ToastSuccess />
    </div>
  );
};

export default ToastSuccess;
