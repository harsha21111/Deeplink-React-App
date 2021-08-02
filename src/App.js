import Header from "./Components/templates/Header";
import SideNavigation from "./Components/templates/SideNavigation";
import { Col, Row } from "reactstrap";
import Dashboard from "./Components/Pages/Dashboard";

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
        <SideNavigation></SideNavigation>
        <div>
        <Dashboard />
        </div>
          
        
      </div>
    </>
  );
}

export default App;