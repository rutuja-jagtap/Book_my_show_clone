import React from "react";

class User extends React.Component{

    constructor(props){
        super(props);

        this.state={
            planet:"earth",
        }
    }
    render() 
    {
        //view
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.description}</p>
                <h2>{this.state.planet}</h2>
            </div>
        );
    }
}

export default User;
    /*
const User = (props) =>{
    return(
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h4>Full Stack Web dev</h4>
        </div>
    );
};

export default User;

//props: is a data that is being pass from one component to another
//state: A set of data that an individual components hold.
*/

