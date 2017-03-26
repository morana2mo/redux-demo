import React from 'react';
import { Route} from 'react-router';


import Counter from '../views/counter/index.jsx';
import Home from '../views/home/index.jsx';
export default (
	 <Route>
	 	<Route path="/" component={Home}/>
	 	<Route path="home" component={Counter}/>
	 </Route>
)