import { SmartImage } from "@/once-ui/components";
import React from "react";
import { HoloFx } from "@/once-ui/components";
import { Fade } from "@/once-ui/components";
import Myimage from "./Myimage";

function Myholofx(){
    return(
 
        <HoloFx
        border="neutral-alpha-medium"
        position="relative"
        maxWidth={24}
        aspectRatio={0.75}
        radius="l"
        light={{
          blending: 'color-dodge',
          opacity: 30
        }}
        burn={{
          blending: 'color-dodge',
          opacity: 30
        }}
        texture={{
          blending: 'color-dodge',
          image: '/images/textures/foil.jpg',
          opacity: 10
        }}
      >
        <Myimage/>
        <Fade
          to="top"
          pattern={{
            display: true,
            size: '4'
          }}
          position="absolute"
          bottom="0"
          height={10}
          horizontal="center"
          vertical="end"
          paddingBottom="32"
          textVariant="display-default-xs"
        >
          
        </Fade>
      </HoloFx>
    );
}

export default Myholofx