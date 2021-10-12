import React from "react";
import {Link} from "react-router-dom";
import {Navbar,Nav,NavItem,NavbarBrand,Container } from "reactstrap";


export const ProductHeading = ({partnerName})=>{
    return (<div>
        <h1>{`Product for ${partnerName}`}</h1>
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand>Products List</NavbarBrand>
                <Nav>
                    <NavItem>
                        <Link className="btn btn-primary" to={`/add-product/${partnerName}`}>Add Product</Link>
                        <Link className="btn btn-secondary m-2" to={`/`}>Back</Link>
                    </NavItem>
                </Nav>
            </Container>
        </Navbar>
    </div>)
}