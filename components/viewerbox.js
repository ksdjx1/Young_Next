const layoutStyle = {
    backgroundColor: "white",
    width: "80%",
    height: "310px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)",
    padding: "5%",
    margin: "0 auto",
    overflow: "scroll",
    textIndent: "1em",
}

  
const ViewerBox = props => (
    <div style={layoutStyle}>
        {props.children}
    </div>
);

export default ViewerBox