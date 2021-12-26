import React from "react";
import Navbar from "./compnents/nav";
import { BrowserRouter as Router,Route } from "react-router-dom";
import Addflight from "./compnents/addflight";
import Showflights from "./compnents/showflights";
import Search from "./compnents/search";
import Profile from "./compnents/Profile";
import Home from "./compnents/Home";
import { useState } from "react";
import {useSelector} from "react-redux";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import rootReducer from "./Reducers";
import PropTypes from 'prop-types';
import NavbarU from "./compnents/usernavbar";
import NavbarR from "./compnents/navreg";
import Showresflights from "./compnents/showresflights";
import UserSearch from "./compnents/UserSearch";
import SignUp from "./compnents/SignUp";
import SignIn from "./compnents/login";
import GShowflights from "./compnents/guestshowflights";
import Help from "./compnents/help";
import Pay from "./compnents/payment";

const store = createStore(rootReducer,composeWithDevTools());

function App() {
	const [Email, setem] = useState();
 const [Password, setpw] = useState();


//  const dispatch = useDispatch();
 const {auth} =useSelector((state)=>({...state}));
 try {
	if(auth.user.Role){
		return (
		<Router>
			<Navbar />
			
			<Route path="/flight/Addflight">
			<Addflight />
			</Route>
			<Route path="/flight/Showflights">
			<Showflights />
			</Route>
			<Route path="/flight/search">
			<Search />
			</Route>
			<Route path="/user/Profile">
			<Profile />
			</Route>
			<Route path="/user/home">
			<Home />
			</Route>
			<Route path="/help">
		<Help />
		</Route>
		<Route path="/payment">
				<Pay />
				</Route>
			
			</Router>
			
	  
	
	
	  );
		}
 } catch (error) {
	 
 }
try {
	if(!(auth.user.Role)&&auth.user.email!=""){
		return (
			<Router>
			<NavbarU />
			<Route path="/flight/UserSearch">
			<UserSearch />
			</Route>
			<Route path="/user/Profile">
			<Profile />
			</Route>
			<Route path="/user/Showresflights">
			<Showresflights />
			</Route>
			<Route path="/user/home">
			<Home />
			</Route>
			<Route path="/help">
		<Help />
		</Route>
		<Route path="/payment">
				<Pay />
				</Route>
			</Router>
	  
	
	
	  );
		}

} catch (error) {
	
}
	


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
				<Route path="/payment">
				<Pay />
				</Route>
				</Router>
				);



}

export default App;
