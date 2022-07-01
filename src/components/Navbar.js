import React from 'react'
import "./navcss.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Nav, Navbar, Container, Form, FormControl, Button } from 'react-bootstrap'
import { useState } from 'react'
import Login from './auth/Login'


export default function Navigation() {
    const [click, setClick] = useState(false);
    const changeStateToFalse = () => {
        setClick(false);
    }
    return (
        <div>
            {
                click ? (<Login changeStateToFalse={changeStateToFalse} />) : ("")
            }
            <Navbar >
                <Container fluid>
                    <Navbar.Brand href="#">ATG.WORLD</Navbar.Brand>


                    <Navbar.Collapse id="navbarScroll">

                        <Form className="d-flex" >
                            <Button variant="outline-success"><FontAwesomeIcon icon={faSearch} /></Button>
                            <FormControl
                                type="search"
                                placeholder="Search for your favorite groups in ATG"
                                className="me-2"
                                aria-label="Search"
                            />

                        </Form>
                        <Nav
                            className="me-auto my-2 my-lg-0"

                            navbarScroll
                        >
                            <Nav.Link onClick={()=>setClick(true)}>Create account. <span>It’s free!</span></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
            </Navbar>
        </div >
    )
}
