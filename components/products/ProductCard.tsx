import { Box, Card, CardActionArea, CardMedia, Grid, Link, Typography } from "@mui/material"
import { IProduct } from "@/interfaces"
import { FC, useMemo, useState } from "react"
import NextLink from 'next/link';

interface Props {
  product: IProduct
}
export const ProductCard: FC<Props> = ({ product }) => {

  const [isHovered, setisHovered] = useState(false)
  const productImage = useMemo(() => {
    return isHovered ? product.images[1] : product.images[0]
  }, [isHovered])
  return (
    <Grid
      item key={product.slug} xs={6} sm={4}
      onMouseEnter={() => setisHovered(true)}
      onMouseLeave={() => setisHovered(false)}
    >
      <Card>
        <NextLink href={'/product/slug'} passHref legacyBehavior>
          <Link>
            <CardActionArea>
              <CardMedia
                className="fadeIn"
                component="img"
                image={`products/${productImage}`}
                onLoad={() => console.log('loaded')}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>
      <Box sx={{ mt: 1 }} className="fadeIn">
        <Typography fontWeight={700}>
          {product.title}
        </Typography>
        <Typography fontWeight={500}>
          ${product.price}
        </Typography>
      </Box>
    </Grid>


  )
}
