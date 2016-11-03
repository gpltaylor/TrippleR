import React from "react";
import {connect} from "react-redux";
import { navigateTo } from "trippler";

const NavigationComponent = (props) => {
return <ul>
    <li name="/" onClick={props.navTo.bind(this, "/")}>Home</li>
    <li name="/about" onClick={props.navTo.bind(this, "/about")}>About</li>
    <li name="/contact" onClick={props.navTo.bind(this, "/contact")}>Contact</li>
</ul>
}
const mapToProps = (dispatch, ownProps) => ({
    navTo: (location) => {
        dispatch(navigateTo(location));
    }
});

export default connect(null, mapToProps)(NavigationComponent);