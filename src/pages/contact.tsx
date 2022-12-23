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

const Contact: NextPageWithLayout = () => {
  const formRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: SyntheticEvent): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    const sendMail = emailjs.sendForm(
      'service_gdzowtj',
      'template_gl4dlwa',
      formRef.current,
      '14XICNThX7H2xBvZ5'
    );
    await toast.promise(
      sendMail,
      {
        loading: 'Sending',
        success: () => {
          (e.target as HTMLFormElement).reset();
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
      <div className={styles.title}>
        <Title title="Let's talk." dark={true} />
      </div>
      <div className={styles.formContainer}>
        <form ref={formRef} onSubmit={(e) => handleSubmit(e)}>
          <Input id="name" label='NAME' name='name' />
          <Input id="email" label='EMAIL' name='email' type="email" />
          <Textarea id='message' label='MESSAGE' name='message' />
          <div className={styles.submit}>
            <Button disabled={isLoading} type='submit'>{isLoading ? 'Sending' : 'Submit'}</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

Contact.getLayout = function getLayout (page: ReactElement) {
  return <Layout dark={true} footer={false}>{page}</Layout>;
};
export default Contact;
