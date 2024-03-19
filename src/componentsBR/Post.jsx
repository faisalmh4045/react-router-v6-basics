import { useParams } from "react-router-dom";

const Post = () => {
    const { postId } = useParams();
    return (
        <div className="border p-sm-2 p-md-4 list-unstyled w-75 ms-3">
            <h4>Post - {postId}</h4>
            <div>
                <p>post title - Lorem ipsum dolor sit amet</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Commodi quibusdam accusamus, accusantium est rerum expedita
                    sed nulla cupiditate debitis aliquam non consequuntur
                    dolorum aspernatur voluptate eveniet quod recusandae!
                    Corrupti, officiis.
                </p>
            </div>
        </div>
    );
};

export default Post;
