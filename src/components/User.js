import { useState } from "react";


const User = ({ name }) => {

    const [count] = useState(0);
    const [count2] = useState(1);

    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Count2: {count2}</h1>
            <h2>{name}</h2>
            <h3>Location: Dehradun</h3>
            <h3>Twitter: @Akshaymarch7</h3>
        </div>
    )
}

export default User;