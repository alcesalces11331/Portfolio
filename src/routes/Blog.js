import React from 'react'
import UnderConstruction from '../components/Under-Construction';

const Blog = props => {
    return(
        <div className="blog-body-main">
            <div id="blog-ex-text">
                <p>You can check out my blog <br />
                    <a href="http://www.rollin-metzger.com">www.rollin-metzger.com</a><br />
                    in the meantime :D.
                </p>
            </div>
            <UnderConstruction />
        </div>  
    )
}

export default Blog;