import { useRouter } from 'next/router';

const links = {
  LinkedIn: 'https://www.linkedin.com/in/chewhx/',
  GitHub: 'https://github.com/chewhx',
  Facebook: 'https://www.facebook.com/chew.h.xiang',
  CV: '/cv.pdf',
};

const Brand = () => {
  const { push } = useRouter();
  return (
    <div className='h-[350px] flex flex-col content-center justify-center w-full space-y-16'>
      <div
        className='flex flex-col content-center justify-center flex-wrap text-center cursor-pointer'
        onClick={() => push('/')}
      >
        <p className='text-[2.25rem] font-medium tracking-tight'>
          Chew Han Xiang
        </p>
        <p className='text-[1.75rem] text-slate-500 tracking-tight -m-2'>
          Software Engineer
        </p>
      </div>
      <div className='flex content-center justify-center space-x-4 mx-auto w-full'>
        <a
          href={links['LinkedIn']}
          target='_blank'
          rel='noreferrer'
          className='font-medium text-blue-600 underline'
        >
          LinkedIn
        </a>
        <a
          href={links['GitHub']}
          target='_blank'
          rel='noreferrer'
          className='font-medium text-blue-600 underline'
        >
          GitHub
        </a>
        <a
          href={links['CV']}
          target='_blank'
          rel='noreferrer'
          className='font-medium text-blue-600 underline'
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Brand;
