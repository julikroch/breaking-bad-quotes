import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  color: white;
  margin-top: 7rem;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  &:hover{
    cursor: pointer;
    text-decoration:underline;
  }
`;

export const PhraseContainer = styled.div`
  padding: 3rem;
  border-radius: .5rem;
  background-color: white;
  max-width: 800px;

  h1{
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    padding-left: 4rem;
    &::before{
      content: open-quote;
      font-size: 10rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 1.6rem;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;