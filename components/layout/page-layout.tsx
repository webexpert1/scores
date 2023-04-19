import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
interface PageLayoutProps {
  children: ReactNode;
}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopNav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;

  background-image: url('/images/footballnet.jpg');
  background-position: center;
`;

const LeftNav = styled.nav`
  background-color: #666;
  color: white;
  padding: 10px;
  flex: 0 0 200px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.div`
  background-color: #eee;
  padding: 10px;
  flex: 1;
  max-height: calc(100vh - 150px); /* 150px is the height of TopNav and Footer */
  overflow-y: auto;
`;

const Footer = styled.footer`
  color: white;
  padding: 6px;
  text-align: center;

  background-color: #353935;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

`;

export const PageLayout = ({children}: PageLayoutProps) =>   {

    return (
      <PageContainer>
        <TopNav>
          {/* <Image src="/images/logo-2.png" height={100} width={100} alt="logo" /> */}
          <h1>Live Scores.</h1>
         
        </TopNav>
          <MainContent>{children}</MainContent>
        <Footer>
          <p>Copyright © 2023 Live Score Ltd.</p>
        </Footer>
      </PageContainer>
    );
}

export default PageLayout;
