'use client';
import { Button } from '@heroui/react';
import { FaRegSmile } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="">
      <h1 className="text-3xl font-bold text-center text-purple-600">
        Hello Adiros 🤓
      </h1>
      <Button color='primary' variant='bordered' startContent={<FaRegSmile size={20}/>}>Click me</Button>
    </div>
  );
}
