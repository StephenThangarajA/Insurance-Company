import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import HealthInsurance from "./HealthInsurance";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/health" element={<HealthInsurance />}/>
        </Routes>
      </Router>
    );
  };
  
  export default App;