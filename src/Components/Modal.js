import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import axios from "axios";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "80vw",
  overflowX:"hidden",
  bgcolor: "#16243A",
  overflowY: "auto",
  maxHeight:"90vh",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: '20px',
};

function Modall({ open, handleClose, user  ,show }) {
  useEffect(() => {}, [open]);

  const [role, setRole] = React.useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const submit = ()=>{
    let values ={
      role:role?role:"user",
      firstName:firstName,
      lastName:lastName,
      email:email,
      phone:phone
    }
    axios.post("http://localhost:5000/user/addUser",values).then((res)=>{
      handleClose()
      show("Your request sent successfully", "success")
    }).catch((err)=>{
      console.log(err)
      show(err.response.data.message, "error")
    })
  }

  return (
    <Modal
      className="modal"
      open={open}
      onClose={()=>{handleClose()
      setEmail("")
      setFirstName("")
      setLastName("")
      setPhone("")
      setRole(0)
    }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="top">
          <h3>{user ? "Try With Us" : "Join Our Team"}</h3>
          <Button onClick={handleClose}>Close</Button>
        </div>
        <p>
          By submitting this form, your firm will join our waitlist to get early
          access to LIVE VIRTUAL WORLD
        </p>
        <h4>Required *</h4>
        <form style={{ marginTop: "60px" }}>
          <Grid container spacing={2}>
            {!user && (
              <>
                <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
                  <label>Role</label>
                  <Box sx={{ backgroundColor: "#021022", width: "95%" , borderRadius: "10px"}}>
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        style={{ color: "white"}}
                        onChange={handleChange}
                      >
                        <MenuItem disabled value={0}>
                          Role
                        </MenuItem>
                        <MenuItem value={"cameraOperator"}>
                          CameraOperator
                        </MenuItem>
                        <MenuItem value={"tourGuide"}>TourGuide</MenuItem>
                        <MenuItem value={"director"}>director</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={0} md={6}></Grid>
              </>
            )}
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>First Name</label>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                sx={{ backgroundColor: "#021022", width: "95%" , borderRadius: "10px"}}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white"} }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Last Name</label>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                sx={{ backgroundColor: "#021022", width: "95%" , borderRadius: "10px" }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Email</label>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                sx={{ backgroundColor: "#021022", width: "95%" , borderRadius: "10px" }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Phone</label>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                sx={{ backgroundColor: "#021022", width: "95%" , borderRadius: "10px" }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Button
            style={{borderRadius: "10px"}}
            onClick={submit}>submit</Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default Modall;
