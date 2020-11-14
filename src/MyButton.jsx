import React from 'react';
import { Button } from "@material-ui/core";

export default class MyButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            liked: false,
            color: "primary"
        };
        console.log(this.props);
    }

    // if a button is clicked, set it's "liked" state to true 
    handleClick(e) {
        e.preventDefault();

        if (this.state.color === 'primary' && this.state.liked === false) {
            this.setState({ liked: true, color: 'secondary' });
            console.log(this.state.liked); //why does this print out the old state 
            console.log(this.state.color);
        } else {
            this.setState({ liked: false, color: 'primary' });
            console.log(this.state.liked);
            console.log(this.state.color);
        }
    }

    render() {


        return (

            <Button color={this.state.color} size="large" onClick={this.handleClick}>
                {this.props.name}
            </Button>


        )
    }
}

