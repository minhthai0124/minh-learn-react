import React from 'react';
import axios from 'axios'

class AboutComp extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        };
    }
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            this.setState({
                users: response.data
            });
        })
    }
    render(){
        var users = this.state.users.map(user => (
            
            <div className="user" key={user.id}>
                <br/>
                <div className="name"><b>Name: {user.name}</b></div>
                <div className="email">Email: {user.email}</div>
                <br/>
            </div>
        ));
        return (
            <div>          
                <div className="list">
                    {users}
                </div>
            </div>
        );
    }
}
export default AboutComp