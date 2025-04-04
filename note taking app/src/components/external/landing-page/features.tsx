import SectionHeader from '@/components/common/section-header';
import { NotebookText, SearchCheckIcon, ShieldCheck } from 'lucide-react';

const features = [
  {
    title: 'Fast Note Taking',
    desc: 'Capture thoughts instantly with our lightweight editor.',
    img: <NotebookText className='w-8 h-8 text-orange-500' />,
  },
  {
    title: 'Organized & Searchable',
    desc: 'Tag, group, and search through your notes with ease.',
    img: <SearchCheckIcon className='w-8 h-8 text-red-400' />,
  },
  {
    title: 'Private & Secure',
    desc: 'Your notes are encrypted and synced safely.',
    img: <ShieldCheck className='w-8 h-8 text-primary' />,
  },
];

const Features = () => {
  return (
    <div
      id='features'
      className='flex flex-col gap-10 w-[90%] mx-auto lg:w-[80%] mt-44'
    >
      <SectionHeader
        title='Product Features'
        subtitle='These are some of the features you can find on the website'
      />
      <div className='grid md:grid-cols-3 gap-5 md:gap-3.5 lg:gap-7'>
        {features.map((feat, i) => {
          return (
            <div
              key={i}
              className='bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-all dark:bg-gray-800'
            >
              {feat.img}
              <div className='mt-5 flex flex-col gap-1.5'>
                <h3 className='text-xl font-semibold'>{feat.title}</h3>
                <p className='text-muted-foreground secondary-font leading-6'>
                  {feat.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Features;
