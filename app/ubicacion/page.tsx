// /app/ubicacion/page.tsx
import React from 'react';
import Ubicacion from '@/components/Ubicacion';
import ContactButton from '@/components/ContactButton';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ubicación | Peluquería Canina',
  description: 'Encuentra nuestra peluquería canina y cómo llegar fácilmente a nuestras instalaciones',
};

export default function UbicacionPage() {
  return (
    <>
      <Ubicacion />
      <ContactButton />
    </>
  );
}