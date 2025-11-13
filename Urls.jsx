import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import DynamicRouter from './DynamicRouter';






export default function Urls(){

return(
<Router>
<Routes>

<Route path="/:page" element={<DynamicRouter />} />

<Route path="/:page/:controller" element={<DynamicRouter />} />

</Routes>
</Router>
);
}


