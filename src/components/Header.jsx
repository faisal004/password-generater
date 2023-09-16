import { useState } from "react";

const Header = ({ password }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 500);
  };
  return (
    <>
      <div className="header flex flex-row justify-between ">
        <div className="password text-2xl font-medium ">{password}</div>
        <button
          className="bg-gray-500 px-2 py-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 "
          onClick={handleCopy}
        >
          {!copied ? "Copy" : "Copied"}
        </button>
      </div>
    </>
  );
};

export default Header;
