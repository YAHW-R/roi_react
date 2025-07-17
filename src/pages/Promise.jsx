import ReadBible from "../components/ReadBible";
import imgBible from "/src/assets/bible3.jpg";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ImgWithLoader from "../components/ImgWithLoader";
import { useEffect, useState, useContext } from "react";
import { dataContext } from "../context/dataContext";

export default function Promise() {

    const { promise } = useContext(dataContext)
    
    if(!promise.data) {
        const [loading, setLoading] = useState(true);
        const [err, setErr] = useState(null);

            useEffect(()=> {
                const fetchPromise = async ()=> {
                    try {
                        const res = await fetch('api/promise');
                        if(!res.ok) throw new Error('no se pudo cargar el versiculo');
                        const data = await res.json();
                        promise.setData(data)
                    }
                    catch(e) {
                        setErr(e.message)
                    }
                    finally {
                        setLoading(false)
                    }
                }
    
                fetchPromise();
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
        <section className="text-center" id="promise">
            <h1 className="text-6xl sm:text-8xl text-t-yellow font-bold mt-14 sm:mt-28 font-mono">Promesa del día</h1>
            <p className="w-full px-5 pt-4 sm:pt-0.5 sm:px-28 text-sm sm:text-lg">{promise.data.text}<br /> {promise.data.book} {promise.data.chapter}:{promise.data.verse}</p>
            <ImgWithLoader src={imgBible} alt="imagen de una biblia" className="w-full sm:w-3/5 mx-auto mt-7 rounded-xl" />
            <ReadBible link={`https://www.biblegateway.com/passage/?search=${promise.data.book}%20${promise.data.chapter}%3A${promise.data.verse}&version=RVR1960`} />
        </section>
    );
}