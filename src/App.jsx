import { useState } from "react";
import usePasswordgenerator from "./hooks/usePasswordgenerator";
import PasswordStrength from "./components/PasswordStrength";
import Header from "./components/Header";
import Passwordmiddle from "./components/Passwordmiddle";
import Passwordrange from "./components/Passwordrange";

const App = () => {
  const [length, setLength] = useState(4);

  const [options, setOptions] = useState([
    { title: "Includes UpperCase Letters", state: false },
    { title: "Includes LowerCase Letters", state: false },
    { title: "Includes Numbers", state: false },
    { title: "Includes Symbols", state: false },
  ]);
  const handleCheckboxChange = (i) => {
    const updatedOption = [...options];

    updatedOption[i].state = !updatedOption[i].state;
    setOptions(updatedOption);
  };
  const { password, errorMessage, generatePassword } = usePasswordgenerator();

  return (
    <div className="bg-gray-800 p-3 m-3 text-white font-mono">
      {password && <Header password={password} />}
      <Passwordmiddle length={length} />
      <Passwordrange length={length} setLength={setLength}/>
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
      {password && (
        <div className="p-2">
          <PasswordStrength password={password} />
        </div>
      )}
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
