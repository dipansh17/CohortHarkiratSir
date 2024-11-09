export function ProfileComponent() {
  return (
    <div>
      <div style={{ border: 1 }}>
        <img
          src="https://media.licdn.com/dms/image/v2/C4D03AQHJN6ECW32GQg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1667905908259?e=1733961600&v=beta&t=VBe-kjyQKLZK0ZcBuOdue29JtfW6hH59ELxYkptcuUY"
          style={{
            height: 50,
            width: 50,
            borderRadius: 25,
            paddingBlockEnd: 10,
          }}
        ></img>
        <div style={{ height: 50, width: 75 }}>
          <div style={{ display: "flex" }}>
            <b style={{ fontSize: 15 }}>Dipansh Malhotra</b>
          </div>
          <span
            style={{
              display: "flex",
              // justifyContent: "center",
              fontSize: 10,
            }}
          >
            Actively Looking for Software Engineer Roles |Immediate Joiner|
            |MERN Stack Engineer | Teaching Assistant @Code Help | 900+
            @Leetcode | 700+ @GFG
          </span>
        </div>
      </div>
    </div>
  );
}
