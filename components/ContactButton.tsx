// /components/ContactButton.tsx
import React from 'react';

export default function ContactButton() {
  // URL del Google Form o página de contacto
  const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSf-nsNNlvOAWZGg_bA4e-e5b_iPpHGPw20IrObhDqBxoKafbw/viewform?usp=sharing";
  
  return (
    <a 
      href={googleFormUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-[#253D82] hover:bg-[#4f61a2] text-white font-medium rounded-full p-4 shadow-lg transition-transform hover:scale-105 z-20"
      aria-label="Reservar cita"
    >
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
        </svg>
        <span>Reservar</span>
      </div>
    </a>
  );
}