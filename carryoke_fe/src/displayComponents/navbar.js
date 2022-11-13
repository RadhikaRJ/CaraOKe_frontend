import { NavLink } from "react-router-dom";
import "../styles/nav.css";
function Navigation() {
  return (
    <div>
      <nav class="navigation container ">
       <ul>
          <li class="list-item-inline">
            <NavLink to="/login" class="link">
              <span class="material-icons">login</span>
            </NavLink>
          </li>
          </ul>
      </nav>
    </div>
  );
}

export default Navigation;