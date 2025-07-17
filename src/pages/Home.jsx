//import ReadBible from '../components/ReadBible';
import imgBible from  '/src/assets/bible1.jpg';
import ImgWithLoader from '../components/ImgWithLoader';

export default function Home()  {
    return (
        <section className="text-cetner" id="home">
            <h1 className="text-6xl sm:text-8xl text-t-yellow font-bold mt-[100px] font-mono text-center">ROI</h1>
            <p className="w-4/5 mx-auto mb-12 mt-8 sm:my-3 text-sm sm:text-lg text-center">Tomad la espada del Espiritu, que es la palabra de Dios. <br /> Efesios 6:17</p>
            <ImgWithLoader src={imgBible} alt="imagen de un biblia" className='w-full sm:w-3/5 mx-auto mt-7 rounded-xl'/>
        </section>
    )
}