import React from 'react';
import ReactDOM from 'react-dom';
import {addMessage} from "./redux/State";
import {addPost} from "./redux/State";
import App from './App';

export const reRenderDOM = (state) =>{
	ReactDOM.render(
		<React.StrictMode>
		  <App state = {state} addMessage = {addMessage} addPost ={addPost} />
		</React.StrictMode>,
		document.getElementById('root')
	);
}