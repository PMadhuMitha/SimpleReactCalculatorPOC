import React,{Component} from 'react';

export default class MathOperation extends Component{
    constructor(props) {
        super(props);
        this.state={
        op:props.op,
        val1:props.val1,
        val2:""
    }
        this.sum = this.sum.bind(this);
      }

     sum(){
        //e.preventDefault();
        console.log("inside functuion");
        //var val1=parseInt(document.getElementById('box1').value);
           
        var op=this.state.val1+this.state.val2;
        console.log(op);

        this.setState({
            op
        });
       
    }

    getGetValue1 = (e) =>{
         var val1=parseInt(e.target.value);
         this.setState({val1});
    }

    getGetValue2 = (e)=>{
         var val2=parseInt(e.target.value);
         this.setState({val2});
    }


    render(){
        return(
            <div>
                <p>
            <input type="text" id="box1" placeholder="Enter the number" onChange={this.getGetValue1} value={this.state.val1}/>
            <input type="text" id="box2" placeholder="Enter the number" onChange={this.getGetValue2}/>
                </p>
                <p>
             <input type="text" id="result" placeholder="output is" value={this.state.op}/>
             </p>
             <button onClick={this.sum}> submit
            </button>
            <h1> {this.state.op}</h1>

            </div>
        );
    }
}
