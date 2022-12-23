import Navbar from "../../../ui/bootstrap/components/Navbar/Navbar";

const Layout = ({ children, loggedIn }) => {
    return (
        <div>
            <Navbar loggedIn={loggedIn} />
            {children}
        </div>
    );
};

export default Layout;