import "./styles/App.css";
import { UserProfile } from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <h6 className="AppHeader__Title">MyPortfolio</h6>
      </header>
      <main className="AppMain">
        <UserProfile />
      </main>
      <footer className="AppFooter">Copyright MyPortfolio</footer>
    </div>
  );
}

export default App;
