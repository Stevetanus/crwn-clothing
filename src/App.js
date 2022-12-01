import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return (
    <>
      <h1>Hi, I'm shop.</h1>
    </>
  );
};

const App = () => {
  return (
    <Routes>
      {/* <Outlet /> */}
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
