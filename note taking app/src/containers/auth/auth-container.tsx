import { Link } from '@/components/controls';
import React from 'react';

type AuthContainerType = {
  containerClassName?: string;
  showTermsAndConditions?: boolean;
  children: React.ReactNode;
  heading: React.ReactNode;
  title: React.ReactNode;
};

function AuthContainer({
  containerClassName = '',
  showTermsAndConditions = true,
  children,
  heading,
  title,
}: AuthContainerType) {
  return (
    <div className='flex h-full min-h-screen w-full px-2 md:flex-row'>
      <div className='relative w-full px-4 flex flex-col items-center justify-center mt-6 md:mt-0'>
        <div className='w-full md:w-2/5'>
          <div className={containerClassName}>
            <div className='text-center flex flex-col mb-5'>
              <h2 className='text-2xl'>{heading}</h2>
              <p className='text-sm'>{title}</p>
            </div>
            {children}
          </div>
          {showTermsAndConditions && (
            <div>
              <p className='auth-terms-description relative mt-16 bottom-5 right-1/2 translate-x-1/2 md:mt-0 md:absolute'>
                By clicking “Login or Continue, you assert that you have read
                and <br className='hidden md:block' />
                agreed to our{' '}
                <Link className='text-green-400 underline'>
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link className='text-green-400 underline'>
                  Privacy Policy.
                </Link>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthContainer;
