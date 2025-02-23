"use client";

import React, { useState } from "react";

import {
  Heading,
  Text,
  Button,
  Icon,
  InlineCode,
  Logo,
  Input,
  Avatar,
  AvatarGroup,
  Textarea,
  PasswordInput,
  SegmentedControl,
  SmartLink,
  Dialog,
  Feedback,
  SmartImage,
  Line,
  LogoCloud,
  Background,
  Select,
  useToast,
  Card,
  Fade,
  StatusIndicator,
  DateRangePicker,
  DateRange,
  TiltFx,
  HoloFx,
  IconButton,
  TagInput,
  Switch,
  Column,
  Row,
  StyleOverlay,
  Accordion,
  Flex,
  RevealFx,
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
//import Myimage from "@/app/components/Myimage"
import { FaLeaf } from "react-icons/fa6";
import Link from "next/link";
import Myholofx from "@/app/components/Myholofx";
import Mybadge from "./components/Mybadge";

export default function page() {


    return (
        <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
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


            <RevealFx
                speed="medium"
                delay={0}
                translateY={3}
            >
                <Flex direction="row" mobileDirection="column">
                    <div style={{ width: "400px" }}>
                        <Myholofx/>
                    </div>
                    
                    <Flex wrap direction="column" padding='24'>
                    <Heading size="xl">Hi, I am Arjav</Heading>
                    <Mybadge/>
                    <Text>I am a 14 year old High schooler from India. I like to explore new things like a sailor.</Text>
                    
                    </Flex>
                </Flex>
            </RevealFx>
        </Column>
    )

}
