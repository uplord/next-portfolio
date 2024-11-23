import React from 'react';
import Head from 'next/head';

import Banner from '@/components/Block/Banner';
import Section from '@/components/Block/Section';
import Projects from '@/components/Block/Projects';
import Timeline from '@/components/Block/Timeline';
import Stack from '@/components/Block/Stack';

export const metadata = {
  title: "Michael Allen - Front End Developer",
  description: "Michael Allen",
};

export default function Home() {

  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="supported-color-schemes" content="dark light" />
        <meta name="color-scheme" content="dark light" />
        <link rel="apple-touch-icon" href="/apple.png" media="(prefers-color-scheme: light)" />
        <link rel="apple-touch-icon" href="/apple-dark.png" media="(prefers-color-scheme: dark)" />
      </Head>
      <Banner />
      <Section />
      <Projects />
      <Timeline />
      <Stack />
    </>
  )
}
