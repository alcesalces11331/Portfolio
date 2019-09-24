import React from 'react';
import Image from 'react-bootstrap/Image';
import blacksmithSparks from '../images/blacksmithSparks.jpg';

const UnderConstruction = props => {
    return(
        <div id="construction-photo-1">
            <Image src={blacksmithSparks} alt="blacksmith surrounded by sparks, black and white" />
        </div>
    )
}

export default UnderConstruction;