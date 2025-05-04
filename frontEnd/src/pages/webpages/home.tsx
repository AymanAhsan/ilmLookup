import '../css/home.css'
import {Container, Nav, ListGroup} from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();
    const categories = [
    {id: 1, name: 'Fiqh', path: '/fiqh',},
    {id: 2, name: 'Qiraat and Tajweed', path: '/qiraat-and-tajweed',},
    {id: 3, name: 'Fatawa', path: '/fatawa',}
];

const handleClick = (name: string) => {
    navigate(`/categories/${name}`);
}

    return (
        <div className="App">

            {/* Change navbar color when scrolling */}
          <Navbar fixed ="top" expand="lg" className="navbar w-100 bg-body-tertiary">
              <Container className="container-fluid container-fluid d-flex">
                  <Nav className="nav mx-auto d-flex">
                    <Nav.Link href="#home" className="navbar-brand">Test1</Nav.Link>
                    <Nav.Link href="#features" className="navbar-brand">Test2</Nav.Link>
                    <Nav.Link href="#pricing" className="navbar-brand">Test3</Nav.Link>
                    <Nav.Link href="#pricing" className="navbar-brand">Test4</Nav.Link>
                  </Nav>
              </Container>
          </Navbar>
            <div className="background-container">
                <img src="/public/masjid-nabawi-3341739_1920.jpg"
                     alt="background image"
                    className="background-image"
                />
                <div className="overlay"></div>
                <div className="overlay-content">
                    <h1 className="text">The Gift for the Students</h1>
                    <p className="text">All of the knowledge in one place</p>
                    <p id="subtext" className="text">A library for the english speaking students</p>
                </div>
            </div>

              <div className="content">
                  <h2>List of categories</h2>
                  <div className="categories">
                      <ListGroup variant="flush">
                            {categories.map((category) => (
                                <ListGroup.Item
                                    key={category.id}
                                    className="category-item"
                                    action
                                    onClick={() => handleClick(category.name)}>
                                     <span className="category-name">{category.name}</span>
                                </ListGroup.Item>
                            ))}
                      </ListGroup>
                  </div>
              </div>

        </div>
    );
}

export default Home
