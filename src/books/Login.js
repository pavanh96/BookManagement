import React, {Component} from 'react';
import { Input } from 'antd';
import { Button } from 'antd';

class Login extends Component {
    render(){
        return(
            <div>
                <div className="example-input">
                    <Input  placeholder="FirstName" />
                    &nbsp;
                    <Input.Password placeholder="password" />
                    &nbsp;
                   
                </div>
                <Button  type="primary">Login</Button>

            </div>
        )
    }
}

export default Login;