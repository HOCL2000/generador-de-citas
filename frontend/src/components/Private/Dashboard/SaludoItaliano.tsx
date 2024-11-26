import React, { useState, useEffect } from 'react';

const SaludoItaliano: React.FC = () => {
  const [fechaActual, setFechaActual] = useState<Date>(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setFechaActual(new Date());
    }, 60000);
    return () => clearInterval(intervalo); 
  }, []);

  const horaActual: number = fechaActual.getHours();

  const obtenerSaludo = (): string => {
    if (horaActual >= 5 && horaActual < 12) {
      return '☀️ Buongiorno, Audrey'; // Buenos días
    } else if (horaActual >= 12 && horaActual < 18) {
      return '🌞 Buon pomeriggio, Audrey'; // Buenas tardes
    } else {
      return '🌜 Buonasera, Audrey'; // Buenas noches
    }
  };

  const obtenerFecha = (): string => {
    const opciones: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return fechaActual.toLocaleDateString('it-IT', opciones);
  };

  return (
    <div className="w-full hidden lg:flex items-center justify-between py-4 border-b  px-2">
      <h1 className='font-medium'>{obtenerSaludo()}</h1>
      <p className='text-zinc-700 text-sm'>{obtenerFecha()}</p>
    </div>
  );
};

export default SaludoItaliano;
