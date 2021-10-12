import React from "react";
import {Link} from "react-router-dom";
import {Navbar,Nav,NavItem,NavbarBrand,Container } from "reactstrap";

export const Heading = ()=>{
    return (<div>
        <h1>Welcome to Partner Product Manager App</h1>
        <h6>Your navigating the app as an Admin for now, this mean you can manage Partners and their Products on their behalf, this will change once authentication is added</h6>
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="./">Partners List</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to="/add-partner">Add Partner</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    </div>)
}