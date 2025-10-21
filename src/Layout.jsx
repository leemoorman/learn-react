import {Outlet, Link} from "react-router-dom";

const Layout = () =>{
    return(
        <>
            <Header />
            <h2>My nav</h2>

            <Outlet />

            <p>My footer</p>
        </>
    );
};

export default Layout;