import React, {
  ReactElement, SyntheticEvent, useRef, useState
} from 'react';
import {
  Button, Input, Layout, Textarea, Title
} from '../components';
import { NextPageWithLayout } from './_app';
import emailjs from '@emailjs/browser';

import styles from '../styles/Contact.module.css';
import toast from 'react-hot-toast';
import Head from 'next/head';

const Contact: NextPageWithLayout = () => {
  const formRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: SyntheticEvent): void => {
    e.preventDefault();
    setIsLoading(true);
    const sendMail = emailjs.sendForm(
      'service_gdzowtj',
      'template_gl4dlwa',
      formRef.current,
      '14XICNThX7H2xBvZ5'
    );
    void toast.promise(
      sendMail,
      {
        loading: 'Sending',
        success: () => {
          setName('');
          setEmail('');
          setMessage('');
          setIsLoading(false);
          return <b>Sent!</b>;
        },
        error: () => {
          setIsLoading(false);
          return 'There is something wrong, please contact me directly at rizqyhbb@gmail.com';
        }
      }
    );
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>rizqyhbb | CONTACT</title>
        <meta name="description" content="portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.contactContainer}>
        <div className={styles.title}>
          <Title title="Let's_talk." dark={true} />
        </div>
        <div className={styles.formContainer}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <Input id="name" label='NAME' name='name' onChange={(e) => setName((e.target as HTMLInputElement).value)} value={name}/>
            <Input id="email" label='EMAIL' name='email' type="email" onChange={(e) => setEmail((e.target as HTMLInputElement).value)} value={email} />
            <Textarea id='message' label='MESSAGE' name='message' onChange={(e) => setMessage((e.target as HTMLInputElement).value)} value={message}/>
            <div className={styles.submit}>
              <Button disabled={!name || !email || !message || isLoading} type='submit'>Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout (page: ReactElement) {
  return <Layout dark={true} footer={false}>{page}</Layout>;
};
export default Contact;
