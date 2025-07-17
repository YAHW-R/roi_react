
export default function Error({error}) {
    return(
        <div className="w-full h-full flex justify-center items-center">
            <h1 className="text-4xl">
                Error: {error}
            </h1>
        </div>
    )
}