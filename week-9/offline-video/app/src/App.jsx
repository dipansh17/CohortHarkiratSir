import { useState, useEffect, Children } from "react";
import "./index.css";
import { PostComponent } from "./components/Post";
// import { ProfileComponent } from "./components/Profile";
function App() {
  const [posts, setPosts] = useState([
    {
      name: "Dipansh Malhotra",
      subtitle: "69, 698 followers",
      time: "12 min",
      description: "Got Offer from HFT",
      image:
        "https://media.licdn.com/dms/image/v2/D5603AQHcFdS9B9KzOA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1728105569584?e=1733961600&v=beta&t=ZnmHbhOHK33n0MRmsU9UcdvrQp8rNXqXx4sFsxVO5SQ",
    },
    {
      name: "Manish Malhotra",
      subtitle: "699, 698 followers",
      time: "1 min",
      description: "Created LahengaDotCom",
      image:
        "https://th.bing.com/th/id/OIP.TLF0v18hkmB42VS5PcI3YwHaF2?w=191&h=180&c=7&r=0&o=5&pid=1.7",
    },
  ]);

  const postComponents = posts.map((post) => (
    <PostComponent
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      description={post.description}
      image={post.image}
    />
  ));
  function addPost() {
    setPosts([
      ...posts,
      {
        name: "Manish Malhotra",
        subtitle: "699, 698 followers",
        time: "1 min",
        description: "Created LahengaDotCom",
        image:
          "https://th.bing.com/th/id/OIP.TLF0v18hkmB42VS5PcI3YwHaF2?w=191&h=180&c=7&r=0&o=5&pid=1.7",
      },
    ]);
  }
  const [NotificationCount, setNotificationCount] = useState(0);
  function setNotificationInterval() {
    setInterval(() => {
      setNotificationCount((notificationCount) => notificationCount + 1);
    }, 5000);
  }
  useEffect(() => {
    setNotificationInterval();

    // Cleanup function to clear the interval when the component unmounts
  }, []);
  const [currentTab, setCurrentTab] = useState("1");
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(
    function () {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts/" + currentTab).then(
        async (res) => {
          const json = await res.json();
          setTabData(json);
          setLoading(false);
        }
      );
    },
    [currentTab]
  );
  const todos = [
    {
      id: "1",
      title: "Go to gym",
      status: "true",
    },
    {
      id: "2",
      title: "Do cleaning",
      status: "false",
    },
  ];
  const TodoComponent = todos.map((todo) => (
    <Todo key={todo.id} title={todo.title} status={todo.status}></Todo>
  ));
  function Todo({ title, status }) {
    return (
      <div>
        {title}----{status === "true" ? "Done!" : "Not Done"}
      </div>
    );
  }

  return (
    // <div
    //   style={{
    //     background: "#dfe6e9",
    //     height: "100vh",
    //     margin: 0,
    //     padding: 0,
    //   }}
    // >
    //   <div>Hello SIR!</div>
    //   <div>
    //     <NotificationToggle />
    //   </div>
    //   <button onClick={addPost}>Add Post</button>
    //   <div style={{ display: "flex", justifyContent: "center" }}>
    //     <div>
    //       <div>{postComponents}</div>
    //     </div>
    //   </div>
    // </div>
    <div>
      {/* //update notification */}
      {/* {
    <div style={{ display: "flex", flexDirection: "column" }}>
      <p style={{ color: "red" }}>{NotificationCount}</p>
      <img
        src="https://th.bing.com/th?id=OIP.0HsnCoTXD1PKhF58dU0lYgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
        width={"40px"}
        height={"40px"}
      />
    </div>} */}
      {/* <div>
        <button
          onClick={function () {
            setCurrentTab("1");
          }}
          style={{ color: currentTab === "1" ? "red" : "black" }}
        >
          Feed
        </button>
        <button
          onClick={function () {
            setCurrentTab("2");
          }}
          style={{ color: currentTab === "2" ? "red" : "black" }}
        >
          My Network
        </button>
        <button
          onClick={function () {
            setCurrentTab("3");
          }}
          style={{ color: currentTab === "3" ? "red" : "black" }}
        >
          Jobs
        </button>
        <button
          onClick={function () {
            setCurrentTab("4");
          }}
          style={{ color: currentTab === "4" ? "red" : "black" }}
        >
          Messaging
        </button>
        <br></br>
        {loading ? "Loading..." : tabData.title}
      </div>
    </div> */}

      {/* //use state week-9 part 2 */}

      <div>
        {/* <Card style={{ display: "flex", background: "grey" }}>
          <div style={{ color: "green" }}>
            <p>Hello</p>
            <br />
            <input type={"text"}></input>
          </div>
        </Card>
        <Card>Hello</Card> */}
        {/* list and key */}
        {TodoComponent}
      </div>
    </div>
  );
}

function Card({ children }) {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: 10,
        color: "wheat",
        padding: 10,
        margin: 10,
      }}
    >
      {children}
    </div>
  );
}
function NotificationToggle() {
  let [notificationCount, setNotification] = useState(0);
  function incrementCount() {
    setNotification((notificationCount) => notificationCount + 1);
  }
  return (
    <div>
      <button onClick={incrementCount}>Increase Count</button>
      {notificationCount}
      {/* {isVisible && <p>The Conditonal Rendering is visible</p>} */}
    </div>
  );
}

export default App;
