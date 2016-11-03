import React from "react";
import { Match } from "react-router";

export const Home = () => {
return (
    <div>
        <h1>Home</h1>
        <p>Welcome to the best React Router Redux sample website of all time.</p>
    </div>
)}

export const About = () => {
return (
    <div>
        <h1>About</h1>
        <p>After looking at many sample libraries and wondering how they work, 
        Garry Taylor did what all good JavaScript developers do, he re-invented the wheel 
        and created his own implementation.</p>
    </div>
)}

const Git = () => {
return (
    <div>
        <h2>Git</h2>
        <p>You can find all the source code for this amazing project over at Github</p>
        <a href="https://github.com/gpltaylor/TrippleR">Github/TrippleR</a>
    </div>
)}

const Npm = () => {
return (
    <div>
        <h2>NPM</h2>
        <p>You can install the NPM version of TrippleR in seconds. The best NPM in the world, ever!</p>
        <a href="https://www.npmjs.com/package/trippler">NPM/TrippleR</a>
    </div>
)}

const Twitter = () => {
return (
    <div>
        <h2>Twitter</h2>
        <p>Need to keep up-to-date with everything, have all the knowledge of the world pushed into your brain?</p>
        <p>Then you need to follow me on Twitter, I'm amazing!</p>
        <a href="https://twitter.com/gpltaylor">twitter/TrippleR</a>
    </div>
)}

export const Contact = () => {
return (
    <div>
        <h1>Contact</h1>
        <p>We have a choice of great ways to get in touch with us, click any of the amazing options in the sub menu above</p>

        <Match pattern="/contact/git" component={Git} />
        <Match pattern="/contact/npm" component={Npm} />
        <Match pattern="/contact/twitter" component={Twitter} />
    </div>
)}