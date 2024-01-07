import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";
import RetirementIncome from "./components/RetirementIncome";
import RetirementStrategy from "./components/RetirementStrategy";

function App() {
  return (
    <div className="App flex flex-col md:flex-row font-signature">
      <NavBar />
      <Profile />
      <RetirementIncome />
      <RetirementStrategy />
    </div>
  );
}

export default App;
