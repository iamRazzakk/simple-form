import { useEffect, useRef } from "react";

const RefForm = () => {
    const useRefName = useRef();
    const useRefEmail = useRef()
    useEffect(() => {
        useRefName.current.focus();
    }, [])
    const handleSubmit = e => {
        e.preventDefault();
        console.log(useRefName.current.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={useRefName} type="text" name='name' />
                <br />
                <input ref={useRefEmail} type="email" name="email" placeholder="email" id="" /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default RefForm;