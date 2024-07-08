import "./App.css";
import UserProfile from "./components/UserProfile";
import CandyStore from "./components/UseReducerCandyExample"; //UseReducerExample

function App() {
  return (
    <div class='main-container '>
      <UserProfile
        user={{ name: "ed", email: "ed@email.com", role: "admin" }}
      />
      <CandyStore />
    </div>
  );
}

export default App;
