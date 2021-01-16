import React from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./Styled/Common.Styled";
import List from "./List";
import data from './data';

const App = () => {

    return(
        <Container>
            <GlobalStyle/>
            <Main>
                <ContentContainer>
                    <h3>{data.length} birthdays today</h3>
                    <List people={data}/>
                </ContentContainer>
            </Main>
            <p className="copyright">이 프로젝트는 https://codedamn.com/practice/react-birthday-reminder 을 토대로 제작되었습니다.</p>
        </Container>
    )
}

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100%;
  background: #f28ab2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  .copyright {
    font-size: 12px;
    color: #4a4a4a;
    text-align: center;
    user-select: none;
  }
`;

const Main = styled.div`
  background: #fff;
  width: 400px;
  border-radius: 8px;
  box-shadow: 0px 1px 10px rgba(0,0,0,0.2);
  margin: 20px;
  padding: 20px;
`;

const ContentContainer = styled.div`
    
`;

export default App;