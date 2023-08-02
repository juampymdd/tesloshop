import { Box, IconButton, Typography } from '@mui/material';
import { FC } from 'react';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
interface Props {
  count: number;
  onAdd: () => void;
  onRemove: () => void;
}

export const ItemCounter: FC<Props> = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
    >
      <IconButton>
        <RemoveCircleOutlineIcon />
      </IconButton>
      <Typography sx={{ width: 40, textAlign: 'center' }}>1</Typography>
      <IconButton>
        <AddCircleOutlineIcon />
      </IconButton>
    </Box>
  )
}
