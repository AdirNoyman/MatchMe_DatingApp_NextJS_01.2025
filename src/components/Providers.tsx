'use client';
import React, { ReactNode } from 'react'
import {HeroUIProvider} from "@heroui/react";

const Providers = ({children}:{children:ReactNode}) => {
  return (
    <HeroUIProvider>{children}</HeroUIProvider>
  )
}

export default Providers