import { Button } from '@/components/ui/button';
import { AUTH_PAGE } from '@/config';
import { useNavigate } from '@/hooks';
import ctaDots from '@/../public/static/cta-dots.svg';

const Cta = () => {
  const { navigate } = useNavigate();

  return (
    <div
      id='cta'
      className='flex flex-col gap-5 text-center justify-center items-center mt-32 bg-[#636AE8FF] py-14 px-5 relative overflow-hidden lg:py-24 dark:bg-[#3b4096]'
    >
      <img src={ctaDots} alt='Dots' className='absolute -top-24 left-28 w-32' />
      <aside className='absolute -left-12 -bottom-16 h-36 w-36 rounded-full bg-[#878ceded] overflow-hidden z-10 md:w-56 md:h-56 md:-left-20 md:-bottom-20'></aside>
      <h2 className='text-3xl font-bold text-white md'>
        Ready to clear your mind?
      </h2>
      <p className='text-[#DEE1E6FF] secondary-font w-full md:w-1/2 lg:w-[30%]'>
        Start writing. Organize your thoughts. Make ideas happen.
      </p>
      <div className=''>
        <Button
          className='w-full bg-white hover:bg-white/70 dark:bg-background'
          size={'lg'}
          onClick={() => navigate(AUTH_PAGE)}
        >
          <span className='secondary-font'>Sign Up</span>
        </Button>
      </div>
    </div>
  );
};
export default Cta;
