import classes from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../store/slices/authSlice";

const Header = () => {

    const dispatch = useDispatch()

    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

    const onLogout = (event) => {
        event.preventDefault()
        dispatch(authActions.logout())
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>

            {isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href='#'>My Products</a>
                        </li>
                        <li>
                            <a href='#'>My Sales</a>
                        </li>
                        <li>
                            <button onClick={onLogout}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
            )
        </header>
    );
};

export default Header;
