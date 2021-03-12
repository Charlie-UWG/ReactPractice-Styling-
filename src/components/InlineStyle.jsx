export const InlineStlyle = () => {
  const containerStyle = {
    border: "2px solid blue",
    borderRadius: "20px",
    padding: "8px",
    margin: "8px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center"
  };
  const titleStyle = {
    margin: "0",
    color: "#3d84a8"
  };
  const buttonStyle = {
    backgroundColor: "#abedd8",
    padding: "8px",
    border: "none",
    borderRadius: "8px"
  };

  return (
    <div style={containerStyle}>
      <p style={titleStyle}>- InlineStyle -</p>
      <button style={buttonStyle}>FIGHT!!</button>
    </div>
  );
};
