'use client';
import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent  
} from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { GiMatchTip } from 'react-icons/gi';
import NavLink from './NavLink';

const TopNavBar = () => {
  return (
    <Navbar
      maxWidth="xl"
      className="bg-gradient-to-r from-blue-400 to-purple-800"
      classNames={{
        item: [
          'text-xl',
          'text-white',
          'uppercase',
          'data-[active=true]:text-yellow-200',
        ],
      }}
    >
      <NavbarBrand as={Link} href="/">
        <GiMatchTip size={40} className="text-gray-200" />
        <div className="font-bold text-3xl flex items-center">
          <span className="text-purple-900">Match</span>
          <span className="text-gray-200">Me</span>
        </div>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavLink href="/members" label="Matches" />          
        <NavLink href="/lists" label="Lists" /> 
        <NavLink href="/messages" label="Messages" /> 
      </NavbarContent>
      <NavbarContent justify="end">
        <Button
          as={Link}
          href="/login"
          variant="bordered"
          className="text-white"
        >
          Login
        </Button>
        <Button
          as={Link}
          href="/register"
          variant="bordered"
          className="text-white"
        >
          Register
        </Button>
      </NavbarContent>
    </Navbar>
  );
};

export default TopNavBar;
