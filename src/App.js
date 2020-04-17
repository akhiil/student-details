import React from 'react';
import Homepage from "./components/Homepage";
import AboutPage from "./components/AboutPage";
import Header from "./components/common/Header";
import CoursePage from "./components/CoursePage";

function App() {
  function getpage() {
    const route = window.location.pathname;
    if(route === "/course") return <CoursePage />;
    if(route === "/about") return <AboutPage />;
    return <Homepage />;
  }
  return (
    <div className="container-fluid">
      <Header />
      {getpage()}
    </div>
  );
}
export default App;