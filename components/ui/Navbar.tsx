import NextLink from "next/link"
import { AppBar, Badge, Box, Button, IconButton, Link, Toolbar, Typography } from "@mui/material"
import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material"

export const Navbar = () => {
  return (
    <AppBar>
      <Toolbar>
        <NextLink href="/" passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'}>
            <Typography variant="h6">Teslo |</Typography>
            <Typography >Shop </Typography>
          </Link>
        </NextLink>
        <Box flex={1} />
        <Box sx={{ display: {xs:'none', sm:'flex'}, gap: '2rem' }}  >
          <NextLink href="/categories/men" passHref legacyBehavior>
            <Link display={'flex'} alignItems={'center'}>
              <Button>Hombres</Button>
            </Link>
          </NextLink>

          <NextLink href="/categories/women" passHref legacyBehavior>
            <Link display={'flex'} alignItems={'center'}>
              <Button>Mujeres</Button>
            </Link>
          </NextLink>

          <NextLink href="/categories/kids" passHref legacyBehavior>
            <Link display={'flex'} alignItems={'center'}>
              <Button>Niños</Button>
            </Link>
          </NextLink>
        </Box>
        <Box flex={1} />
        <IconButton>
          <SearchOutlined />
        </IconButton>
        {/* TODO: flex */}

        <NextLink href="/cart/empty" passHref legacyBehavior>
          <Link display={'flex'} alignItems={'center'}>
            <IconButton>
              <Badge badgeContent={2} color="secondary">
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Link>
        </NextLink>

        <NextLink href="/" passHref legacyBehavior>
            <Link display={'flex'} alignItems={'center'}>
              <Button>Menú</Button>
            </Link>
          </NextLink>
      </Toolbar>
    </AppBar>
  )
}
