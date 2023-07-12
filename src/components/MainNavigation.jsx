import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from './Pages/Error404';
import Projects from './Home/Projects';
import Updates from './Home/Updates';
import frequently_asked_questions from './Home/FAQs';
import Home from './Home/architecture';
import Getintouch from './Contact-page/Getintouch';

const MainNavigation = () => {
  
  return (
    <>
    
     <Router>
      <Switch>
        <Route  path="/Projects" exact={true} component={Projects} />
        <Route  path="/frequently_asked_questions" exact={true} component={frequently_asked_questions} />
        <Route  path="/Updates" exact={true} component={Updates} />
        <Route  path="/" exact={true} component={Home} />
        <Route  path="/Getintouch" exact={true} component={Getintouch} />
        {/** invalid routes redirection */}
        <Route component={Error404} />
      </Switch>
      </Router>
  </>
  );
}

export default MainNavigation;
