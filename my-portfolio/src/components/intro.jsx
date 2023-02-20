import React from 'react';

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-5xl dark:text-white mb-1 md:mb-3 font-bold">Dominic Labuguen</h1>
         <p className="text-base md:text-xl mb-3 font-medium">Student, Full Stack Developer, Musician</p>
         <p className="text-sm max-w-xl mb-6 font-bold">
            Nice to meet you! 
            <br />
            {/* add something useful here lol{' '} */}
            <a
               href=" " //add something here
               target="_blank"
               className="text-cyan-600 hover:underline underline-offset-2 decoration-2 decoration-red-600"
               rel="noreferrer noopener"
            >
               {/* add a link here */}
            </a>{' '}
            {/* add something useful here */}
         </p>
      </div>
   )
}

export default Intro;