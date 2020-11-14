import React from 'react';
import MyButton from './MyButton.jsx';

export default class MyList extends React.Component {

    render() {

        const things = [
            { name: "puppies" },
            { name: "pizza" },
            { name: "vacation" },
            { name: "beach" },
            { name: "sushi" },
            { name: "kittens" },
            { name: "monkeys" },
            { name: "chocolate" },
            { name: "ice cream" },
            { name: "coding" }
        ];

        return (

            things.map((key) =>
                <div>
                    <MyButton name={key.name}> </MyButton>
                </div>
            )
        )

    }
}

