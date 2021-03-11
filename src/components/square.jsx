import React from "react";

class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisabled: false,
            posX: this.props.posX,
            posY: this.props.posY,
        }
    }

    render() {
        // console.log(this.state.posY, this.state.posX, this.props.displayText);
        return (
            <button
                disabled={this.state.isDisabled}
                onClick={() => {
                    this.props.handleClick(this.state.posX, this.state.posY);
                    this.setState({isDisabled: true});
                }}>
                {this.props.displayText}
            </button>
        );
    }
}

export default Square;