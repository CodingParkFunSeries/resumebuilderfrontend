import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
  } from 'reactstrap';

class NavigationBar extends React.Component {

    

	render() {


		return (
			<div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Resume builder</NavbarBrand>
                </Navbar>
            </div>
		);
	}

}

export default NavigationBar;