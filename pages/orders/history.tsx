import { ShopLayout } from '@/components/layouts'
import { Typography, Grid, Chip, Link } from '@mui/material';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import NextLink from 'next/link';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 100 },
  { field: 'fullName', headerName: 'Nombre Completo', width: 300 },
  {
    field: 'paid',
    headerName: 'Pagado',
    description: 'Muestra descripción de si está pagada la orden o no',
    width: 200,
    renderCell: (params: GridValueGetterParams) => 
      (<>
      {
        params.row.paid
        ? <Chip color="success" label="Pagada" variant="outlined" />
        : <Chip color="error" label="No pagada" variant="outlined" />
      }
      </>
      )
  },
  {
    field: 'Orders',
    headerName: 'Ordenes',
    description: 'Muestra las ordenes realizadas por el cliente',
    width: 200,
    sortable: false,
    renderCell: (params: GridValueGetterParams) => 
      (<>
      <NextLink href={`/orders/${params.row.id}`} passHref legacyBehavior>
        <Link underline='always' display={'flex'} alignItems={'center'} className='' sx={{gap:1}}>
          Ver Orden
        </Link>
      </NextLink>
      </>
      )
  }

]

const row = [
  {
    id: 1,
    fullName: 'Juan Perez',
    paid: true
  },
  {
    id: 2,
    fullName: 'Marta Lopez',
    paid: false
  },
  {
    id: 3,
    fullName: 'Pedro Gonzalez',
    paid: true
  },
  {
    id: 4,
    fullName: 'Mirta Sanchez',
    paid: true
  },
  {
    id: 5,
    fullName: 'Fernando Rodriguez',
    paid: true
  },
  {
    id: 6,
    fullName: 'Manuel Fernandez',
  },
  {
    id: 7,
    fullName: 'Fatima Lapenta',
  },
  {
    id: 8,
    fullName: 'Ricardo Martinez',
  },
  {
    id: 9,
    fullName: 'Diana Ocampo',
  },
  {
    id: 10,
    fullName: 'Victoria Almeida',
  },
  {
    id: 11,
    fullName: 'Sofia Nunez',
  },
  {
    id: 12,
    fullName: 'Martin Figueroa',
  },
  {
    id: 13,
    fullName: 'Julieta Peralta',
  }
]

const HistoryPage = () => {
  return (
    <ShopLayout title="Historial de ordenes" pageDescription="Historial de ordenes del cliente">
      <Typography variant="h1" component="h1">
        Historial de ordenes
      </Typography>

      <Grid container>
        <Grid item xs={12} sx={{ height: 650, width: '100%' }}>
          <Typography variant="h2" component="h2">
            Ordenes
          </Typography>
          <DataGrid
            rows={row}
            columns={columns}
            pageSize={10}
            rowsPerPageOptions={[10]}
          />

        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default HistoryPage