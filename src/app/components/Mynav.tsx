import { Button, Row, Text } from "@/once-ui/components";
import Link from "next/link";
import React from "react";

function Mynav(){
    return(
 
        <Row position="fixed" top="0" fillWidth horizontal="center" zIndex={3}>
        <Row
          data-border="rounded"
          horizontal="space-between"
          maxWidth="l"
          paddingRight="64"
          paddingLeft="32"
          paddingY="20"
        >
          <Link href={'https://jain.arjav.tech'}><Text>Arjav Jain</Text></Link>
          <Row gap="12" hide="s">
            <Button
              href="https://vidisha.hackclub.com"
              size="s"
              label="Club"
              prefixIcon="HiOutlineUserGroup"
              weight="default"
              variant="tertiary"
            />
            <Button
              href="https://github.com/arjav0703"
              prefixIcon="github"
              size="s"
              label="GitHub"
              weight="default"
              variant="tertiary"
            />

          </Row>
          
        </Row>
  </Row>
    )
}

export default Mynav