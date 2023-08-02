import { FC } from "react"
import { Slide } from "react-slideshow-image"
import styles from './ProductSlideshow.module.css'

import 'react-slideshow-image/dist/styles.css'

interface Props {
  images: string[]
}

export const ProductSlideshow:FC<Props> = ({ images }) => {
  return (
    <Slide
      easing="ease"
      transitionDuration={500}
      indicators={true}
    >
      {
        images.map(( image ) => {
          console.log(image)
          const url = `/products/${image}`;
          return (
            <div key={image} className={styles['each-slide']}>
              <div style={{
                  backgroundImage: `url(${url})`,
                }}>
              </div>
            </div>
          )
        })
      }
        
    </Slide>
  )
}
