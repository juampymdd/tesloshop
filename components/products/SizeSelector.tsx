import { ISize } from "@/interfaces";
import { Box, Button } from "@mui/material";
import { FC } from "react";

interface Props {
  selectedSize: ISize;
  sizes: ISize[];
}

export const SizeSelector:FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {
        sizes.map(size => (
          <Button 
            key={ size }
            size="small"
            color={ size === selectedSize ? 'primary' : 'info' }
          >
            { size }
          </Button>
        ))
      }
    </Box>
  )
}
