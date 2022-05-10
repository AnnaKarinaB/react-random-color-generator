import styled from '@emotion/styled';

function Button(props) {
  const StyledButton = styled.button`
    color: #ffffff;
    font-size: 15px;
    font-weight: 200;
    letter-spacing: 1px;
    padding: 13px 30px 13px;
    outline: 0;
    border: 1px solid black;
    cursor: pointer;
    position: relative;
    background-color: #000000;
  `;

  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
export default Button;
