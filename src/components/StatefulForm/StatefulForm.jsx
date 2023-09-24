import { useState } from "react";


const StatefulForm = () => {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const handleSubmit = e => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        // console.log(e.target.value);
    }
    const handleEmailSubmit = (e) => {
        // console.log(e);
        setEmail(e.target.value)
    }
    const handlePasswordSubmit = e => {
        setPassword(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name='name' />
            <br />
            <input onChange={handleEmailSubmit} type="email" name="email" id="" placeholder="Email" /><br />
            <input onChange={handlePasswordSubmit} type="password" name="password" id="" placeholder="password" />
            <br />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default StatefulForm;