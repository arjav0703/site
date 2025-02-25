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

import Mybadge from "./components/Mybadge";
import Mybooks from "./components/Mybooks";
import Mynav from "./components/Mynav";
import Myimage from "./components/Myimage";
import Mybg from "./components/Mybg";

export default function page() {

    return (
        <Column fillWidth paddingY="40" horizontal="center" flex={1}>
            <Mynav/>

            <Column border="neutral-alpha-medium"  marginY='104' paddingX="40" radius="l" shadow="xl" position="relative" > <Mybg/>
                <TiltFx position="relative" marginTop="80" >
                    <Flex direction="row" mobileDirection="column">
                        <div style={{ width: "400px" }}>
                            <Myimage/>
                        </div>
                        
                        <Flex wrap direction="column" padding='24'>
                        <Heading size="xl">Hi, I am Arjav</Heading>
                        <Mybadge/>
                        <Text>I am a 14 year old High schooler from India. I like to explore new things like a sailor.</Text>
                        
                        </Flex>
                    </Flex>
                
                </TiltFx>
                <Mybooks/>
            </Column>
            
        </Column>
    )

}
