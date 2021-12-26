import React from "react";
import NavbarR from "./navreg";
import { BrowserRouter as Router,Redirect,Route } from "react-router-dom";
import Showresflights from "./showresflights";
import UserSearch from "./UserSearch";
import Profile from "./Profile";
import Home from "./Home";
import SignUp from "./SignUp.js";
import SignIn from "./login";
import GShowflights from "./guestshowflights";
import Help from "./help";
import { useState } from "react";
import {useSelector} from "react-redux";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "../Reducers";
import PropTypes from 'prop-types';
const store = createStore(rootReducer,composeWithDevTools());


function Registapp() {
	// 	const [Email, setem] = useState();
	//  const [Password, setpw] = useState();
	//  window.localStorage.setItem('auth',JSON.stringify(auth.data));
	//  dispatch({
	// 	 type:'LOGGED_IN_USER',
	// 	 payload: res.data,
	//  });
	
	//  const dispatch = useDispatch();
	 const {auth} =useSelector((state)=>({...state}));
	 console.log(auth.user.email)
return (


	<Router>

{/* <Redirect to={"/home"}></Redirect> */}
		<NavbarR />

		
		<Route path="/Profile">
		<Profile />
		</Route>
		<Route path="/guestshowflights">
		<GShowflights />
		</Route>
		<Route path="/home">
		<Home />
		</Route>
		<Route path="/SignUp">
		<SignUp />
		</Route>
		<Route path="/SignIn">
		<SignIn />
		</Route>
		<Route path="/help">
		<Help />
		</Route>
		</Router>
		);
}

export default Registapp;
