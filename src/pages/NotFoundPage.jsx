import { Link } from "react-router-dom";

const NotFoundPage = () =>
{

    return (
        <div>
            <h1>404: page not found</h1>
            <p>Go back to <Link to="/">Home</Link></p>
        </div>
    );
}

export default NotFoundPage;