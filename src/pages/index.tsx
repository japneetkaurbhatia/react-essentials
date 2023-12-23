import React from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet';
import StyledButton from '../components/StyledButton';
import ListOfComponents from '../components/ListOfComponents';

const HomePage = () => {
  const router = useRouter();
  return (
    <div>
      <Helmet>
        <title>React Essentials</title>
      </Helmet>
      <ListOfComponents>
        <StyledButton onClick={() => router.push("/accordian")}> Accordian</StyledButton>
      </ListOfComponents>
    </div>
  );
};

export default HomePage;
