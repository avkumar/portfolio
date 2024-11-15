import React from 'react';
import { Link } from 'react-router-dom';
import './posts.css';

const Posts = ({img}) => {
    return (
        <div className="post post__containers">
            <img
                className="postImg"
                src={img}
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="postTitle">
                    <Link to="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}

export default Posts