import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div>
            <h1>Sorry this data not abavleable</h1>
           <Link to="/"> <button>Go Home</button></Link>
        </div>
    );
};

export default Error;