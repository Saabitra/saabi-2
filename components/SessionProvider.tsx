'use client';

import { Session } from "next-auth"
import { SessionProvider as Provider, SessionProviderProps } from "next-auth/react"
import React from "react";

type Props = {
    children: React.ReactNode;
    session: Session | null;
}

export function SessionProvider({ children, session }: Props)
{
    return (
        <Provider session={session}>
            {children}
        </Provider>
    );

}