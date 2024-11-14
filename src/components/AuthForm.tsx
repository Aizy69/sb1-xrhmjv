import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { supabase } from '../lib/supabase';
import toast from 'react-hot-toast';

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(2).optional(),
});

type AuthFormData = z.infer<typeof authSchema>;

interface AuthFormProps {
  type: 'login' | 'signup';
}

export const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
  });

  const onSubmit = async (data: AuthFormData) => {
    try {
      if (type === 'signup') {
        const { error } = await supabase.auth.signUp({
          email: data.email,
          password: data.password,
          options: {
            data: {
              name: data.name,
            },
          },
        });
        if (error) throw error;
        toast.success('Check your email to confirm your account');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        });
        if (error) throw error;
        toast.success('Successfully logged in');
      }
    } catch (error) {
      toast.error('Authentication failed');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            {...register('name')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
            type="text"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
      )}
      
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          {...register('email')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          type="email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Password</label>
        <input
          {...register('password')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
          type="password"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
      >
        {type === 'signup' ? 'Sign Up' : 'Login'}
      </button>
    </form>
  );
};