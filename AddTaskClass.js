import React from 'react';
import GetTaskClass from './GetTaskClass';

export default class AddTaskClass extends React.Component{
    // constructor(props){
    //     super(props);
    //         this.state=
    //         {
    //             show:this.props.show

    //     };
        
    // }
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
  
    componentWillUnmount() {
        console.log('UNMOUNTED');
        //var show=this.props.show;
       // <GetTaskClass isshow={this.props.show}/>
      }
    

render(){
    
    var show=this.props.show;

    const tasks=this.props.arrayValue;
    const listitem=tasks.map((task,i)=>{
        return <li> {task} </li>
    })
    return(
        <div>
           <ul>
           {listitem}

               </ul>


            </div>
    );
}

}