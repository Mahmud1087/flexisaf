import { Link } from 'react-router-dom';
import { ABOUT_PAGE, AUTH_PAGE } from '@/config';
import { Button } from '@/components/ui/button';
import { Mail, Send } from 'lucide-react';
import {
  FacebookFilled,
  LinkedinFilled,
  TwitterOutlined,
  YoutubeFilled,
} from '@ant-design/icons';
import { Logo } from '@/components/common';

const Footer = () => {
  return (
    <footer className='bg-[#0A0D42FF] pb-6'>
      <div className='w-[90%] mx-auto lg:w-[80%]'>
        <section className='py-12 flex flex-col gap-16 md:grid md:grid-cols-2 lg:grid-cols-3 md:py-24'>
          <div>
            <Logo className='text-white' />
          </div>

          <div className='flex gap-16'>
            <aside className='flex flex-col gap-4'>
              <h1 className='text-xl font-extrabold text-white'>Product</h1>
              <div className='text-base text-[#DEE1E6FF] flex flex-col gap-3'>
                <a
                  href='#features'
                  className='secondary-font transition-all hover:text-primary'
                >
                  Features
                </a>
              </div>
            </aside>
            <aside className='flex flex-col gap-4'>
              <h1 className='text-xl font-extrabold text-white'>Company</h1>
              <div className='text-base text-[#DEE1E6FF] flex flex-col gap-3'>
                <Link
                  to={ABOUT_PAGE}
                  className='secondary-font transition-all hover:text-primary'
                >
                  About
                </Link>
                <Link
                  to={AUTH_PAGE}
                  className='secondary-font transition-all hover:text-primary'
                >
                  Join Us
                </Link>
              </div>
            </aside>
          </div>

          <div className='flex flex-col gap-5'>
            <aside>
              <h1 className='text-xl text-[#E8618CFF] font-bold'>
                Subcribe to our newsletter
              </h1>
              <p className='tex-xs text-[#dee1e6bd] secondary-font font-light'>
                For product announcement and exclusive insights
              </p>
            </aside>
            <aside className='flex items-center w-full h-9'>
              <label
                htmlFor='newsletter'
                className='w-full relative h-full border border-[#636AE8FF] border-r-0 text-[#DEE1E6FF] rounded-l-md'
              >
                <input
                  type='email'
                  name='newsletter'
                  id='newsletter'
                  placeholder='Input your email'
                  className='w-full h-full pl-10 border-none outline-none focus:outline-none bg-transparent rounded-l-md placeholder:text-[#424955ff]'
                />
                <p className='absolute left-3 top-1/2 -translate-y-1/2 text-[#a7adb7ff]'>
                  <Mail size={18} />
                </p>
              </label>
              <Button className='bg-[#636AE8FF] rounded-l-none'>
                <span className='text-white'>
                  <Send />
                </span>
              </Button>
            </aside>
          </div>
        </section>

        <section className='flex justify-between items-center border-t border-t-[#babbbe6b] pt-5'>
          <p className='text-[#9095A0FF] text-sm secondary-font lg:text-center lg:w-full'>
            © 2025 NoteSpace, Inc.
          </p>
          <div className='flex gap-5 items-center'>
            <a
              href='http://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#2EBAE8FF]'
            >
              <TwitterOutlined />
            </a>
            <a
              href='http://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#2E6FE8FF]'
            >
              <FacebookFilled />
            </a>
            <a
              href='http://linkedin.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#3868D8FF]'
            >
              <LinkedinFilled />
            </a>
            <a
              href='http://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-[#E82E2EFF]'
            >
              <YoutubeFilled />
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
