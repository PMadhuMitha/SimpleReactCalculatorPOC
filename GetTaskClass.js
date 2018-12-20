import React from 'react';
import AddTaskClass from './AddTaskClass';

export default class GetTaskClass extends React.Component{

    constructor(){
        super();
            this.state=
            {
                taskName:"",
                isshow:true,
                arrayValue:[]
        };
        
    }


    getTaskValue=(e)=>{
        var taskName=e.target.value;
        this.setState({taskName});
    }
    addTask=()=>{

        let {arrayValue}=this.state; //destructuring the state obj. (i.e): value of arrayValue form state is obtained in let{arrayValue}
        arrayValue = [...arrayValue];
        arrayValue.push(this.state.taskName);
         this.setState({arrayValue});
         

    }

    componentWillMount() {
        console.log('Component WILL MOUNT!')
     }
     componentDidMount() {
        console.log('Component DID MOUNT!')
     }
     componentWillReceiveProps(newProps) {    
        console.log('Component WILL RECIEVE PROPS!')
     }
     shouldComponentUpdate(newProps, newState) {
        return true;
     }
     componentWillUpdate(nextProps, nextState) {
        console.log('Component WILL UPDATE!');
     }
     componentDidUpdate(prevProps, prevState) {
        console.log('Component DID UPDATE!')
     }
     componentWillUnmount() {
        console.log('Component WILL UNMOUNT!')
     }
  

    render(){
       
        return(
            <div>
               
               
               
                <input type="text" id="taskBar" onChange={this.getTaskValue}/>
                <button id="addTask" onClick={this.addTask}> Add </button>
               
               
                <AddTaskClass arrayValue={this.state.arrayValue} show={this.state.show}/>
                
                </div>
        );
    }
}