import { Fade, Flex, SmartImage } from "@/once-ui/components";
import React from "react";

function Myimage(){
    return(
 
        <Flex
        data-border='playful'
        //border="brand-alpha-weak"
        position="relative"
        maxWidth={24}
        aspectRatio={0.75}
        overflow="hidden"
        
      >
        <SmartImage
            src="https://cdn.hack.pet/slackcdn/af5e31e9f4358229cee49d68786916e7.jpg"
            alt="Arjav Jain"
            data-border='playful'
            sizes="640px"
            priority={true}
            />
        
        
        
      </Flex>
    )
}

export default Myimage