import { CartList, OrderSummary } from "@/components/cart"
import { ShopLayout } from "@/components/layouts"
import { CreditCardOffOutlined, CreditScoreOutlined } from "@mui/icons-material";
import { Box, Button, Card, CardContent, Chip, Divider, Grid, Link, Typography } from "@mui/material"
import NextLink from 'next/link';

const OrderPage = () => {
  return (
    <ShopLayout title="Resumen de la orden n° 1235435345" pageDescription="Resumen de la orden">
      <Typography variant="h1" component="h1">
        Resumen de la orden
      </Typography>
      {/* <Chip
        sx={{ mt: 2 }}
        label="Pendiente de pago"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}
      <Chip
        sx={{ mt: 2 }}
        label="La orden ya fue pagada"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />
      <Grid container sx={{ mt: 4 }}>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card>
            <Card className="summary-card">
              <CardContent>
                <Typography variant="h1" component="h1">
                  Orden: ABC 1234
                </Typography>

                <Box display="flex" justifyContent="space-between">
                  <Typography variant="subtitle1">Dirección de entrega</Typography>

                  <NextLink href={'/checkout/address'} passHref legacyBehavior>
                    <Link underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <Typography >Homero Simpson</Typography>
                <Typography >Avenida siempre viva 742</Typography>
                <Typography >Estados Unidos</Typography>
                <Typography >Springfield</Typography>
                <Typography >+1 4 312312312</Typography>
                <Divider sx={{ my: 1 }} />

                <Box display="flex" justifyContent="end">
                  <NextLink href={'/cart'} passHref legacyBehavior>
                    <Link underline="always">
                      Editar
                    </Link>
                  </NextLink>
                </Box>
                <OrderSummary />


                <Box sx={{ mt: 3 }}>
                  {/* TODO: boton de pago */}
                  <h1>Pagar</h1>
                </Box>
              </CardContent>
            </Card>
          </Card>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

export default OrderPage