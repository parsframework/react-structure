import React from 'react';
import State from '../Includes/State/State';









export default class View extends React.Component{

constructor(props){

super(props);

this.state={
...this.state,
post:{},
get:{},
notification:{},
};

this.storageName=this.constructor.name;

this.getPost();

this.page=props.page;
this.controller=props.controller;
this.c=props.args;
this.args=props.args;
this.redirect=props.args.navigate;

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
}


Updating(){
}


getPost(){
const p=JSON.parse(localStorage.getItem('post')) || {};
this.state['post']=p;
return p;
}


setPost(args){
localStorage.setItem('post',JSON.stringify(args));
this.state['post']=args;
return true;
}












render(){
return null;
}





}
