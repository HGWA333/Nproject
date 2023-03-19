/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { NavBarProps } from "./NavBar";
import { ActionCardProps } from "./ActionCard";
import { EditProfileProps } from "./EditProfile";
import { ProfileCardProps } from "./ProfileCard";
import { FormCheckoutProps } from "./FormCheckout";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type Frame1OverridesProps = {
    Frame1?: PrimitiveOverrideProps<ViewProps>;
    NavBar?: NavBarProps;
    ActionCard36473286?: ActionCardProps;
    ActionCard36473308?: ActionCardProps;
    ActionCard36473330?: ActionCardProps;
    EditProfile?: EditProfileProps;
    ProfileCard?: ProfileCardProps;
    FormCheckout?: FormCheckoutProps;
} & EscapeHatchProps;
export declare type Frame1Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: Frame1OverridesProps | undefined | null;
}>;
export default function Frame1(props: Frame1Props): React.ReactElement;
