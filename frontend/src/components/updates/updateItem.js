import React from 'react';
import '../../styles/Pages/Novedades.css'

const UpdateItem = (props) => {
    const { tittle1, subtittle1, image1, body1 } = props; //cambio los nombres de los campos para que no queden igual a los del back

    return (
        <div className='holder'>
            <div>
                <h1>{tittle1}</h1>
                <h3>{subtittle1}</h3>
            </div>
            <div className='style'>
            <img src={image1} />
                <div className='principal' dangerouslySetInnerHTML={{ __html: body1 }} />
            </div>

            <hr />
        </div>
    );
}
export default UpdateItem;

