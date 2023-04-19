// import React, { ReactNode } from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   height: 100vh;
//   overflow-y: hidden;
// `;

// const TopNav = styled.nav`
//   background-color: #333;
//   color: #fff;
//   padding: 10px;
//   position: sticky;
//   top: 0;
//   z-index: 1;
// `;

// const SideNav = styled.nav`
//   background-color: #f0f0f0;
//   width: 200px;
//   padding: 6px;
//   position: sticky;
//   top: 60px;
//   height: calc(100vh - 60px);
//   overflow-y: auto;

//   @media (max-width: 768px) {
//     display: none;
//   }
// `;

// const MainContent = styled.main`
//   flex: 1;
//   padding: 20px;
//   overflow-y: scroll;
//   max-height: calc(100vh - 140px);
// `;

// const Footer = styled.footer`
//   background-color: #333;
//   color: #fff;
//   padding: 8px;
//   margin-top: auto;
//   text-align: center;
// `;

// const ContentWrapper = styled.div`
//   display: flex;
//   flex: 1;
// `;

interface PageLayoutProps {
  children: ReactNode;
}

// const PageLayout = ({ children }: PageLayoutProps) => (
//   <Container>
//     <TopNav>
//       <h1>My App</h1>
//     </TopNav>
//     <ContentWrapper>
//       <SideNav>
//         <h3>My Leagues</h3>
//         <ul>
//           <li>Home</li>
//           <li>About</li>
//           <li>Contact</li>
//         </ul>
//       </SideNav>
//       <MainContent>{children}</MainContent>
//     </ContentWrapper>
//     <Footer>
//       <p>&copy; {new Date().getFullYear()} Live Scores Ltd. All rights reserved.</p>
//     </Footer>
//   </Container>
// );

// export default PageLayout;

{/* <p>&copy; {new Date().getFullYear()} Live Scores Ltd. All rights reserved.</p> */}


import React, { ReactNode } from 'react';
import styled from 'styled-components';

// interface PageLayoutProps {}

interface PageLayoutState {}

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TopNav = styled.nav`
  background-color: #333;
  color: white;
  padding: 10px;
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

  // &::-webkit-scrollbar {
  //   display: none;
  // }
  // height: 60vh;
  // overflow: auto
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

export const PageLayout = ({children}: PageLayoutProps) =>   {

    return (
      <PageContainer>
        <TopNav>
          <h1>My App</h1>
        </TopNav>
        <div style={{ display: 'flex' }}>
          <LeftNav>
            <ul>
              <li>Link 1</li>
              <li>Link 2</li>
              <li>Link 3</li>
            </ul>
          </LeftNav>
          <MainContent>{children}</MainContent>
        </div>
        <Footer>
          <p>Copyright © 2023 Live Score Ltd.</p>
        </Footer>
      </PageContainer>
    );
}

export default PageLayout;
