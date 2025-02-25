import { Fade, Flex, SmartImage } from "@/once-ui/components";
import React from "react";

function Myimage(){
    return(
 
        <Flex
        //border="brand-alpha-weak"
        position="relative"
        maxWidth={24}
        aspectRatio={0.75}
        overflow="hidden"
      >
        <SmartImage
            src="https://cdn.hack.pet/slackcdn/af5e31e9f4358229cee49d68786916e7.jpg"
            alt="Arjav Jain"

            />
        <Fade
          fillWidth
          position="absolute"
          top="0"
          to="bottom"
          height={12}
          pattern={{
            display: true,
            size: '2'
          }}
        />
        <Fade
          fillWidth
          position="absolute"
          bottom="0"
          to="top"
          height={12}
          pattern={{
            display: true,
            size: '2'
          }}
        />
      </Flex>
    )
}

export default Myimage