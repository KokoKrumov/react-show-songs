import React from "react";
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'

import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
    //всеки компонент има достъп до store-a през provider-a
    <Provider store={createStore(reducers)}>
        <App/>
    </Provider>,
    document.querySelector('#root')
)
