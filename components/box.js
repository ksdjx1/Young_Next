const layoutStyle = {
    backgroundColor: "#FFFFFF",
    width: "30%",
    height: "90%",
    borderRadius: "5%",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    padding: "1%",
    margin: "0 5%",
}

  
const Box = props => (
    <div style={layoutStyle}>
        {props.children}
    </div>
);

export default Box