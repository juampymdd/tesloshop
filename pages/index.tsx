import { Typography } from '@mui/material';
import { ShopLayout } from '../components/layouts';
import { initialData } from '@/database/products';
import { ProductList } from '@/components/products';
import { IProduct } from '@/interfaces';

export default function Home() {
  return (
    <ShopLayout title="Teslo-Shop - Home" pageDescription="Encuentra los mejores productos de tesloshop aquí">
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Tienda</Typography>
      <ProductList products={initialData.products as IProduct[]} />
    </ShopLayout>
  )
}
