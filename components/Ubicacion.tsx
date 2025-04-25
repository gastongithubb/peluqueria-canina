// /components/Ubicacion.tsx
import React from 'react';

// Definimos la interfaz para los datos de ubicación
interface UbicacionData {
  direccion: string;
  ciudad: string;
  provincia: string;
  telefono: string;
  email: string;
}

export default function Ubicacion() {
  // Datos de la ubicación de la peluquería
  const ubicacion: UbicacionData = {
    direccion: '564 Roque Saenz Peña',
    ciudad: 'Monte Cristo',
    provincia: 'Cordoba',
    telefono: '+123456789',
    email: 'luzcaste.a@gmail.com',
  };

  return (
    <div className="bg-gray-50">
      <section className="bg-[#253D82] py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center">Ubicación</h1>
        </div>
      </section>
      
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                {/* Información de contacto */}
                <div className="md:w-1/2 space-y-4">
                  <h2 className="text-xl font-bold text-gray-800 mb-4">Encuéntranos en</h2>
                  
                  {/* Dirección */}
                  <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#253D82] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="text-gray-600">{ubicacion.direccion}</p>
                    <p className="text-gray-600">{ubicacion.ciudad}, {ubicacion.provincia}</p>
                  </div>
                  </div>
                  
                  {/* Contacto */}
                  <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#253D82] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-gray-600">{ubicacion.telefono}</p>
                  </div>
                  
                  <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#253D82] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="text-gray-600">{ubicacion.email}</p>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start pt-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#253D82] mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-sm text-gray-600">Lun-Vie: 9:00-19:00</p>
                    <p className="text-sm text-gray-600">Sáb: 9:00-14:00</p>
                    <p className="text-sm text-gray-600">Dom: Cerrado</p>
                  </div>
                  </div>
                </div>
                
                {/* Mapa */}
                <div className="md:w-1/2 mt-4 md:mt-0">
                  <div className="bg-gray-100 p-2 rounded-lg h-full">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3407.4872669622914!2d-63.9558511!3d-31.345530399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432ebe934b51f07%3A0x332de624e6466a04!2sRoque%20Saenz%20Pe%C3%B1a%20564%2C%20X5125%20Monte%20Cristo%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1745546461659!5m2!1ses-419!2sar" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                  </iframe>
                  </div>
                </div>
                </div>
              
              {/* Cómo llegar - Versión concisa */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Cómo llegar</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium text-white">Transporte público</p>
                    <p className="text-sm text-gray-600">Metro: Línea 1, estación &quot;Ejemplo&quot;</p>
                    <p className="text-sm text-gray-600">Bus: Líneas 14, 27 y 45</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">En coche</p>
                    <p className="text-sm text-gray-600">Parking público a 100m (Parking &quot;Central&quot;)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}