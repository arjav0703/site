import { Badge, Flex, Icon, LetterFx } from "@/once-ui/components";
import React from "react";

function Mybadge(){
    return(
 
        <Flex wrap gap="xs" marginTop="s" marginBottom="s">

            <Badge
            arrow={false}
            effect={false}
            icon="security"
            >
                <span
                    style={{
                        fontFamily: 'var(--font-family-code)'
                    }}
                    >
                    <LetterFx
                        speed="medium"
                        trigger="hover"
                        charset={[
                        'X',
                        '@',
                        '$',
                        'a',
                        'H',
                        'z',
                        'o',
                        '0',
                        'y',
                        '#',
                        '?',
                        '*',
                        '0',
                        '1',
                        '+'
                        ]}
                    >
                        Ethical Hacker
                    </LetterFx>
                </span>
            </Badge>
            <Badge
            href="https://hackclub.com"
            icon="person"
            arrow={false}
            //effect={false}
            >

                Hack Clubber
            </Badge>
            <Badge
            icon="HiOutlineVideoCamera"
            arrow={false}
            effect={false}
            >
            Photographer
            </Badge>
            <Badge
            icon="HiOutlineVideoCamera"
            arrow={false}
            effect={false}
            >
            Linux User
            </Badge>
            

        </Flex>
    );
}

export default Mybadge