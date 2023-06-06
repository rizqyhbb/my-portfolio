interface ILink {
  href: string
  title: string
}

export interface IWork {
  title: string
  about: string
  description: string
  href?: string
  tech?: string[]
  media?: string
  features: string[]
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
  {
    title: 'collabway',
    about: 'ChatGPT with enhanced features, including workspaces for seamless collaboration. And no need account sharing for premium ChatGPT.',
    description: 'Collabway is an enhanced chat GPT designed to provide a superior user experience for both individuals and organizations. With its innovative workspaces feature, there\'s no need to share accounts anymore. You can easily invite members to your organization and they can create their own workspaces to isolate chat topics based on their specific needs. This ongoing project is already in production, offering a seamless and efficient communication platform.',
    tech: ['remix', 'openAi', 'supabase', 'tailwind', 'markdown', 'fly'],
    href: 'http://collabway.co',
    features: [
      'Chat GPT Pro for everyone: Collabway has the ability to invite members to join your organization and feel the PRO feature of course no need to exchange accounts, one pro account to invite another account to be pro',
      'Enhanced User Experience: Collabway delivers an improved chat experience, focusing on user satisfaction and ease of communication.',
      'Workspaces: The unique workspaces feature allows organizations and teams to collaborate effectively by creating separate spaces for different chat topics and discussions.',
      'Organization Collaboration: Members can be invited to join an organization, streamlining communication within the organizational structure.',
      'Individual Workspaces: Each member has the flexibility to create their own workspaces, ensuring personalization and isolation of chat topics as needed.'
    ],
    media: '/video/collabway.mp4'
  },
  {
    title: 'wallet app',
    about: 'Financial planning app that is Initiative project for mentoring program',
    description: 'The Wallet App is a mentoring project aimed at building a small community for colleagues who have completed their bootcamp training and are preparing to apply for jobs or gain hands-on experience in building industry-like applications. The primary objective of this initiative is to familiarize them with the technology industry. While the app serves as a financial planner, it also offers a wide range of features that can be created and developed, providing an excellent playground for learning and exploration.',
    tech: ['nextJs', 'postgres', 'vercel', 'tailwind', 'express', 'sequelize', 'redux'],
    href: 'http://stage-aegis.vercel.app',
    features: [
      'Financial planning: The app provides functionality as a financial planner, helping users manage their finances effectively.',
      'Mentoring and community building: The project fosters a supportive community where colleagues can engage in mentoring and collaborative learning.',
      'Industry-like app development: Participants gain hands-on experience in building applications similar to those found in the industry.',
      'Playground for feature development: The app offers a platform for exploring and developing various features, allowing participants to enhance their skills and creativity.'
    ],
    media: '/image/wallet-app.png'
  }
];

export const PROFILE_DETAIL: IProfileDetail = {
  city: 'sleman',
  country: 'indonesia',
  email: 'rizqyhbb@gmail.com',
  description: 'Currently looking for opportunities as a frontend developer (remote)'
};
