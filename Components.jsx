import React from 'react';
import {Link,useNavigate,useLocation,useParams} from 'react-router-dom';







export default function useComponents(){

const navigate=useNavigate();
//const location=useLocation();
//const params=useParams();

return{

components:{
navigate,
Link,
},

args:{
key1:"value1",
key2:"value2",
},

};





}
