import ReadBible from '../components/ReadBible';
import imgBible from  '/src/assets/bible2.jpg';
import Loader from '../components/Loader';
import Error from '../components/Error';
import ImgWithLoader from '../components/ImgWithLoader';
import { useEffect, useState, useContext } from 'react';
import { dataContext } from '../context/dataContext';



export default function Verse() {

    const { verse } = useContext(dataContext);
    if(!verse.data){
        const [loading, setLoading] = useState(true);
        const [err, setErr] = useState(null);

        useEffect(()=> {
            const fetchVerse = async ()=> {
                try {
                    const res = await fetch('api/verse');
                    if(!res.ok) throw new Error('no se pudo cargar el versiculo');
                    const data = await res.json();
                    verse.setData(data)
                }
                catch(e) {
                    setErr(e.message)
                }
                finally {
                    setLoading(false)
                }
            }

            fetchVerse();
        }, []);

        if(loading) return (
            <div className='w-full h-screen'>
                <Loader />
            </div>
        )
        if (err) return (
            <div>
                <Error  error={err.message}/>
            </div>
        )
    }

    return (
        <section className="text-center" id="verse">
            <h1 className="text-6xl sm:text-8xl text-t-yellow font-bold mt-14 sm:mt-28 font-mono">Versículo del día</h1>
            <p className="w-full px-5 pt-4 sm:pt-0.5 sm:px-28 text-sm sm:text-lg">{verse.data.text}<br /> {verse.data.book} {verse.data.charapter}:{verse.data.id}</p>
            <ImgWithLoader src={imgBible} alt="imagen de una biblia" className='w-full sm:w-3/5 mx-auto mt-7 rounded-xl'/>
            <ReadBible link={`https://www.biblegateway.com/passage/?search=${verse.data.book}%20${verse.data.charapter}%3A${verse.data.id}&version=NTV;NVI;RVR1960`} />
        </section>
    );
}