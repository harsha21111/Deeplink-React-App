import Header from "./Components/templates/Header";
import SideNavigation from "./Components/templates/SideNavigation";
import { Col, Row } from "reactstrap";
//import Dashboard from "./Components/Pages/Dashboard";
//import Campaigns from "./Components/Pages/Campaigns";
//import Deeplinks from "./Components/Pages/Deeplink";
//import Events from "./Components/Pages/Events";
import RoutingPath from "./Routing/RoutingPath";
import { BrowserRouter } from "react-router-dom";

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
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <div style={styles.contentDiv}>
        <BrowserRouter>        
        <SideNavigation>
        </SideNavigation>
        <RoutingPath></RoutingPath>
        </BrowserRouter>
        {/* <div>
        <Dashboard />
        </div> */}
         {/* <div>
         <Campaigns />
           </div>  */}
           {/* <div>
             <Deeplinks />
           </div> */}
           {/* <div>
             <Events />
           </div> */}
        
      </div>
    </>
  );
}

export default App;