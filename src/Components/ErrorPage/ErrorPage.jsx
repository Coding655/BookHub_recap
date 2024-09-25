import { Link } from "react-router-dom";
import { CiLogout } from "react-icons/ci";

const ErrorPage = () => {
    return (
        <div className="grid place-items-center my-[30vh]">
            <h2 className="text-8xl text-white font-medium"> This Page will Coming soon</h2>
            <Link to={'/'} className="btn text-2xl px-4 mt-8 font-extrabold">Go Back 
              <CiLogout className="text-2xl"></CiLogout> 
            </Link>
        </div>
    );
};

export default ErrorPage;