import { Dispatch, ReactNode, SetStateAction } from "react";

export interface HeaderProps {
    setTab: Dispatch<SetStateAction<string>>;
    tabs: Tab[];
}

export interface Tab {
    name: string;
}

export interface PageProps {
    children: ReactNode;
    name: string;
}