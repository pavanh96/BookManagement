import React from 'react';
import {Layout} from 'antd';
import {Switch,Route} from 'react-router-dom';
import BooksDashboard from '../books/booksDashboard';
import BookForm from'../books/BookForm';
import Signup from '../books/Signup';
import Login from '../books/Login';
const {Content} = Layout;

const ContentCont = () => {
    return(
        <Content className='content-cont'>
          <Switch>
              <Route exact={true} path="/books" component={BooksDashboard}/>
              <Route exact={true} path="/add-books" component={BookForm}/>
              <Route exact={true} path="/signup" component={Signup}/>
              <Route exact={true} path="/Login" component={Login}/>
          </Switch>
        </Content>
    )
}

export {
    ContentCont
}