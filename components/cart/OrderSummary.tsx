import { Grid, Typography } from "@mui/material"

export const OrderSummary = () => {
  return (
    <Grid container>
      <Grid item xs={ 6 }>
        <Typography>N° Productos</Typography>
      </Grid>
      <Grid item display="flex" justifyContent="end" xs={ 6 }>
        <Typography>3 items</Typography>
      </Grid>
      <Grid item xs={ 6 }>
        <Typography>Subtotal</Typography>
      </Grid>
      <Grid item xs={ 6 } display="flex" justifyContent="end">
        <Typography>{ `$${155.36}`}</Typography>
      </Grid>
      <Grid item xs={ 6 }>
        <Typography>Impuestos (15%)</Typography>
      </Grid>
      <Grid item xs={ 6 } display="flex" justifyContent="end">
        <Typography>{ `$${34.34}`}</Typography>
      </Grid>
      <Grid item xs={ 6 } sx={{mt:2}}>
        <Typography variant="subtitle1">Total</Typography>
      </Grid>
      <Grid item xs={ 6 } sx={{mt:2}} display="flex" justifyContent="end">
        <Typography>{ `$${185.34}`}</Typography>
      </Grid>

    </Grid>
  )
}
