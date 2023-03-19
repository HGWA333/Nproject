/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import NavBar from "./NavBar";
import ActionCard from "./ActionCard";
import EditProfile from "./EditProfile";
import ProfileCard from "./ProfileCard";
import FormCheckout from "./FormCheckout";
import { View } from "@aws-amplify/ui-react";
export default function Frame1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="889px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Frame1")}
      {...rest}
    >
      <NavBar
        display="flex"
        gap="20px"
        direction="row"
        width="1440px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0px"
        left="0px"
        padding="24px 32px 24px 32px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "NavBar")}
      ></NavBar>
      <ActionCard
        display="flex"
        gap="0"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="93px"
        left="172px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ActionCard36473286")}
      ></ActionCard>
      <ActionCard
        display="flex"
        gap="0"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="93px"
        left="570px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ActionCard36473308")}
      ></ActionCard>
      <ActionCard
        display="flex"
        gap="0"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="center"
        alignItems="flex-start"
        position="absolute"
        top="93px"
        left="955px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ActionCard36473330")}
      ></ActionCard>
      <EditProfile
        display="flex"
        gap="16px"
        direction="column"
        width="640px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="-667px"
        left="91px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "EditProfile")}
      ></EditProfile>
      <ProfileCard
        display="flex"
        gap="24px"
        direction="column"
        width="320px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="-581px"
        left="870px"
        padding="24px 24px 24px 24px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "ProfileCard")}
      ></ProfileCard>
      <FormCheckout
        display="flex"
        gap="24px"
        direction="row"
        width="1160px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="89px"
        left="1613px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "FormCheckout")}
      ></FormCheckout>
    </View>
  );
}
