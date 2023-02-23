import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1600);
  };

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#00030e";
      document.body.style.color = "white";
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - DarkMode'
    } else {
      setMode("light");
      document.body.style.background = "white";
      document.body.style.color = "black";
      showAlert("Light mode has been enabled", "success");
      // document.title = 'TextUtils - LightMode'
    }
  };
  return (
    <>
      
      <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About textutils"
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about"
              element={<About mode={mode}/>} 
            />

            <Route exact path="/"
              element={<TextForm
                showAlert={showAlert}
                mode={mode}
                heading="Try TextUtils - Word counter, Character counter, Remove extra-spaces "
              />}
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
