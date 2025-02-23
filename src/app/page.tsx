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
} from "@/once-ui/components";
import { CodeBlock, MediaUpload } from "@/once-ui/modules";
import Myimage from "@/app/components/Myimage"
import { FaLeaf } from "react-icons/fa6";
export default function page() {

    return (
        <Column fillWidth paddingY="80" paddingX="s" horizontal="center" flex={1}>
            <Flex direction="row" mobileDirection="column">
                <div style={{ width: "400px" }}>
                    <Myimage/>
                </div>
                <Flex wrap direction="column" padding='24'>
                <Heading size="xl">Hi, I am Arjav</Heading>
                </Flex>
            </Flex>
        </Column>
    )

}
