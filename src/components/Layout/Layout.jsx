import { Loading } from 'components/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { IoBeerOutline } from 'react-icons/io5';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Footer, Header, HeartIcon, Logo, MainTitle, Social } from './Layout.styled';
import { Container } from 'components/App/App.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <Logo to='/'>
            <IoBeerOutline/>
        </Logo>
        <MainTitle>Beer recipes</MainTitle></Header>
        <Container>
      <Suspense fallback={<Loading />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </Container>
      <Footer>
      <HeartIcon/>
      <p>performed by Evheniia Melnychenko</p>
        <Social to="https://github.com/MelnychenkoJenny" target="_blank"><BsGithub/></Social>
        <Social to="https://www.linkedin.com/in/yevheniia-melnychenko/" target="_blank"><BsLinkedin/></Social>
        
      </Footer>
      
    </>
  );
};
