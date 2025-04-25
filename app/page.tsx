import Image from 'next/image';
import Link from 'next/link';
import ContactButton from '@/components/ContactButton';

export default function Home() {
  const servicios = [
    {
      titulo: "Baño - con corte de uñas (Opcional)",
      descripcion: "Servicio completo de baño con champús premium y secado profesional.",
      imagen: "/images/servicios/banio.jpg"  // Fixed path
    },
    {
      titulo: "Baño con corte sanitario - con corte de uñas (Opcional)",
      descripcion: "Cortes adaptados a cada raza y preferencias del dueño.",
      imagen: "/images/servicios/corte.jpg"  // Fixed path
    },
    {
      titulo: "Baño con deslanado - con corte de uñas (Opcional)",
      descripcion: "Corte y limado de uñas para la comodidad y salud de tu mascota.",
      imagen: "/images/servicios/unias.jpg"  // Fixed path
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full">
        <div className="absolute inset-0">
          <Image 
            src="/images/hero.jpg" 
            alt="Perro feliz después de peluquería" 
            fill 
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Logo en la esquina superior izquierda */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <div className="relative w-34 h-34 md:w-32 md:h-32">
            <Image 
              src="/images/logo.png" 
              alt="Logo de la peluquería" 
              fill 
              className="object-contain"
              priority
            />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            La mejor peluquería canina
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl">
            Cuidamos a tu mascota con el amor y profesionalismo que merece
          </p>
          <Link 
            href="/contacto" 
            className="bg-[#253D82] hover:bg-[#4F61A2] text-white font-bold py-3 px-6 rounded-lg shadow-md transition-colors"
          >
            Reserva ahora
          </Link>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Nuestros Servicios
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicios.map((servicio, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="relative h-48">
                  <Image 
                    src={servicio.imagen} 
                    alt={servicio.titulo}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{servicio.titulo}</h3>
                  <p className="text-gray-600">{servicio.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Lo que dicen nuestros clientes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;El mejor servicio para mi perrito. Ha quedado precioso y se nota que lo trataron con mucho cariño. Totalmente recomendado.&ldquo;
              </p>
              <p className="font-medium text-gray-800">- María García</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Excelente atención y servicio profesional. Mi Toby estaba nervioso pero lo trataron con mucha paciencia. Volveremos pronto.&ldquo;
              </p>
              <p className="font-medium text-gray-800">- Carlos Rodríguez</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-yellow-400 flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;Desde que llevamos a Luna a esta peluquería, ha cambiado completamente. El personal es muy amable y siempre queda preciosa.&ldquo;
              </p>
              <p className="font-medium text-gray-800">- Ana Martínez</p>
            </div>
          </div>
        </div>
      </section>

      {/* Botón de contacto flotante */}
      <ContactButton />
    </>
  );
}