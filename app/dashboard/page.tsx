"use client"

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import ProductList from '@/components/ProductList';
import { Product } from '@/types/product';

export default function Dashboard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    // Aquí se cargarían los productos desde la API
    const mockProducts: Product[] = [
      { id: '1', name: 'Manzanas', category: 'Frutas', price: 100, producer: 'Productor A' },
      { id: '2', name: 'Zanahorias', category: 'Verduras', price: 50, producer: 'Productor B' },
      { id: '3', name: 'Naranjas', category: 'Frutas', price: 80, producer: 'Productor C' },
    ];
    setProducts(mockProducts);
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === '' || product.category === category)
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Panel de Control</h1>
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>Buscar Productos</CardTitle>
        </CardHeader>
        <CardContent className="flex space-x-2">
          <Input
            placeholder="Buscar productos..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Select onValueChange={setCategory}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Categoría" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">Todas</SelectItem>
              <SelectItem value="Frutas">Frutas</SelectItem>
              <SelectItem value="Verduras">Verduras</SelectItem>
            </SelectContent>
          </Select>
          <Button>Buscar</Button>
        </CardContent>
      </Card>
      <ProductList products={filteredProducts} />
    </div>
  );
}