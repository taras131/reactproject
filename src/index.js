
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import store from "./redux/reduxStore";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import App from './App';


	ReactDOM.render(
		<React.StrictMode>
			<Provider value = {store}>
				<App  />
			</Provider>
		</React.StrictMode>,
		document.getElementById('root')
	);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 