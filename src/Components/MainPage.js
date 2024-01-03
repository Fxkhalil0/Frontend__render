import React, { useState } from "react";
import Logo from "../assets/logo.png";
import Lines from "../assets/f2.png";
import Global from "../assets/Rectangle 403.png";
import path1 from "../assets/New Project (222).png";
import path2 from "../assets/New Project (444).png";
import path3 from "../assets/New Project (111).png";
import Shadow from "../assets/Ellipse 3.png";
import Modall from "./Modal";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import showToast from "../utils/ToastifyMessage";

function MainPage() {
  const [user, setUser] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  function show(message,status){
    showToast(message, 2000, status);
  }
  return (
    <>
    <ToastContainer />
      <Modall open={open} handleClose={handleClose} user={user} show={show} />
      <div className="main__div">
        <div className="container">
          <nav>
            <figure>
              <img src={Logo} alt="Logo" />
            </figure>
            <button
              onClick={() => {
                handleOpen();
                setUser(false);
              }}
            >
              Join Our Team
            </button>
          </nav>
          <div className="page__body">
            <div className="left__side">
              <div className="box__shadow">
                <img src={Shadow} alt="" />
                <h1>LVW</h1>
              <p>LVW's website is under contruction</p>
              </div>
              <div className="responsive__div">
              <img src={Lines} alt="" />
              <button
                onClick={() => {
                  handleOpen();
                  setUser(true);
                }}
              >
                Try With Us
              </button>
              </div>
            </div>
            <div className="right__side">
              <img src={Global} alt="" />
              <div className="paths">
                <img src={path1} alt="" />
      
                <div className="sec__path">
                <img src={path2} alt="" />
                </div>
                <div className="last__path">
                <img src={path3} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <div className="footer__icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-solid fa-earth-americas"></i>
          </div>
        </footer>
      </div>
    </>
  );
}

export default MainPage;
