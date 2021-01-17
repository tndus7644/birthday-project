import React,{useState} from 'react';
import styled from 'styled-components';
import {GlobalStyle} from "./Styled/Common.Styled";
import List from "./List";
import data from './data';

const App = () => {

    const [people, setPeople] = useState(data);

    function clearAll() {
        setPeople([])
    }

    function reset() {
        setPeople(data);
    }

    return(
        <Container>
            <GlobalStyle/>
            <Main>
                <ContentContainer>
                    <h3>{people.length} birthdays today</h3>
                    <List people={people}/>
                </ContentContainer>
                <ButtonGroup>
                    <Button onClick={clearAll}>
                        Clear All
                    </Button>
                    <Button onClick={reset}>
                        Reset
                    </Button>
                </ButtonGroup>
            </Main>
            <p className="copyright">이 프로젝트는 https://codedamn.com/practice/react-birthday-reminder 을 토대로 제작되었습니다.</p>
        </Container>
    )
}

const Container = styled.div`
  padding: 20px 0;
  width: 100%;
  height: 100vh;
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
  box-shadow: 0 1px 10px rgba(0,0,0,0.2);
  margin: 20px;
  padding: 20px;
`;

const ContentContainer = styled.div`
`;

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.div`
  margin: 20px auto 0;
  width: 150px;
  padding: 10px 10px 8px;
  color: #fff;
  background: #f28ab2;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  user-select: none;
  transition: 0.2s;
  &:hover {
    background: #e978a3;
  }
`;

export default App;