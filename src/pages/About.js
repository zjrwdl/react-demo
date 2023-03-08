import React from 'react';

function About() {
    const numbers = [
        "1、how to use Router",
        "2、how to use net component",
        "3、how to display image/video",
        "4、how to display list view",
        "5、how to persist data in local storage",
        "6、how to use provider/redux",
        "7、how to modularize",
        "8、how to connect wallet by ether.js or web3.js",
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