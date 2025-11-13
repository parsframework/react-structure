import React from 'react';
import State from '../Includes/State/State';
import Manager from '../Includes/State/State';







export default class Controller extends State{




constructor(props){

super(props);

this.state={
...this.state,
};

//this.storageName=this.constructor.name;

this.page=props.page;
this.controller=props.controller;
this.c=props.args;
this.args=props.args;

}






componentDidMount(){
this.init();
}


componentDidUpdate(prevProps,prevState){
this.Updating();
}


refresh(){
this.forceUpdate();
}






init(){

//this.addState('s88',1);
//var x=this.getStatus();alert(x);

}

test(){return(<div>
<h3>State Manager</h3>
<pre>{JSON.stringify(this.state, null, 2)}</pre><h3>Storage Manager</h3>
<pre>{JSON.stringify(localStorage.getItem(this.storageName), null, 2)}</pre>
</div>);}


Updating(){
}









call(methodName='default', ...args){

if (typeof this[methodName] === "function") {
return this[methodName](...args);
}

if (this.view && typeof this.view[methodName] === "function") {
return this.view[methodName](...args);
}

//مناسب 404
return <h1>متد "{methodName}" یافت نشد</h1>;

}







render(){
//return JSON.stringify(this.state,null,2);
//return JSON.stringify(localStorage.getItem('__pars_state__'),null,2);
//return this.test();
return this.call(this.controller || 'default');
}






}
