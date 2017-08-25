import React from 'react'
import ReactDom from 'react-dom'
import App from "./component/App";
import rootReducer from "./reducer/index";
import {Provider} from 'react-redux'
import {createStore} from 'redux'
const store=createStore(rootReducer)
ReactDom.render(
    <Provider store={store}>
        <App/></Provider>,document.getElementById('root')
)
