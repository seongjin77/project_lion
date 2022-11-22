import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row } from "react-bootstrap";
import ContactForm from "./component/ContactForm";
import ContactList from "./component/ContactList";
import store from "./redux/store";

function App() {
    return (
        <div className="App">
            <h1 className="title">연락처</h1>
            <Container>
                <Row>
                    <Col>
                        <ContactForm />
                    </Col>
                    <Col className="mt-4">
                        <ContactList/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
