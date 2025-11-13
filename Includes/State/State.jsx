import React from 'react';









export default class State extends React.Component{





constructor(props){

super(props);

this.storageName=props.storageName || '__pars_state__';

this.state={
...this.state,
storageValue:{}
};

this.updateStorage();

if(typeof this.state.storageValue==='string'){
this.delStorage();
}

}







setDefault=(key,value=null)=>{

if(!this.state.hasOwnProperty(key)){
this.setState({[key]:value});
}

return true;

};







updateStorage = () => {

try {

const data = localStorage.getItem(this.storageName);

const parsed = data ? JSON.parse(data) : {};

this.state.storageValue = parsed;

return parsed;

} catch (e) {
return {};
}

};








save=()=>{

localStorage.setItem(this.storageName, JSON.stringify(this.state.storageValue));

return true;

};








add=(args)=>{

this.updateStorage();

Object.entries(args).forEach(([k, v]) => {
if (!k) return;
if (!this.state.storageValue.hasOwnProperty(k)) {
this.state.storageValue[k]=v;
}
});

this.save();

this.forceUpdate();

return true;

};










edit = (args = {}) => {

this.updateStorage();

Object.entries(args).forEach(([k, v]) => {
if (!k) return;
if (this.state.storageValue.hasOwnProperty(k)) {
this.state.storageValue[k] = v;
}
});

this.save();

this.forceUpdate();

return true;

};









update=(args)=>{

this.updateStorage();

Object.entries(args).forEach(([key, value])=>{
if (!k) return;

this.state.storageValue[key] = value;
});

this.save();

this.forceUpdate();

return true;

};








editKey = (path, newValue = null) => {

this.updateStorage();

const parts = path.split("=>");

const temp = { ...this.state.storageValue };
let ref = temp;

for (let i = 0; i < parts.length; i++) {
const p = parts[i];
if (!ref[p]) return false;

if (i === parts.length - 1) {
ref[p] = newValue;
} else {
if (typeof ref[p] !== "object") return false;
ref = ref[p];
}
}

this.state.storageValue = temp;

this.save();

this.forceUpdate();

return true;

};









updateKey = (path, newValue = null) => {

this.updateStorage();

const parts = path.split("=>");
const temp = { ...this.state.storageValue };
let ref = temp;

for (let i = 0; i < parts.length; i++) {
const p = parts[i];

if (i === parts.length - 1) {
ref[p] = newValue;
} else {
if (!ref[p] || typeof ref[p] !== "object") {
ref[p] = {};
}
ref = ref[p];
}
}

this.state.storageValue = temp;

this.save();

this.forceUpdate();

return true;

};







get = () => {

this.updateStorage();

return this.state.storageValue;

};







getKey = (path) => {

this.updateStorage();

const parts = path.split("=>");
let ref = this.state.storageValue;

for (let p of parts) {
if (!ref[p]) return null;
ref = ref[p];
}

return ref;

};








del = (key) => {

if (!key) return false;

this.updateStorage();

if (this.state.storageValue.hasOwnProperty(key)) {

delete this.state.storageValue[key];

this.save();

this.forceUpdate();

return true;

}

return false;

};









delStorage = () => {

localStorage.removeItem(this.storageName);

return true;

};









active=(status=3)=>{

return this.changeStatus("active", status);

};









activeKey=(path,status=3)=>{

return this.changeStatusKey(path,'active', status);

};









changeStatus = (name, status = 3) => {

this.updateStorage();

if (status === 3) {

const current = this.state.storageValue[name] ? 1 : 0;

this.state.storageValue[name] = current ? 0 : 1;

} else if (status === 0 || status === 1) {
this.state.storageValue[name] = status;

} else {
return false;
}

this.save();

this.forceUpdate();

return true;

};








changeStatusKey=(path,name,status=3)=>{

this.updateStorage();

const parts = path.split("=>");

let ref = this.state.storageValue;

for (let p of parts) {
if (!ref[p] || typeof ref[p] !== "object") {
return false;
}

ref = ref[p];
}

if (status === 3) {
const c = ref[name] ? 1 : 0;
ref[name] = c ? 0 : 1;

} else if (status === 0 || status === 1) {
ref[name] = status;
}

this.save();

this.forceUpdate();

return true;

};






getStatus = () => {

const data = this.get();

return data.active ?? false;

};








getStatusKey = (path) => {

return this.getKey(path + "=>active");

};







getKeys = () => {

this.updateStorage();

return Object.keys(this.state.storageValue).filter(
(k) => typeof this.state.storageValue[k] === "object"
);

};








getActives = () => {

this.updateStorage();

const out = {};

Object.entries(this.state.storageValue).forEach(([k, v]) => {
if (typeof v === "object" && v.active === 1) {

out[k] = v;
}
});

return out;

};








getActiveKeys = () => {

this.updateStorage();

return Object.keys(this.state.storageValue).filter((k) => {

const v = this.state.storageValue[k];
return typeof v === "object" && v.active === 1;
});

};









render() {
return null;
}






}
