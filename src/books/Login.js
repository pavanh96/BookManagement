import React, {Component} from 'react';
import { Input,Button } from 'antd';
import {reduxForm,Field} from 'redux-form';
import {connect} from 'react-redux';

class Login extends Component {
    doLogin=(values)=>{
console.log(values);
    }
    render(){
        const {handleSubmit,reset}=this.props;
        return(
            <form onSubmit={handleSubmit(this.doLogin)}>
                <div className="example-input">
                <label>Userrname</label>
                <Field
                component={"input"}
                type="text"
                name="username"
                />
               <br></br>
                <label>Password</label>
                 <Field
                component={"input"}
                type="password"
                name="password"
                />
                
                    &nbsp;
                   
                </div>
                <button  type="submit">Login</button>

            </form>
        )
    }
}
Login=reduxForm({
    form:'Loginform'
})(Login);
export default connect ()(Login);