import { Box, Button, CardActionArea, CardMedia, Grid, Link, Typography } from '@mui/material';
import { initialData } from '../../database/products';
import NextLink from 'next/link';
import { ItemCounter } from '../ui';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { FC } from 'react';
const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2]
]

interface Props {
  editable?: boolean;
}

export const CartList: FC<Props> = ({ editable = false }) => {

  return (
    <>
      {
        productsInCart.map((product, index) => (
          <Grid container key={product.slug} spacing={2} sx={{ mb: 1 }}>
            <Grid item xs={3}>
              {/* TODO: llevar a la página del producto */}
              <NextLink href={"/product/slug"} passHref legacyBehavior>
                <Link>
                  <CardActionArea>
                    <CardMedia
                      image={`/products/${product.images[0]}`}
                      component={'img'}
                      sx={{ borderRadius: '5px' }}
                    >

                    </CardMedia>
                  </CardActionArea>
                </Link>
              </NextLink>
            </Grid>
            <Grid item xs={7}>
              <Box display="flex" flexDirection="column">
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>{product.title}</Typography>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Talle: <strong>M</strong></Typography>
                {
                  editable
                    ? <ItemCounter count={1} />
                    : <Typography variant="body1" sx={{ fontWeight: 'bold' }}>Cantidad: <strong>1</strong></Typography>
                }


              </Box>
            </Grid>
            <Grid item xs={2} display="flex" alignItems="center" flexDirection="column">
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>${product.price}</Typography>
              {
                editable
                  ? (
                    <Button variant="text" color="secondary">
                      <DeleteOutlineIcon /> Remover
                    </Button>)
                  : null
              }

            </Grid>
          </Grid>
        )
        )
      }
    </>
  )
}
