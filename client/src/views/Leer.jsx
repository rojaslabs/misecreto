import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SecretList from '../components/SecretList';
import Loading from '../components/Loading';

const Leer = () => {

    const [secrets, setSecrets] = useState();
    const [activeFilter, setActiveFilter] = useState('sortByDate');
    const [searchParam, setSearchParam] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const filteredSecrets = secrets?.filter(secret => {
        return secret.content.toLowerCase().includes(searchParam.toLowerCase()) ||
            secret.title.toLowerCase().includes(searchParam.toLowerCase())
    })

    useEffect(() => {
        sortByDate();
    }, []);

    const sortByDate = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/secrets/all')
            .then(res => {
                setIsLoading(false)
                setSecrets(res.data.secrets)
                setActiveFilter('sortByDate')
            })
    }

    const sortByLikes = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/secrets/bylikes')
            .then(res => {
                setIsLoading(false)
                setSecrets(res.data.secrets)
                setActiveFilter('sortByLikes')
            })
    }

    const sortByComments = () => {
        setIsLoading(true)
        axios.get('http://localhost:8000/api/secrets/bycomments')
            .then(res => {
                setIsLoading(false)
                setSecrets(res.data.secrets)
                setActiveFilter('sortByComments')
            })
    }

    return (
        <div>
            <div className="container-filters">
                <div className='filters'>
                    <button onClick={sortByDate} disabled={activeFilter === 'sortByDate'}>Más recientes</button>
                    <button onClick={sortByLikes} disabled={activeFilter === 'sortByLikes'}>Más populares</button>
                    <button onClick={sortByComments} disabled={activeFilter === 'sortByComments'}>Más comentados</button>
                </div>
                <input type="text" name="search" autoComplete="off" placeholder='Buscar secreto...' value={searchParam} onChange={(e) => setSearchParam(e.target.value)} />
            </div>
            {!isLoading ? <p className='text-confesed-secrets'>{secrets?.length} secretos confesados...</p> : null}
            {searchParam && <p className='text-search-match'>Hay {filteredSecrets?.length} secreto(s) que coinciden con la búsqueda</p>}
            {!isLoading ? <div><SecretList secrets={filteredSecrets} /></div> : <Loading />}
        </div>
    );
}

export default Leer;