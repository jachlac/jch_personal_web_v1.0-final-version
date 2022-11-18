import { useState, useEffect } from 'react';
import axios from 'axios'; //maneja las peticiones
import updateItem from '../components/updates/updateItem';


const NovedadesPage = (props) => {
    const [loading, setLoading] = useState(false); //arranca falso, cuando carga de manera asincronica pasa a true
    const [updates, setUpdates] = useState([]); //carga las novedades

    useEffect(() => {
        const loadUpdates = async () => {
            setLoading(true);

            const response = await axios.get('http://localhost:3000/api/updates');
            setUpdates(response.data);
            setLoading(false);
        };

        loadUpdates();
    }, []);

    return (
        <section className='holder'>
            <h2>Novedades</h2>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    updates.map(item => <updateItem key={item.id}
                        tittle1={item.tittle} subtittle1={item.subtittle}
                        image1={item.image} body1={item.body} />)
                )
            }
        </section>
    )
};


export default NovedadesPage;