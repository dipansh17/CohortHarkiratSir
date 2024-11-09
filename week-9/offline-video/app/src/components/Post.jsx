const style = {
  width: 200,
  backgroundColor: "white",
  borderRadius: 10,
  borderColor: "gray",
  borderWidth: 1,
  padding: 20,
};
export function PostComponent({ name, subtitle, time, description, image }) {
  return (
    <div style={style}>
      <div style={{ display: "flex" }}>
        <img
          src={image}
          style={{
            width: 30,
            height: 30,
            borderRadius: 20,
          }}
        ></img>
        <div style={{ fontSize: 10, marginLeft: 10 }}>
          <b>{name}</b>
          <div>{subtitle}</div>
          {time && (
            <div style={{ display: "flex" }}>
              <div>{time}</div>
              <img
                src="https://th.bing.com/th?id=OIP.yBRdVA1wRppiko9uT79XtwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                height={10}
                style={{ marginLeft: 5 }}
              ></img>
            </div>
          )}
        </div>
      </div>
      <div style={{ fontSize: 15, marginTop: 5 }}>{description}</div>
    </div>
  );
}
