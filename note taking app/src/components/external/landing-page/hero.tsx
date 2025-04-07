import { Button } from '@/components/ui/button';
import { AUTH_PAGE } from '@/config';
import { useNavigate } from '@/hooks';

const Hero = () => {
  const { navigate } = useNavigate();

  return (
    <div className='flex flex-col gap-14 w-[90%] mt-14 mx-auto lg:w-[80%] md:flex-row md:mt-24'>
      <section className='w-full h-full md:h-[27rem] flex flex-col gap-3 md:justify-center md:w-[55%] text-center md:text-start md:gap-4'>
        <h1 className='primary-font text-3xl font-extrabold text-[#171a1fff] md:text-4xl dark:text-white'>
          Your thoughts, organized.
        </h1>
        <p className='text-base w-full secondary-font text-neutral-500 lg:w-[85%] md:text-lg dark:text-neutral-400'>
          NoteSpace is your all-in-one notebook for capturing, organizing, and
          retrieving your thoughts in seconds.
        </p>
        <div className='mt-2.5'>
          <Button
            onClick={() => navigate(AUTH_PAGE)}
            size={'lg'}
            className='bg-[#636AE8FF]'
          >
            <span className='font-normal text-sm text-white secondary-font md:text-base'>
              Get Started
            </span>
          </Button>
        </div>
      </section>
      <section className='w-full pl-10 pt-10 bg-white h-72 md:h-[27rem] rounded-md md:rounded-xl shadow-2xl md:w-[45%]'>
        <img
          src='./static/hero-img.png'
          alt='Website dashboard'
          className='w-full h-full object-cover rounded-tl-md rounded-br-md md:rounded-br-xl md:rounded-tl-xl shadow-2xl'
        />
      </section>
    </div>
  );
};
export default Hero;
