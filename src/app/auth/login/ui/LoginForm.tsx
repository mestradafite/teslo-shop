'use client';

import { authenticate } from '@/actions';
import clsx from 'clsx';
import Link from 'next/link';
import { useActionState, useEffect } from 'react';
import { IoInformationOutline } from 'react-icons/io5';

export const LoginForm = () => {
  const [state, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  useEffect(() => {
    if (state === 'Success') {
      // Redirect
      window.location.replace('/');
    }
  }, [state]);

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Email</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="email"
        name="email"
      />

      <label htmlFor="email">Password</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        {state && (
          <div className="flex flex-row mb-2">
            <IoInformationOutline
              className={clsx('h-5 w-5', {
                'text-green-500': state === 'Success',
                'text-red-500': state !== 'Success',
              })}
            />
            <p
              className={clsx('text-sm', {
                'text-green-500': state === 'Success',
                'text-red-500': state !== 'Success',
              })}
            >
              {state}
            </p>
          </div>
        )}
      </div>

      <button
        type="submit"
        className={clsx({
          'btn-primary': !isPending,
          'btn-disabled': isPending,
        })}
        disabled={isPending}
      >
        Log in
      </button>

      {/* divisor l ine */}
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link href="/auth/new-account" className="btn-secondary text-center">
        Create new account
      </Link>
    </form>
  );
};
