import './App.css';
import SignIn  from './components/SignIn'
import Profile  from './components/Profile'

import { BrowserRouter, Switch, Route} from "react-router-dom";



function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
        {/* </CreateProfile> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
