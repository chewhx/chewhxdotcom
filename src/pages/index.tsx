import { LightbulbIcon, LightbulbOffIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Inter } from 'next/font/google';
import { Button } from '../components/ui/button';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
});

const portfolio: Array<{ title: string; link: string }> = [
  {
    title: 'GitHub',
    link: 'https://github.com/chewhx',
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/chewhx/',
  },
  {
    title: 'CV',
    link: 'https://www.chewhx.com/cv.pdf',
  },
];

const projects: Array<{
  title: string;
  link: string;
  description: string;
}> = [
  {
    title: 'Google Books API Wrapper',
    link: 'https://www.npmjs.com/package/@chewhx/google-books',
    description: 'JS Wrapper for Google Books API',
  },
  {
    title: 'React Bootstrap Button',
    link: 'https://www.npmjs.com/package/react-bootstrap-button',
    description: 'Quickly implement a loading button for react bootstrap',
  },
  {
    title: 'React useTodos',
    link: 'https://github.com/chewhx/use-todo',
    description: 'React package to create and manage todos state',
  },
];

export default function Home() {
  const { setTheme, theme } = useTheme();
  return (
    <>
      <Head>
        <title>chewhx</title>
      </Head>
      <main
        className={`flex flex-col items-center justify-between py-20 gap-y-6 mx-auto ${inter.className}`}
      >
        <div className='text-center'>
          <h4 className='scroll-m-20 text-xl font-semibold tracking-tight'>
            Chew Han Xiang
          </h4>
          <p className='text-sm text-muted-foreground'>Software Engineer</p>
        </div>
        <div className='flex'>
          {portfolio.map(({ title, link }) => (
            <a key={title} href={link} rel='noreferrer' target='_blank'>
              <Button variant='link'>{title}</Button>
            </a>
          ))}
        </div>
        <div className='flex flex-col space-y-6 mx-auto w-auto md:w-[500px] px-12 py-6'>
          {projects.map(({ title, description, link }) => (
            <div className='flex flex-col gap-y-1' key={title}>
              <a
                href={link}
                rel='noreferrer'
                target='_blank'
                className='text-sm font-medium leading-none underline cursor-pointer hover:text-slate-500'
              >
                {title}
              </a>
              <p className='text-sm text-muted-foreground'>{description}</p>
            </div>
          ))}
        </div>
        <Button
          size='icon'
          variant='ghost'
          onClick={() => {
            if (theme === 'dark') {
              setTheme('light');
            } else {
              setTheme('dark');
            }
          }}
        >
          {theme === 'dark' ? (
            <LightbulbOffIcon size={18} />
          ) : (
            <LightbulbIcon size={18} />
          )}
        </Button>
        <footer>
          <small>&copy; 2023 Chew Han Xiang</small>
        </footer>
      </main>
    </>
  );
}
