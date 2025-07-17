import Loader from "./Loader";
import { useState } from "react";


export default function ImgWithLoader({src, alt, className}) {
    const [isLoading, setIsLoading] = useState(true);
    return (
        <div className={`${className}`}>
            {isLoading && (
                <Loader />
            )}

            <img src={src} alt={alt} className={`w-full h-full ${isLoading ? "opacity-0" : 'opacity-100'}`} onLoad={()=> setIsLoading(false)} onError={()=> setIsLoading(false)}/>
        </div>
    )
}