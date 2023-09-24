import React from 'react';

const ReusableForm = ({ formTitle, submitBtn = "Submit" }) => {
    const handleSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h1>{formTitle}</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your Name' name='name' />
                <br />
                <input type="email" name="email" placeholder="email" id="" /><br />
                <input type="Password" name="password" placeholder="password" id="" /><br />
                <input type="submit" value={submitBtn} />
            </form>
        </div>
    );
};

export default ReusableForm;