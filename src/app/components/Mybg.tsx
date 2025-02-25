import { Background, Fade, Flex, SmartImage } from "@/once-ui/components";
import React from "react";

function Mybg(){
    return(
        <div>
        <Background
                      mask={{
                        x: 0,
                        y: 48,
                      }}
                      position="absolute"
                    />
                    <Background
                      mask={{
                        x: 80,
                        y: 0,
                        radius: 200,
                      }}
                      position="absolute"
                      gradient={{
                        display: true,
                        tilt: -35,
                        height: 50,
                        width: 75,
                        x: 100,
                        y: 40,
                        colorStart: "accent-solid-weak",
                        colorEnd: "static-transparent",
                      }}
                    />
                    <Background
                      mask={{
                        x: 100,
                        y: 0,
                        radius: 100,
                      }}
                      position="absolute"
                      gradient={{
                        display: true,
                        opacity: 100,
                        tilt: -35,
                        height: 20,
                        width: 120,
                        x: 120,
                        y: 35,
                        colorStart: "brand-solid-strong",
                        colorEnd: "static-transparent",
                        
                      }}
                      grid={{
                        display: true,
                        width: "0.25rem",
                        color: "neutral-alpha-medium",
                        height: "0.25rem",
                      }}

                    />
        </div>
    )
}

export default Mybg