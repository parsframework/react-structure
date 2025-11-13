import React from 'react';
import {useParams} from 'react-router-dom';
import useComponents from './Components';






export default function DynamicRouter(){

const {components,args}=useComponents();

const {page,controller}=useParams();

const methodName=controller || 'default';

const [DynamicClass,setDynamicClass]=React.useState(null);

const [loading,setLoading]=React.useState(true);

React.useEffect(()=>{
setLoading(true);

import(`./Controllers/${page}/${page}.jsx`)
.then((module)=>{
setDynamicClass(()=>module.default);
setLoading(false);
})
.catch((err)=>{
console.error(err)
setDynamicClass(null)
setLoading(false);
});
},[page,controller]);

if(loading) return <div>Loading...</div>;

if(!DynamicClass) return <div>404</div>;

return <DynamicClass
page={page}
controller={methodName}
components={components}
args={args}
/>;

}


