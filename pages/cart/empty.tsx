import { ShopLayout } from "@/components/layouts"
import { Box, Link, Typography } from "@mui/material"
import RemoveShoppingCartOutlinedIcon from '@mui/icons-material/RemoveShoppingCartOutlined';
import NextLink from 'next/link';
const EmptyPage = () => {
  return (
    <ShopLayout title="Carrito vacio" pageDescription="No hay articulos en el carrito">
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'calc(100vh - 200px)'}
        sx={{ flexDirection: { xs: 'column', md: 'row' } }}
      >
        <RemoveShoppingCartOutlinedIcon sx={{ fontSize: { xs: '10rem', md: '15rem' } }} />
        <Box display='flex' flexDirection="column" alignItems='center'>
          <Typography  align={'center'} gutterBottom>Su carrito está vacio</Typography>
          <NextLink href="/" passHref legacyBehavior>
            <Link typography='h4' color="secondary">
              Regresar
            </Link>
          </NextLink>
        </Box>


      </Box>
    </ShopLayout>
  )
}

export default EmptyPage