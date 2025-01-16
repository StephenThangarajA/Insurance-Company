import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import HealthInsurance from "./HealthInsurance";
import TravelInsurance from "./TravelInsurance";
import KidsCareInsurance from "./KidsCareInsurance";
import LifeInsurance from "./LifeInsurance";
import HomeInsurance from "./HomeInsurance";
import CarInsurance from "./CarInsurance";
import Plans from "./Plans";
import PlanDetails from "./PlanDetails";
import Dashboard from "./Dashboard";

const App = () => {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/health" element={<HealthInsurance />}/>
          <Route path="/travel" element={<TravelInsurance />}/>
          <Route path="/kidscare" element={<KidsCareInsurance />}/>
          <Route path="/life" element={<LifeInsurance />}/>
          <Route path="/home" element={<HomeInsurance />}/>
          <Route path="/car" element={<CarInsurance />}/>
          <Route path="/plans" element={<Plans />}/>
          <Route path="/plandetails" element={<PlanDetails />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </Router>
    );
  };
  
  export default App;