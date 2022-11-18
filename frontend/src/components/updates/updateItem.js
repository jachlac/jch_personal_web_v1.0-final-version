import React from 'react';

const updateItem = (props) => {
    const { tittle1, subtittle1, image1, body1 } = props; //cambio los nombres de los campos para que no queden igual a los del back

    return (
        <div className='updates'>
            <h1>{tittle1}</h1>
            <h2>{subtittle1}</h2>
            <img src={image1} />
            <div dangerouslySetInnerHTML={{ __html: body1 }} />
            <hr />
        </div>
    );
}
export default updateItem;

