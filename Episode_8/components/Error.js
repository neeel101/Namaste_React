import { useRouteError } from "react-router-dom";
import img from "../images/Error-img.jpeg";
const Error = () => {
    const Err = useRouteError();
    console.log('this the err object :', Err);
    return (
        <div className="Error">
            <h1>Oops Something Went Wrong!</h1>
            <img src={img} alt="Crying Kitten 😥" />
            <h2>{Err.status }:  {Err.statusText}</h2>
        </div>
    );
}
export default Error;