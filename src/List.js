import React from 'react';
import styled from 'styled-components';

const List = ({people}) => {

    return(
        <Container>
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

const Person = styled.article`
  padding-top: 20px;
  display: flex;
  user-select: none;
  img{
    object-position: center;
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 200px;
    margin-right: 20px;
  }
`;

export default List;