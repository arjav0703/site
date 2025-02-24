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
import Myholofx from "@/app/components/Myholofx";
import Mybadge from "./components/Mybadge";
import Mybooks from "./components/Mybooks";
import Mynav from "./components/Mynav";

export default function page() {

    return (
        <Column fillWidth paddingY="80" horizontal="center" flex={1}>
            <Mynav/>

            <RevealFx
                speed="medium"
                delay={0}
                translateY={3}
                marginTop="80"
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
            <Mybooks/>
            
        </Column>
    )

}
