import "./App.css";
import UserProfile from "./components/UserProfile";
import CandyStore from "./components/UseReducerCandyExample"; //UseReducerExample
import FlexboxExample from "./components/Flexbox";
import GridExample from "./components/Grid";

function App() {
  return (
    <div class='main-container '>
      <UserProfile
        user={{ name: "ed", email: "ed@email.com", role: "admin" }}
      />
      <CandyStore />
      <FlexboxExample />
      <GridExample />
    </div>
  );
}

export default App;
