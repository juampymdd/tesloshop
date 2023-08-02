import { Grid } from "@mui/material"
import { FC } from "react"
import { IProduct } from '../../interfaces/products';
import { ProductCard } from "./ProductCard";

interface Props {
  products: IProduct[]
}
export const ProductList: FC<Props> = ({ products }) => {
  return (
    /* The code you provided is rendering a list of products using the Material-UI Grid component. */
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard product={product} key={product.slug} />
      ))}
    </Grid>

  )
}
