import { LinkedinFilled } from '@ant-design/icons';
import { Twitter } from 'lucide-react';
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import Autoplay from 'embla-carousel-autoplay';
import { useEffect, useState } from 'react';
import { Flex } from 'antd';
import SectionHeader from '@/components/common/section-header';

const team = [
  {
    fullname: 'John Daniel',
    role: 'Content Creator',
    desc: '“NoteSpace completely changed how I capture ideas on the go. I never lose a thought again.”',
    img: '/static/person1.jpg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
  {
    fullname: 'Julia David',
    role: 'Product Manager',
    desc: '“The search and tags are game changers. Everything is where I need it, when I need it.”',
    img: '/static/person2.jpg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
  {
    fullname: 'Janet James',
    role: 'Frontend Developer',

    desc: 'As a developer, writing things helps me debug my code easily and structured. NoteSpace helps me achieve just that.',
    img: '/static/person3.jpg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
  {
    fullname: 'Dane Walker',
    role: 'Tourist',

    desc: 'For someone who travels alot, having a note to document and write down my journey is parmount. Thanks to NoteSpace I can do that with ease.',
    img: '/static/person4.jpg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
  {
    fullname: 'Asogwa Perpetual',
    role: 'Product Manager',
    desc: 'I must admit, NoteSpace is the best note taking app I have ever used, the ease, the simplicity, the design is just perfect.',
    img: '/static/person5.jpeg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
  {
    fullname: 'Muhammed Sherif',
    role: 'Frontend Developer',
    desc: 'The app is something I have been using for a while and I am not tired of it yet, probably would not',
    img: '/static/person6.jpeg',
    socials: [
      { icon: <LinkedinFilled />, link: '#' },
      { icon: <Twitter />, link: '#' },
    ],
  },
];

const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div
      id='testimonials'
      className='flex flex-col gap-10 w-[90%] mx-auto lg:w-[80%] mt-32 md:mt-44'
    >
      <SectionHeader title='Loved by thinkers and creators' />

      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 3500,
          }),
        ]}
        setApi={setApi}
        className='w-full'
      >
        <CarouselContent>
          {team.map((item, index) => (
            <CarouselItem
              key={index}
              className='text-center md:basis-1/2 lg:basis-1/3'
            >
              <div className='p-1'>
                <Card className='p-0'>
                  <CardContent className='p-0'>
                    <section className='flex flex-col gap-6 rounded-lg shadow-sm h-[28rem] sm:h-[27rem] pb-1.5 lg:h-[30rem] xl:h-[28rem]'>
                      <div className='h-56'>
                        <div className='h-56'>
                          <img
                            src={item.img}
                            alt='Card Image'
                            className='w-full h-full object-cover rounded-t-lg'
                          />
                        </div>
                      </div>
                      <div className='px-3 flex flex-col gap-1.5 md:px-4 h-32'>
                        <h3 className='text-base font-extrabold text-neutral-900 md:text-lg dark:text-white'>
                          {item.fullname}
                        </h3>
                        <h3 className='text-base secondary-font text-[#636AE8FF]'>
                          {item.role}
                        </h3>
                        <p className='text-sm w-full secondary-font text-neutral-500'>
                          {item.desc}
                        </p>
                        <div className='mt-3'>
                          <Flex
                            align='center'
                            justify='center'
                            gap={10}
                            className='flex-row-reverse text-lg'
                          >
                            {item.socials.map((s, i) => {
                              return (
                                <a
                                  key={i}
                                  href={s.link}
                                  target='_blank'
                                  rel='noopener noreferrer'
                                >
                                  {s.icon}
                                </a>
                              );
                            })}
                          </Flex>
                        </div>
                      </div>
                    </section>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className='flex justify-center gap-1.5 mt-6'>
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`cursor-pointer h-2 rounded-full transition-all duration-300 ${
                current === index + 1
                  ? 'w-4 bg-[#636AE8FF]'
                  : 'w-2 bg-neutral-300'
              }`}
              onClick={() => api && api.scrollTo(index, true)}
            ></button>
          ))}
        </div>
      </Carousel>
    </div>
  );
};
export default Testimonials;
