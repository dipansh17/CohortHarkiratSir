import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useNavigate,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        {/* we have to define it under browserRouter */}
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/neet/online-coaching-class-11"
              element={<Class11Program />}
            />
            <Route
              path="/neet/online-coaching-class-12"
              element={<Class12Program />}
            />
            <Route path="/" element={<LandingPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        Footer | Contact us
      </BrowserRouter>
      {/* <div>Single Page Application</div> */}
    </div>
  );
}
function Layout() {
  return (
    <div style={{ height: "100vh" }}>
      <Link to={"/"}>Allen</Link> |
      <Link to={"/neet/online-coaching-class-11"}>Class 11</Link> |
      <Link to={"/neet/online-coaching-class-12"}>Class 12</Link>
      <div style={{ height: "90vh" }}>
        <Outlet />
      </div>
    </div>
  );
}
function ErrorPage() {
  return <div>Page Not Found!</div>;
}
function Class11Program() {
  return <div>Neet programs for class 11th</div>;
}
function Class12Program() {
  const navigate = useNavigate();
  function redirectUser() {
    navigate("/");
  }
  return (
    <div>
      Neet programs for class 12th
      <br></br>
      <button onClick={redirectUser}>Go back to landing page.</button>
    </div>
  );
}
function LandingPage() {
  return <div>Welcome to Allen</div>;
}

export default App;
