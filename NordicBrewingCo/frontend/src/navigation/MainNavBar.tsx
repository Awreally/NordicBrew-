import { NavLink } from "react-router";
function MainNavBar() {
    
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/subscription">SUBSCRIPTION</NavLink>
            <NavLink to="/story">OUR STORY</NavLink>
        </nav>
    );
}

export default MainNavBar;