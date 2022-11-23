import { useState, useEffect } from 'react';
import axios from 'axios'; //maneja las peticiones
import UpdateItem from '../components/updates/updateItem';


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
            <h2>News</h2>
            {
                loading ? (
                    <p>Loading...</p>
                ) : (
                    updates.map(item => <UpdateItem key={item.id}
                        tittle1={item.tittle} subtittle1={item.subtittle}
                        body1={item.body} image1={item.image}  />)
                )
            }
        </section>
    )
};


export default NovedadesPage;