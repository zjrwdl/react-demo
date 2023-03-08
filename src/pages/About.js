import React from 'react';

function About() {
    const numbers = [
        "1、how to use Router",
        "2、how to use net net component",
        "3、how to display image/video",
        "3、how to display list view",
        "4、how to connect wallet by ether.js or web3.js",
    ];
    const listItems = numbers.map((number) =>
        <li>{number}</li>
    );
    return (
        <div>
            <h3>This is a react learning case :</h3>
            <ul>{listItems}</ul>
        </div>
    );
}

export default About;