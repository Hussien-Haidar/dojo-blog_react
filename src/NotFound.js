import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry! Page Not Found(404)</h2>
            <span>It seems that the url is not available, </span>
            <Link to='/'>go back to home page</Link>
        </div>
    );
}
 
export default NotFound;