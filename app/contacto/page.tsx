'use client';
import ContactButton from '@/components/ContactButton';

export default function Contacto() {
  return (
    <>
      <section className="bg-[#253D82] py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-white text-center">Contacto</h1>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-[#253D82] text-white p-8">
                <h2 className="text-2xl font-bold mb-6">Información de contacto</h2>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="font-medium">Teléfono:</p>
                      <p>+34 912 345 678</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div>
                      <p className="font-medium">Email:</p>
                      <p>luzcaste.a@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <div>
                      <p className="font-medium">Horario:</p>
                      <p>Lunes a Viernes: 9:00 - 19:00</p>
                      <p>Sábados: 9:00 - 14:00</p>
                      <p>Domingos: Cerrado</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Síguenos en:</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </a>
                    <a href="#" className="hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Agenda tu turno</h2>
                
                <div className="calendar-container w-full h-96 md:h-full">
                  <iframe 
                    src="https://calendar.google.com/calendar/embed?src=a05292bd322b723f3a258dae8b1270d898080fbc44fa1140ab2104e1428a6f26%40group.calendar.google.com&ctz=America%2FArgentina%2FCordoba" 
                    className="w-full h-96 md:h-128"
                    frameBorder="0" 
                    scrolling="no"
                  ></iframe>
                </div>
                
                <div className="mt-6">
                  <button 
                    onClick={() => window.open('https://calendar.google.com/calendar/u/0?cid=YTA1MjkyYmQzMjJiNzIzZjNhMjU4ZGFlOGIxMjcwZDg5ODA4MGZiYzQ0ZmExMTQwYWIyMTA0ZTE0MjhhNmYyNkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t', '_blank')}
                    className="w-full bg-[#253D82] hover:bg-[#4F61A2] text-white font-medium py-3 px-4 rounded-md transition-colors flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    Reservar turno
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactButton />
    </>
  );
}