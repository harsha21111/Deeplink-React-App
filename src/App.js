import Header from "./Components/templates/Header";
import SideNavigation from "./Components/templates/SideNavigation";
import Dashboard from "./Components/Pages/Dashboard";
import Campaigns from "./Components/Pages/Campaigns";
import Deeplinks from "./Components/Pages/Deeplink";
import Events from "./Components/Pages/Events";
//import RoutingPath from "./Routing/RoutingPath";
import { BrowserRouter, Route } from "react-router-dom";
//import Footer from "./Components/templates/Footer";

function App() {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
    },
  };
  return (
    <>
      <div>
      <Header></Header>
      </div>
      <div style={styles.contentDiv}>
        <BrowserRouter>        
        <SideNavigation>
        </SideNavigation>
        <div className="content">
             <Route exact path="/" component={Dashboard} />
             <Route exact path="/campaigns" component={Campaigns} />
             <Route exact path="/deeplinks" component={Deeplinks} />
             <Route exact path="/events" component={Events} />
           </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
