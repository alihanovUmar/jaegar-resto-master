import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import { Sidebar } from "./containers/index";
// Pages
import { Home } from "./pages/index";

function App() {
  const [activePage, setActivePage] = useState("home");

  return (
    <Router>
      <div className="app">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        <main className="site-main">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </main>
      </div>
    </Router>
  );
}

export default App;
