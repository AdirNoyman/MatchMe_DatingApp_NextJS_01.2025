/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { registerSchema, RegisterSchema } from '@/lib/schemas/registerSchema';
import { Button, Card, CardBody, CardHeader, Input } from '@heroui/react';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { FaCircleUser } from "react-icons/fa6";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<RegisterSchema>({
    mode: 'onTouched',
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log(data);
  };

  return (
    <Card className="w-2/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-secondary">
          <div className="flex flex-row items-center gap-3">
            <FaCircleUser size={30} />
            <h1 className="text-3xl font-semibold">Register</h1>
          </div>
          <p className="text-neutral-500">Welcome to MatchMe</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
          <Input
              label="Name"
              variant="bordered"
              type="text"
              {...register('name')}
              // The double negation is used to convert the JS object into a boolean
              isInvalid={!!errors.name}
              errorMessage="Name is required 🤨"
            />
            <Input
              label="Email"
              variant="bordered"
              type="email"
              {...register('email')}
              // The double negation is used to convert the JS object into a boolean
              isInvalid={!!errors.email}
              errorMessage="Email is required 🤨"
            />
            <Input
              label="Password"
              variant="bordered"
              type="password"
              {...register('password')}
              isInvalid={!!errors.password}
              errorMessage="Password must be at least 8 characters long 🤨"
            />
            <Button
              fullWidth
              type="submit"
              color="secondary"
              isDisabled={!isValid}
            >
              Submit
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
