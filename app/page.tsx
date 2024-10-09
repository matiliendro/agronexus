import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-green-100 p-4">
      <h1 className="text-4xl font-bold mb-4 text-green-800">Bienvenido a AgroBaires</h1>
      <p className="text-xl mb-8 text-green-700">Conectando productores y consumidores de productos agrícolas</p>
      <div className="space-x-4">
        <Link href="/login">
          <Button className="bg-green-500 text-white hover:bg-green-600">Iniciar sesión</Button>
        </Link>
        <Link href="/register">
          <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-100">Registrarse</Button>
        </Link>
      </div>
    </div>
  );
}