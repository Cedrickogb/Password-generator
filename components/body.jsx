import React, { useState } from 'react';

export default function Body() {
  const [password, setPassword] = useState('');
  const [isBouncing, setIsBouncing] = useState(false);


  const generatePassword = () => {
    // Logique pour générer le mot de passe ici
    // Par exemple, vous pouvez utiliser une combinaison de lettres, chiffres et symboles

    // Exemple simple de génération de mot de passe avec 8 caractères aléatoires
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@abcdefghijklmnopqrstuvwxyz@0123456789@';
    let result = '';
    const length = 8;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    setIsBouncing(true);
    setPassword(result);

    // Réinitialisez l'animation après un certain délai (par exemple, 1 seconde)
    setTimeout(() => {
      setIsBouncing(false);
    }, 1500);

    setPassword(result);
  };

  return (
    <div className={`mt-4 ${isBouncing ? 'animate-bounce' : ''}`}>
        <div className="flex flex-col items-center justify-center space-y-4 xl:m-10 mx-8 sm:mx-32 lg:mx-72 xl:mx-96 mt-32 p-8 border shadow-xl rounded-xl">
            <h2 className="text-3xl text-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-lime-600">Password Generator</h2>
            {
                password=="" &&
                    <div>
                        <button onClick={generatePassword} className="bg-lime-600 py-1.5 px-4 rounded-xl text-white  hover:bg-lime-700 transition-all ease-in-out duration-500">Generate</button>
                    </div>
            }
            {
                password!="" &&
                    <div className='flex flex-col items-center justify-center space-y-4'>
                        <p className='text-center'>The password is: <span className='text-gray-600 italic text-xl'> {password}</span></p>
                        <button onClick={generatePassword} className="bg-lime-600 py-1.5 px-4 rounded-xl text-white  hover:bg-lime-700 transition-all ease-in-out duration-500">Regenerate</button>
                    </div>
            }
        </div>
    </div>
  );
}
