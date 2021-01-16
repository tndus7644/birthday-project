import React from 'react';
import styled from 'styled-components';

const List = ({people}) => {

    return(
        <Container>
            <Birth>
                {people.map((item) => {
                    return <p key={item.id}>
                        {item.name}</p>
                })
                }
            </Birth>
                {people.map((person) => {
                    const {id, name, age, image} = person
                    return(
                        <Person key={id}>
                            <img src={image} alt={name}/>
                            <div>
                                <h4>{name}</h4>
                                <p>{age} years</p>
                            </div>
                        </Person>
                    )
                })
                }
        </Container>
    )
}

const Container = styled.div`

`;

const Birth = styled.div`
  p{
    padding: 6px 0;
  }
`;

const Person = styled.article`
  padding-top: 20px;
  img{
    object-position: center;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 200px;
  }
`;

export default List;