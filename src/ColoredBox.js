function ColoredBox(props) {
  return (
    <div
      style={{
        border: '2px black solid',
        backgroundColor: props.color,
        width: props.width ? `${props.width}px` : '300px',
        height: props.height ? `${props.height}px` : '300px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>Generated color: {props.color}</span>
    </div>
  );
}
export default ColoredBox;
