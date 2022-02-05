import React, {useState} from "react";
import "../Modedark/Theme.css";

function Context() {
  const [darkMode, setDarkMode] = useState(false);
  const setTheme = () => setDarkMode(darkMode ? false : true);
  return (
    <div>      
      <button  className="Mode" data-theme={darkMode ? "dark" : "light"} onClick={setTheme}>
   Mode
     </button>
    </div>
    
  );
}




export default Context