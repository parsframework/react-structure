import React from 'react';







export default class Manager extends React.Component{




constructor(props){

super(props);

this.state={
...this.state
};

}







setDefault=(key,value=null)=>{

if(!this.state.hasOwnProperty(key)){
this.setState({[key]:value});
}

return true;

};







setDefaults=(args={})=>{

for(const [key,value] of Object.entries(args)){
this.setDefault(key,value);
}

return true;

};








addState=(key,value=null,storage=false)=>{

this.setState({[key]:value});

if(storage) this.saveStorage(key,value);

return true;

};






addAllState=(args={},storage=false)=>{

for(const [key,value] of Object.entries(args)){
this.addState(key,value,storage);
}

return true;

};







get = (key, defaultValue = null) => {

return this.state[key] !== undefined ? this.state[key] : defaultValue;

};





getAll=()=>{

return this.state;

};








delState = (key, storage = false) => {
this.setState(prev => {
const state = { ...prev };
delete state[key];
if(storage) this.delStorage && this.delStorage(key);
return state;
});
return true;
};






delAllState=(keys,storage=false)=>{

for(const key of keys){
this.delState(key,storage);
}

return true;

};





increaseState = (key, value = 1, storage = false) => {
value = Number(value);
if (isNaN(value)) return 0;

this.setState(prev => ({
...prev,                // حفظ بقیه کلیدها
[key]: (Number(prev[key] || 0) + value)
}));

if (storage) this.increaseStorage && this.increaseStorage(key, value);
};







increaseAllState=(args={},storage=false)=>{

for(const [key,value] of Object.entries(args)){
this.increaseState(key,value,storage);
}

};







decreaseState=(key,value=1,storage=false) =>{

value=Number(value);

if(typeof value !=='number') return 0;

this.setState(prev=>({[key]:(Number(prev[key] || 0)-value)}));

if(storage) this.decreaseStorage(key,value);

};







decreaseAllState=(args,storage=false)=>{

for(const [key,value] of Object.entries(args)){
this.decreaseState(key,value,storage);
}

};






add=(key,value=null)=>{

this.addState(key,value);

this.saveStorage(key,value);

return true;

};








addAll=(args={})=>{

for(const [key,value] of Object.entries(args)){
this.add(key,value);
}

return true;

};








del=(key)=>{

this.delState(key);

this.delStorage(key);

return true;

};







delAll=(keys)=>{

for(const key of keys){
this.del(key);
}

return true;

};







increase=(key,value=1)=>{

this.increaseState(key,value);

this.increaseStorage(key,value);

};







increaseAll=(args)=>{

for(const [key,value] of Object.entries(args)){
this.increase(key,value);
}

};







decrease=(key,value=1)=>{

this.decreaseState(key,value);

this.decreaseStorage(key,value);

};








decreaseAll=(args)=>{

for(const [key,value] of Object.entries(args)){
this.decrease(key,value);
}

};







save=(key)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

storage[key]=this.state[key];//ارر this.state[key]

localStorage.setItem('__pars_state__',JSON.stringify(storage));

return true;

};






//ارر
saveAll=()=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

const merged={...storage,...this.state};

localStorage.setItem('__pars_state__',JSON.stringify(merged));

return true;

};






//ارر
dropState=()=>{

this.setState({});

return true;

};




dropStorage=()=>{

//localStorage.removeItem('__pars_state__');
//localStorage.setItem('__pars_state__',{});
localStorage.setItem('__pars_state__',JSON.stringify({}));

return true;

};








drop=()=>{

this.dropStorage();

this.dropState();

return true;

};




addStorage=(key,value=null)=>{

return this.saveStorage(key,value);

};






addAllStorage=(args)=>{

for(const [key,value] of Object.entries(args)){
this.addStorage(key,value);
}

return true;

};






getStorage=(key,defaultValue=null)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

return storage[key]!==undefined ? storage[key] : defaultValue;

};






getAllStorage=()=>{

return JSON.parse(localStorage.getItem('__pars_state__')) || {};

};





increaseStorage=(key,value=1)=>{

value=Number(value);

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

const current=Number(storage[key] || 0);

storage[key]=current+value;

localStorage.setItem('__pars_state__',JSON.stringify(storage));

return storage[key];

};







increaseAllStorage=(args={})=>{

for(const [key,value] of Object.entries(args)){
this.increaseStorage(key,value);
}

};





decreaseStorage=(key,value=1)=>{

value=Number(value);

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const current=Number(storage[key] || 0);

storage[key]=current-value;

localStorage.setItem('__pars_state__',JSON.stringify(storage));

return storage[key];

};







decreaseAllStorage=(args)=>{

for(const [key,value] of Object.entries(args)){
this.decreaseStorage(key,value);
}

};






delStorage=(key)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

delete storage[key];

localStorage.setItem('__pars_state__',JSON.stringify(storage));

return true;

};







delAllStorage=(keys)=>{

for(const key of keys){
this.delStorage(key);
}

return true;

};







fetch=(key)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

if(storage.hasOwnProperty(key)){
this.setState({[key]:storage[key]});
}

return storage[key];

};







fetchAll=()=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

this.setState(prev =>({...prev,...storage}));

return storage;

};







saveStorage=(key,value=null)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

storage[key]=value;

localStorage.setItem('__pars_state__', JSON.stringify(storage));

return true;

};







saveAllStorage=(args)=>{

for(const [key,value] of Object.entries(args)){
this.saveStorage(key,value);
}

};






//ارر
issetState=(key)=>{

return this.state.hasOwnProperty(key);

};






issetStorage=(key)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

return storage.hasOwnProperty(key);

};





emptyState=(key)=>{

if(!this.state.hasOwnProperty(key)) return true;

const value=this.state[key];

if (value===null) return true;
if (value===0) return true;
if (value==='0') return true;
if (value==='') return true;
if(Array.isArray(value) && value.length===0) return true;
if(typeof value==='object' && !Array.isArray(value) && Object.keys(value).length===0) return true;

return false;

};






emptyStorage=(key)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

if(!storage.hasOwnProperty(key)) return true;

const value=storage[key];

if(value===null) return true;
if(value===0) return true;
if(value==='0') return true;
if(value==='') return true;
if(Array.isArray(value) && value.length===0) return true;
if(typeof value==='object' && !Array.isArray(value) && Object.keys(value).length===0) return true;

return false;

};






addStatic=(key,value=null)=>{

this.state[key]=value;

return true;

};






addAllStatic=(args)=>{

for(const [key,value] of Object.entries(args)){
this.addStatic(key,value);
}

return true;

};








getStatic=(key,defaultValue=null)=>{

return this.get(key,defaultValue);

};








getAllStatic=()=>{

return this.getAll();

};







delStatic=(key)=>{

delete this.state[key];

return true;

};






delAllStatic=(keys)=>{

for(const key of keys){
this.delStatic(key);
}

return true;

};






increaseStatic=(key,value=1)=>{

this.state[key]=(Number(this.state[key] || 0)+value);

return this.state[key];

};






increaseAllStatic=(args)=>{

for(const [key,value] of Object.entries(args)){
this.increaseStatic(key,value);
}

};





decreaseStatic=(key,value=1)=>{

this.state[key]=(Number(this.state[key] || 0)-value);

return this.state[key];

};






decreaseAllStatic=(args)=>{

for(const [key,value] of Object.entries(args)){
this.decreaseStatic(key,value);
}

};






dropStatic=()=>{

for(const k in this.state) delete this.state[k];

return true;

};






//ارر
countState=()=>{

return Object.keys(this.state).length;

};







countStorage=()=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

return Object.keys(storage).length;

};






count=()=>{

const state=this.countState();

const storage=this.countStorage();

return {
state:state,
storage:storage,
total:state+storage
}

};








isObject=(val)=>{

return val && typeof val==='object' && !Array.isArray(val);

};







addKeyState = (type, key, value = null, storage = false) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

this.setState(prev => ({
[type]: { ...prev[type], [key]: value }
}));

if (storage) this.addKeyStorage(type, key, value);

return true;

};






addKeyStorage=(type,key,value=null)=>{

const storage=JSON.parse(localStorage.getItem('__pars_state__')) || {};

const obj=storage[type];

//if(!this.isObject(obj)) return false;//مناسب update

storage[type]={ ...obj,[key]:value};

localStorage.setItem('__pars_state__',JSON.stringify(storage));

return true;

};





addKey = (type, key, value = null) => {

const s1 = this.addKeyState(type, key, value);

const s2 = this.addKeyStorage(type, key, value);

return s1 && s2;

};





addKeyStatic = (type, key, value = null) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

this.state[type][key] = value;

return true;

};






delKeyState = (type, key, storage = false) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

this.setState(prev => {
const copy = { ...prev[type] };
delete copy[key];
return { [type]: copy };
});

if (storage) this.delKeyStorage(type, key);

return true;

};






delKeyStorage = (type, key) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const obj = storage[type];

if (!this.isObject(obj)) return false;

const copy = { ...obj };

delete copy[key];

storage[type] = copy;

localStorage.setItem('__pars_state__', JSON.stringify(storage));

return true;

};






delKey = (type, key) => {

const s1 = this.delKeyState(type, key);

const s2 = this.delKeyStorage(type, key);

return s1 && s2;

};






delKeyStatic = (type, key) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

delete this.state[type][key];

return true;

};







getKeyState = (type, key) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

return obj[key];

};





getKeyStorage = (type, key) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const obj = storage[type];

if (!this.isObject(obj)) return false;

return obj[key];

};





getKey = (type, key) => {

return {
state: this.getKeyState(type, key),
storage: this.getKeyStorage(type, key)
};

};







countKeyState = (type) => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

return Object.keys(obj).length;

};





countKeyStorage = (type) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const obj = storage[type];

if (!this.isObject(obj)) return false;

return Object.keys(obj).length;

};





countKey = (type) => {

const s = this.countKeyState(type);

const st = this.countKeyStorage(type);

if (s === false || st === false) return false;

return { state: s, storage: st, total: s + st };

};








searchKeyState = (type, text, mode = 'like') => {

const obj = this.state[type];

if (!this.isObject(obj)) return false;

const result = {};

for (const [k, v] of Object.entries(obj)) {
if (mode === '=' && v === text) result[k] = v;
if (mode === 'like' && String(v).includes(String(text))) result[k] = v;
}

return result;

};






searchKeyStorage = (type, text, mode = 'like') => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const obj = storage[type];

if (!this.isObject(obj)) return false;

const result = {};

for (const [k, v] of Object.entries(obj)) {
if (mode === '=' && v === text) result[k] = v;
if (mode === 'like' && String(v).includes(String(text))) result[k] = v;
}

return result;

};





searchKey = (type, text, mode = 'like') => {

const stateRes = this.searchKeyState(type, text, mode);

const storageRes = this.searchKeyStorage(type, text, mode);

if (stateRes === false || storageRes === false) return false;

return {
state: stateRes,
storage: storageRes,
total: { ...stateRes, ...storageRes }
};

};









displayState= (key, alertOutput = false, consoleOutput = true) => {

const state = this.state[key];

if (consoleOutput) {
console.log('state:', state);
}

if (alertOutput) {
alert(`state: ${JSON.stringify(state, null, 2)}`);
}

return result;

};







displayAllState= (alertOutput = false, consoleOutput = true) => {

const state = this.state;

if (consoleOutput) {
console.log('state:', state);
}

if (alertOutput) {
alert(`state: ${JSON.stringify(state, null, 2)}`);
}

return result;

};







displayStorage= (key, alertOutput = false, consoleOutput = true) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const storageVal = storage[key];

if (consoleOutput) {
console.log('storage:', storageVal);
}

if (alertOutput) {
alert(`storage: ${JSON.stringify(storageVal, null, 2)}`);
}

return result;

};







displayAllStorage= (alertOutput = false, consoleOutput = true) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

if (consoleOutput) {
console.log('storage:', storage);
}

if (alertOutput) {
alert(`storage: ${JSON.stringify(storage, null, 2)}`);
}

return result;

};






display = (key, alertOutput = false, consoleOutput = true) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const stateVal = this.state[key];

const storageVal = storage[key];

const result = { state: stateVal, storage: storageVal };

if (consoleOutput) {
console.log('state:', stateVal);
console.log('storage:', storageVal);
}

if (alertOutput) {
alert(`
state: ${JSON.stringify(stateVal, null, 2)}
\n
storage: ${JSON.stringify(storageVal, null, 2)}
`);
}

return result;

};







displayAll= (alertOutput = false, consoleOutput = true) => {

const storage = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const state = this.state;

const result = { state, storage };

if (consoleOutput) {
console.log('state:', state);
console.log('storage:', storage);
}

if (alertOutput) {
alert(`
state: ${JSON.stringify(state, null, 2)}
\n
storage: ${JSON.stringify(storage, null, 2)}
`);
}

return result;

};






sync = (dropState = false, dropStorage = false) => {

const storageCopy = JSON.parse(localStorage.getItem('__pars_state__')) || {};

const stateCopy = { ...this.state };

if (dropState) this.dropStatic();

if (dropStorage) this.dropStorage();

const mergedState = { ...storageCopy, ...stateCopy };

localStorage.setItem('__pars_state__', JSON.stringify(mergedState));

this.setState(mergedState);

return true;

};







render(){
}








}
