import React from "react";
import {connect} from "react-redux";
import { navigateTo } from "trippler";

const SubnavigationComponent = (props) => {
return <ul>
    <li onClick={props.navTo.bind(this, "/contact/git")}>Git</li>
    <li onClick={props.navTo.bind(this, "/contact/npm")}>NPM</li>
    <li onClick={props.navTo.bind(this, "/contact/twitter")}>Twitter</li>
</ul>
}
const mapToProps = (dispatch, ownProps) => ({
    navTo: (location) => {
        dispatch(navigateTo(location));
    }
});

export default connect(null, mapToProps)(SubnavigationComponent);