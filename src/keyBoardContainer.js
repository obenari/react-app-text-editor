import React, { Component } from 'react';
import KeyBoard from './keyBoard';
import WhiteBoard from './whiteBoard';

class KeyBoardContainer extends Component {
    
	constructor(props) {
		super(props);
		this.state = {
			text: '',
		};
	}
 

    handleKeyPress(newText) {
		this.setState({text: newText});
	}

    render() { 
        return (
            <div>
                <WhiteBoard>{this.state.text}</WhiteBoard>
                <KeyBoard  onPress={(val) => this.handleKeyPress(val)}/>
            
            </div>
        );
    }
}
 
export default KeyBoardContainer ;