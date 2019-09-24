import React from 'react'
import UnderConstruction from '../components/Under-Construction';

const Blog = props => {
    return(
        <div className="blog-body-main">
            <div id="blog-ex-text">
                <p>You can check out my blog <br />
                    www.rollin-metzger.com <br />
                    in the meantime :D.
                </p>
            </div>
            <UnderConstruction />
        </div>  
    )
}

export default Blog;