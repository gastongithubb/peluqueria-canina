import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-3">PeluCan</h3>
            <p className="text-gray-300">Cuidamos y embellecemos a tu mejor amigo con el cariño que se merece.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Enlaces</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="/contacto" className="text-gray-300 hover:text-white transition-colors">Contacto</Link></li>
              <li><Link href="/ubicacion" className="text-gray-300 hover:text-white transition-colors">Ubicación</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-3">Horario</h3>
            <p className="text-gray-300 mb-1">Lunes a Viernes: 9:00 - 19:00</p>
            <p className="text-gray-300 mb-1">Sábados: 9:00 - 14:00</p>
            <p className="text-gray-300">Domingos: Cerrado</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {currentYear} PeluCan. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}