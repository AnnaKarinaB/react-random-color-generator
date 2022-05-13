import styled from '@emotion/styled';

function Button(props) {
  const StyledButton = styled.button({
    color: (155, 102, 102),
    fontsize: 15,
    fontWeight: 200,
    letterSpacing: 1,
    padding: 13,
    30: 13,
    outline: 0,
    border: 1,
    borderRadius: 6,
    backgroundColor: (155, 102, 102),
  });
  return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
}
export default Button;
