import React, { Component } from 'react';

class KeyBoard extends Component {
  constructor(){
    super();
    this.layout= {
        'default': [
          '` 1 2 3 4 5 6 7 8 9 0 - = {bksp}',
          '{tab} q w e r t y u i o p [ ] \\',
          '{lock} a s d f g h j k l ; \' {enter}',
          '{shift} z x c v b n m , . / {shift}',
          '.com @ {space}'
        ],
        'shift': [
          '~ ! @ # $ % ^ & * ( ) _ + {bksp}',
          '{tab} Q W E R T Y U I O P { } |',
          '{lock} A S D F G H J K L : " {enter}',
          '{shift} Z X C V B N M < > ? {shift}',
          '.com @ {space}'
        ]
      }
      this.display= {
        '{bksp}': 'backspace',
        '{enter}': '< enter',
        '{shift}': 'shift',
        '{s}': 'shift',
        '{tab}': 'tab',
        '{lock}': 'caps',
        '{accept}': 'Submit',
        '{space}': ' ',
        '{//}': ' '
      }
      this.state= {
        'mod': 'default',
        'key': '' 
    }
  }
   
    render() { 
        
        return ();
    }
}
 
export default KeyBoard;

