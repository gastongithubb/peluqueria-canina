'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#253D82] text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center h-24">
        <Link href="/" className="flex items-center">
          <div className="flex items-center">
           
            
            {/* Text part */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold text-white">PELUQUERÍA CANINA</h1>
              <p className="text-sm font-medium text-white">MONTE CRISTO · CÓRDOBA</p>
            </div>
          </div>
        </Link>

        {/* Menú para móvil */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded hover:bg-[#4f61a2] transition-colors"
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Menú para escritorio */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="/" className="font-medium hover:text-white transition-colors">Inicio</Link>
          <Link href="/contacto" className="font-medium hover:text-white transition-colors">Contacto</Link>
          <Link href="/ubicacion" className="font-medium hover:text-white transition-colors">Ubicación</Link>
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {isMenuOpen && (
        <nav className="md:hidden bg-[#253D82] px-4 py-2 animate-fadeIn">
          <ul className="flex flex-col">
            <li>
              <Link href="/" 
                className="block py-3 hover:text-white transition-colors border-b border-[#253D82]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/contacto" 
                className="block py-3 hover:text-white transition-colors border-b border-[#253D82]" 
                onClick={() => setIsMenuOpen(false)}
              >
                Contacto
              </Link>
            </li>
            <li>
              <Link href="/ubicacion" 
                className="block py-3 hover:text-white transition-colors" 
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicación
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}