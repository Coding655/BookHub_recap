import { Outlet } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";


const Root = () => {
    return (
       <div>
          <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
          </div>
            <Footer></Footer>
       </div>
    );
};

export default Root;