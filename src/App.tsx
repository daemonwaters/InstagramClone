import React from "react";
import "./App.scss";
import SignIn from "./pages/SignIn/SignIn";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Inbox from "./pages/Inbox/Inbox";
import Profile from "./pages/Profile/Profile";
import Modal from "./features/Posts/components/Modal/Modal";
import { useAppSelector } from "./hooks/reduxHooks";

function App() {
  const showModal = useAppSelector((state) => state.modal);

  return (
    <React.Fragment>
      <div className="wrapper">
        <Routes>
          <Route element={<SignIn />} path="/" />
          <Route element={<Home />} path="/home" />
          <Route element={<Inbox />} path="/inbox" />
          <Route element={<Profile />} path="/profile/:username"/>
        </Routes>
        {showModal ? <Modal /> : <></>}
      </div>
    </React.Fragment>
  );
}

export default App;
