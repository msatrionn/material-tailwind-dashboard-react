import { Toast } from "flowbite-react";
import React from "react";

const ToastDanger = ({ modals, messages }) => {
  const ToastComponent = () => {
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
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
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
      <ToastComponent />
    </div>
  );
};

export default ToastDanger;
