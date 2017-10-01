import {List} from "immutable";
import {ReactNode} from "react";

export interface IEarlyCheck {
    icon: string;
    viewBox: string;
    checked: boolean;
    name: string;
    title: string;
}

export interface IEarlyModal {
    children?: ReactNode;
    earlyModal?: boolean;
}

export interface IEarlyState {
    checkList: List<IEarlyCheck>;
    step: number;
}
