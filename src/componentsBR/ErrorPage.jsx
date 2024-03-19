const ErrorPage = ({ error }) => {
    return (
        <div className="text-center mt-5 mx-auto">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error}</i>
            </p>
        </div>
    );
};

export default ErrorPage;
