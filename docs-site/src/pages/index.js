import React from 'react';
import { Redirect } from 'react-router-dom';
import Head from '@docusaurus/Head';
import useBaseUrl from "@docusaurus/useBaseUrl";

export default function Homepage() {
  return (
    <>
      <Head>
        <meta title="Dojo Docs" />
        <meta property="og:title" content="Dojo Docs" />
      </Head>
      <Redirect to = {useBaseUrl('/docs')}/>
    </>
  );
}