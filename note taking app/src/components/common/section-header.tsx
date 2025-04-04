type Props = {
  title: string;
  subtitle?: string;
};

const SectionHeader = ({ title, subtitle }: Props) => {
  return (
    <div className='text-center mb-2.5 flex flex-col gap-2'>
      <h1 className='text-3xl font-bold text-gray-900 md:text-4xl dark:text-gray-200'>
        {title}
      </h1>
      {subtitle && (
        <h2 className='text-base secondary-font text-neutral-500 dark:text-neutral-400'>
          {subtitle}
        </h2>
      )}
    </div>
  );
};
export default SectionHeader;
