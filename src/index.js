import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './landing/Landing';

import './client/css/index.css';
import 'antd/dist/antd.css';
import {BrowserRouter} from 'react-router-dom';
import {configureStore} from './store/configStore';
import intinalstate from './store/intinalstate';
import {Provider} from 'react-redux';

ReactDOM.render(<Provider store={configureStore(intinalstate)}>
                    <BrowserRouter>
                            <Landing />
                    </BrowserRouter>
                </Provider>

    , document.getElementById('root'));
