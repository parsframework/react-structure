import React from 'react';
import Controller from '../Controller';
import HomeView from '../../Views/Home/Home';
import HomeModel from '../../Models/Home/Home';
import {Link} from 'react-router-dom';







export default class Home extends Controller{

constructor(props){

super(props);

this.state={
...this.state
};

this.view=new HomeView(props);

}










render(){
return super.render();
}





}
