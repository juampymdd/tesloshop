import { ShopLayout } from "@/components/layouts"
import { Box, Button, FormControl, FormControlLabel, Grid, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material"

const AddressPage = () => {
  return (
    <ShopLayout title="Dirección" pageDescription="Confirmar dirección del destino">
      <Typography variant="h1" component="h1" gutterBottom>
        Dirección de entrega
      </Typography>

      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={6}>
          <TextField label="Nombre" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Apellido" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl fullWidth >
            <Select
              variant="filled"
              label="País"
              value={1}
            >
              <MenuItem value={1}>Argentina</MenuItem>
              <MenuItem value={2}>Bolivia</MenuItem>
              <MenuItem value={3}>Brasil</MenuItem>
              <MenuItem value={4}>Chile</MenuItem>
              <MenuItem value={5}>Colombia</MenuItem>
              <MenuItem value={6}>Costa Rica</MenuItem>
              <MenuItem value={7}>El Salvador</MenuItem>
              <MenuItem value={8}>Honduras</MenuItem>
              <MenuItem value={9}>México</MenuItem>
              <MenuItem value={10}>Paraguay</MenuItem>
              <MenuItem value={11}>Perú</MenuItem>
              <MenuItem value={12}>Uruguay</MenuItem>
              <MenuItem value={13}>Venezuela</MenuItem>
            </Select>

          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Provincia/Estado" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Ciudad" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Dirección" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Código Postal" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Teléfono" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField label="Email" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12} md={12}>
          <Box display="flex" justifyContent="center">
            <Button
              color="secondary"
              className="circular-btn"
              size="large"
              sx={{ width: '100%' }}
            >
              Revisar Pedido
            </Button>
          </Box>
        </Grid>

      </Grid>
    </ShopLayout>
  )
}

export default AddressPage