import React from 'react';
import Image from 'react-bootstrap/Image';
import meJobInterview2019 from '../images/meJobInterview2019.jpg';

const ImageRollin = props => {
    return(
        <div>
            <Image src={meJobInterview2019} alt="image of myself, 2019; navy blue blazer, grey tie" />
        </div>
    )
}

export default ImageRollin;