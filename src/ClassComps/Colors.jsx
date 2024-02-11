import { Component } from "react";

export default class Color extends Component{
    constructor(props){
        super (props);
        this.state = {
            backgroundColor: 'white', // Initial background color
          };
    }

    chnColor=(color) =>{
      this.setState({backgroundColor:color})
    }
    render(){
        return(
          <>
          <p style={{ fontSize: '200%',fontWeight: 'bold'}}>Q1</p>

        <div id="divColor" style={{backgroundColor:this.state.backgroundColor, border: 'solid orange 2px'}}>
             <button onClick={() => this.chnColor('red')} style={{ backgroundColor: 'red', margin: 10 }}> Red </button>
             <button onClick={() => this.chnColor('blue')} style={{ backgroundColor: 'blue', margin: 10 }}> Blue </button>
             <button onClick={() => this.chnColor('orange')} style={{ backgroundColor: 'orange', margin: 10 }}> Orange </button>
             <button onClick={() => this.chnColor('yellow')} style={{ backgroundColor: 'yellow', margin: 10 }}> Yellow </button>
             <button onClick={() => this.chnColor('pink')} style={{ backgroundColor: 'pink', margin: 10 }}> Pink </button>
             <button onClick={() => this.chnColor('purple')} style={{ backgroundColor: 'purple', margin: 10 }}> Purple </button>
             <button onClick={() => this.chnColor('green')} style={{ backgroundColor: 'green', margin: 10 }}> Green </button>
             <button onClick={() => this.chnColor('brown')} style={{ backgroundColor: 'brown', margin: 10 }}> Brown </button>
             <button onClick={() => this.chnColor('grey')} style={{ backgroundColor: 'grey', margin: 10 }}> Grey </button>
        </div>
        </>
        );
    }

}
