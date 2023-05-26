
interface ILink {
  href: string
  title: string
}

interface IWork {
  title: string
  about: string
  description: string
  href: string
}

interface IProfileDetail {
  city: string
  country: string
  email: string
  description: string
}

export const LINKS: ILink[] = [
  { href: '/', title: 'home' },
  { href: '/work', title: 'work' },
  { href: '/about', title: 'about' },
  { href: '/contact', title: 'contact' },
  { href: 'https://dev.rizqyhbb.vercel.app', title: 'blog' }
];

export const WORKS: IWork[] = [
  { title: 'Work 1',
    about: 'sesuatu yang sangat menyenangkan dan ingin sekali ku lakukan',
    description: 'NextJs, ANTD, apapun',
    href: 'http://github.com/rizqyhbb' },
  { title: 'Work 2',
    about: 'sesuatu yang sangat menyenangkan dan ingin sekali ku lakukan',
    description: 'NextJs, ANTD, apapun',
    href: 'http://github.com/rizqyhbb' },
  { title: 'Work 3',
    about: 'sesuatu yang sangat menyenangkan dan ingin sekali ku lakukan',
    description: 'NextJs, ANTD, apapun',
    href: 'http://github.com/rizqyhbb' },
  { title: 'Work 4',
    about: 'sesuatu yang sangat menyenangkan dan ingin sekali ku lakukan',
    description: 'NextJs, ANTD, apapun',
    href: 'http://github.com/rizqyhbb' },
  { title: 'Work 5',
    about: 'sesuatu yang sangat menyenangkan dan ingin sekali ku lakukan',
    description: 'NextJs, ANTD, apapun',
    href: 'http://github.com/rizqyhbb' }
];

export const PROFILE_DETAIL: IProfileDetail = {
  city: 'sleman',
  country: 'indonesia',
  email: 'rizqyhbb@gmail.com',
  description: 'Currently looking for opportunities as a frontend developer (remote)'
};
