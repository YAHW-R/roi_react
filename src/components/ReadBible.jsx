
function ReadBible({link}) {
  return (
    <div>
      <p className="text-center text-xl">¿Quieres leer la biblia?</p>
      <p className="text-center text-xl">Ve a este link</p>
      
      <button className="block bg-s-blue text-b-gray w-[100px] mx-auto mt-5 mb-7 p-1 border-4 border-s-blue rounded-2xl transition delay-75 duration-300 ease-in-out hover:bg-b-gray hover:text-white">
        <a href={link} target="_blank">leer</a>
      </button>
    </div>
  );
}

export default ReadBible;