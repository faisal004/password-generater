import { useState } from "react";
import usePasswordgenerator from "./hooks/usePasswordgenerator";
import PasswordStrength from "./components/PasswordStrength";

const App = () => {
  const [length, setLength] = useState(4);
  const [copied, setCopied] =useState(false);
  const [options, setOptions] = useState([
    { title: "Includes UpperCase Letters", state: false },
    { title: "Includes Lowercase Letters", state: false },
    { title: "Includes Numbers", state: false },
    { title: "Includes Symbols", state: false },
  ]);
  const handleCheckboxChange = (i) => {
    const updatedOption = [...options];

    updatedOption[i].state = !updatedOption[i].state;
    setOptions(updatedOption);
  };
  const { password, errorMessage, generatePassword } = usePasswordgenerator();
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true)
    setTimeout(()=>{
setCopied(false)
    },500)
  };
  return (
    <div className="bg-gray-800 p-3 m-3 text-white font-mono">
      {password &&  <div className="header flex flex-row justify-between ">
        <div className="password text-2xl font-medium ">{password}</div>
        <button
          className="bg-gray-500 px-2 py-1 rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 "
          onClick={handleCopy}
        >
          {!copied ? "Copy":"Copied"}
        </button>
      </div>}
     
      <div className="middle flex flex-row justify-between">
        <div className="charlength text-2xl font-medium py-2">
          Character Length
        </div>
        <div className="length p-2 text-2xl">{length}</div>
      </div>
      <div>
        <input
          className="w-full"
          type="range"
          min={4}
          max={20}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 e item ">
        {options.map((e, i) => (
          <div key={i} className="flex flex-row space-x-2 p-2 ">
            <input
              type="checkbox"
              checked={e.state}
              onChange={() => handleCheckboxChange(i)}
            />
            <div>{e.title}</div>
          </div>
        ))}
      </div>
      {errorMessage && <div className="p-2 text-red-500">{errorMessage}</div>}
      {password && <div className="p-2"><PasswordStrength password={password}/></div> }
      <div className="generate">
        <button
          className="w-full bg-blue-800 rounded-lg p-2 text-xl font-normal transition ease-in-out delay-150 hover:-translate-y-0.5 hover:scale-5 hover:bg-blue-700 duration-300 "
          onClick={() => generatePassword(options, length)}
        >
          GENERATE
        </button>
      </div>
    </div>
  );
};

export default App;
