import styled from "styled-components";
export const Container = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
  border: 2px solid black;
  width:150px;
  border-radius: 20px;
  p {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    text-align: center;
    font-size: 14px;
    margin: 0.5em;
  }
  a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0.5em;
    padding: 0.5em;
    text-decoration: none;
  }
  
`;