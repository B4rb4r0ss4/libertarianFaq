import Faq from "./components/Faq";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Faq} />
    </Router>
  );
}

export default App;
