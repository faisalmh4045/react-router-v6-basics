import { Navigate, useNavigate } from "react-router-dom";

const Contact = () => {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <div className="border border-1 p-4 text-center">
                <h3>Contact Us</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nulla, sit, repellendus cum laboriosam provident facilis
                    perspiciatis tempora quasi odio ratione animi voluptatem,
                    necessitatibus illum incidunt explicabo iste autem. Quaerat,
                    asperiores.
                </p>

                <button
                    className="btn btn-outline-secondary"
                    onClick={() => navigate(-1)}
                >
                    Go back
                </button>
                <button
                    className="btn btn-outline-secondary ms-2"
                    onClick={() => navigate("/about")}
                >
                    Go to <i>/about</i>
                </button>

                {
                    /* component version of useNavigate */
                    "" && <Navigate to="/posts" />
                }
            </div>
        </div>
    );
};

export default Contact;
