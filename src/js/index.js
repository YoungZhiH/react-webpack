import React from 'react';
// // // import 'react-fastclick'  // 这个需要放到react下方才行
import { render } from 'react-dom';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux'
import  App  from './App';
// import 'antd/dist/antd.css'; 
import { BrowserRouter, Route ,Link} from 'react-router-dom';
import configureStore from './projectStore/configureStore'
import rootSage from './sagas/index'
import store from './projectStore/configureStore'

// const store = configureStore(window.__INITIAL_STATE__)
			// store.runSaga(rootSage)

ReactDOM.render(
	<AppContainer>
		<Provider store= {store}>
			<App/>
		</Provider>
	</AppContainer>
	, document.getElementById('app'));
