import { useTheme } from 'next-themes';
import { useRouter } from 'next/router';
import { Switch } from './ui/switch';

const links = {
  LinkedIn: 'https://www.linkedin.com/in/chewhx/',
  GitHub: 'https://github.com/chewhx',
  Facebook: 'https://www.facebook.com/chew.h.xiang',
  CV: '/cv.pdf',
};

const Brand = () => {
  const { push } = useRouter();
  const { theme, setTheme } = useTheme();
  return (
    <div className='my-24 flex flex-col content-center justify-center w-full space-y-8'>
      <div
        className='flex flex-col content-center justify-center flex-wrap text-center pointer-events-none select-none'
        onClick={() => push('/')}
      >
        <p className='text-[2.25rem] font-medium tracking-tight'>
          Chew Han Xiang
        </p>
        <p className='text-[1.75rem] text-slate-400 tracking-tight -m-2'>
          Software Engineer
        </p>
      </div>
      <div className='flex gap-2 mx-auto'>
        <Switch
          // className='mx-auto'
          checked={theme === 'dark'}
          onCheckedChange={() => {
            theme === 'light' ? setTheme('dark') : setTheme('light');
          }}
        />
      </div>
      <div className='flex content-center justify-center space-x-4 mx-auto w-full'>
        <a
          href={links['LinkedIn']}
          target='_blank'
          rel='noreferrer'
          className='text-primary underline font-light hover:text-slate-400'
        >
          LinkedIn
        </a>
        <a
          href={links['GitHub']}
          target='_blank'
          rel='noreferrer'
          className='text-primary underline font-light hover:text-slate-400'
        >
          GitHub
        </a>
        <a
          href={links['CV']}
          target='_blank'
          rel='noreferrer'
          className='text-primary underline font-light hover:text-slate-400'
        >
          CV
        </a>
      </div>
    </div>
  );
};

export default Brand;
