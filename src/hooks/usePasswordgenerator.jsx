import { useState } from "react";
const usePasswordgenerator = () => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (checkboxdata, length) => {
    let charSet = "",
     generatedpass = "";
    const selectedOption = checkboxdata.filter((checkbox) => checkbox.state);
    if(selectedOption.length===0){
        setErrorMessage("Select atleast one option")
        setPassword("")
        return
    }
    selectedOption.forEach((e) => {
      switch (e.title) {
        case "Includes UpperCase Letters":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Includes LowerCase Letters":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;

        case "Includes Numbers":
          charSet += "1234567890";
          break;

        case "Includes Symbols":
          charSet += "~!@#$%^&*()_+=-";
          break;

        default:
          break;
      }
    });
    for(let i=0;i<length;i++){
        const random=Math.floor(Math.random()*charSet.length)
         generatedpass += charSet[random]
    }
    console.log(password)
    console.log(charSet)
    setPassword(generatedpass);
    setErrorMessage("")
  };

  return { password, errorMessage, generatePassword };
};

export default usePasswordgenerator;
