function ColoredBox(props) {
  return (
    <div
      style={{
        border: '2px black solid',
        backgroundColor: props.color,
        width: props.width ? `${props.width}px` : '500px',
        height: props.height ? `${props.height}px` : '500px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span>{props.color}</span>
    </div>
  );
}
export default ColoredBox;
