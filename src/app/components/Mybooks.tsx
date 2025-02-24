import { SmartImage, Text, Column, HoloFx, Fade, Row , Flex, TiltFx, Background} from "@/once-ui/components";
import React from "react";
//import Myimage from "./Myimage";


const book1 = {
    name:"What's your Dream",
    photo:'https://cdn.kobo.com/book-images/387d7ca7-e849-4116-bfc1-67a6bd362ab1/1200/1200/False/what-s-your-dream-1.jpg'
}

const book2 = {
    name:'Atomic Habits',
    photo: 'https://cdn2.penguin.com.au/covers/original/9781473565425.jpg'
}

function Mybooks(){
    return(
        
        <Column 
            gap="16"
            marginY="80"
            border="neutral-alpha-weak"
            paddingY="32"
            paddingX="80"
            background="neutral-alpha-weak"
            //solid="neutral-weak"
            radius="l"
            shadow="xl"
        >  
            <Row>
                <Text variant="display-default-xs">Books I am reading in present</Text>
            </Row>

            <Row 
                gap="24"
                mobileDirection="column"                
            >
            <div style={{ width: "110px" }}>
                <HoloFx
                    border="neutral-alpha-weak"
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
                        <SmartImage
                            src={book1.photo}
                            alt="What's your Dream"
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="fill"
                        />
                    <Fade
                        to="top"
                        pattern={{
                        display: true,
                        size: '4'
                        }}
                        position="absolute"
                        bottom="0"
                        height={8}
                        horizontal="center"
                        vertical="end"
                        paddingBottom="4"
                        paddingLeft="8"
                        textVariant="body-default-xs"
                    >
                        {book1.name}
                    </Fade>
            </HoloFx>
            </div>
            
            <div style={{ width: "110px" }}>
                <HoloFx
                    border="neutral-alpha-weak"
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
                        <SmartImage
                            src='https://cdn2.penguin.com.au/covers/original/9781473565425.jpg'
                            alt="James Clear"
                            aspectRatio="16/9"
                            radius="l"
                            objectFit="cover"
                        />
                    <Fade
                        to="top"
                        pattern={{
                        display: true,
                        size: '4'
                        }}
                        position="absolute"
                        bottom="0"
                        height={8}
                        horizontal="center"
                        vertical="end"
                        paddingBottom="12"
                        textVariant="body-default-xs"
                    >
                        {book2.name}
                    </Fade>
            </HoloFx>
            </div>
            </Row>
    </Column>


    );
}

export default Mybooks