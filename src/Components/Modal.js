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
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  maxWidth: "80vw",
  overflowX: "hidden",
  bgcolor: "#16243A",
  overflowY: "auto",
  maxHeight: "90vh",
  border: "none",
  boxShadow: 24,
  p: 4,
  borderRadius: "20px",
};

function Modall({ open, handleClose, user, show }) {
  useEffect(() => {}, [open]);

  const [role, setRole] = useState(0);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [birthDate , setBirthDate] = useState("")

  const handleChange = (event) => {
    setRole(event.target.value);
  };
  const submit = async () => {
    let values = {
      role: role ? role : "user",
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      birthDate: birthDate
    };
    console.log(values)
    await axios
      .post("https://backend-1rxt.onrender.com/addnew", values, {
        withCredentials: true,
      })
      .then((res) => {
        handleClose();
        show("Your request sent successfully", "success");
      })
      .catch((err) => {
        console.log(err);
        show(err?.response?.data?.message, "error");
      });
  };
  const handleEmailClick = () => {
    window.location.href = "mailto:Info@lvw.live";
  };

  return (
    <Modal
      className="modal"
      open={open}
      onClose={() => {
        handleClose();
        setEmail("");
        setFirstName("");
        setLastName("");
        setPhone("");
        setRole(0);
        setBirthDate("")
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="top">
          <h3>{user ? "Try With Us" : "Join Us Now"}</h3>
          <Button onClick={handleClose}>Close</Button>
        </div>
        {user ? (
          <p>
            Be among the first to experience the future of live virtual
            exploration. Sign up for early access to LVW and start your journey
            of boundless exploration.
          </p>
        ) : (
          <p>
            Join our passionate team and shape the future of live virtual
            exploration. We value diverse perspectives and are always looking
            for talented individuals to join our innovative journey. Fill out
            the form below or send us your CV at
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
                color: "blue",
                fontWeight: 800,
              }}
              onClick={handleEmailClick}
            >
              {" "}
              Info@lvw.live
            </span>
            .
          </p>
        )}
        <h4>Required *</h4>
        <form style={{ marginTop: "60px" }}>
          <Grid container spacing={2}>
            {!user && (
              <>
                <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
                  <label>Careers *</label>
                  <Box
                    sx={{
                      backgroundColor: "#021022",
                      width: "95%",
                      borderRadius: "10px",
                    }}
                  >
                    <FormControl fullWidth>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={role}
                        style={{ color: "white" }}
                        onChange={handleChange}
                      >
                        <MenuItem disabled value={0}>
                          Careers
                        </MenuItem>
                        <MenuItem value={"cameraOperator"}>
                          Virtual Camera Operator
                        </MenuItem>
                        <MenuItem value={"tourGuide"}>Virtual Tour Guide</MenuItem>
                      </Select>
                    </FormControl>
                  </Box>
                </Grid>
                <Grid xs={0} md={6}></Grid>
              </>
            )}
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>First Name *</label>
              <TextField
                onChange={(e) => setFirstName(e.target.value)}
                sx={{
                  backgroundColor: "#021022",
                  width: "95%",
                  borderRadius: "10px",
                }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Last Name *</label>
              <TextField
                onChange={(e) => setLastName(e.target.value)}
                sx={{
                  backgroundColor: "#021022",
                  width: "95%",
                  borderRadius: "10px",
                }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Email *</label>
              <TextField
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  backgroundColor: "#021022",
                  width: "95%",
                  borderRadius: "10px",
                }}
                id="outlined-basic"
                variant="outlined"
                InputProps={{ style: { color: "white" } }}
              />
            </Grid>
            <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
              <label>Phone</label>
              <TextField
                onChange={(e) => setPhone(e.target.value)}
                sx={{
                  backgroundColor: "#021022",
                  width: "95%",
                  borderRadius: "10px",
                }}
                id="outlined-basic"
                variant="outlined"
              />
            </Grid>
            {user && 
              <>
                <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}>
                  <label>Birth Date *</label>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateTimePicker"]}>
                      <DateTimePicker
                      onChange={(e)=>{
                        setBirthDate(e.$d)
                      }}
                        views={["year", "month", "day"]}
                        sx={{
                          backgroundColor: "#021022",
                          width: "95%",
                          borderRadius: "10px",
                        }}
                        InputProps={{ style: { color: "white" } }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid xs={12} md={6} sx={{ marginBottom: "20px" }}></Grid>
              </>
            }
            <Button style={{ borderRadius: "10px" }} onClick={submit}>
              Submit
            </Button>
          </Grid>
        </form>
      </Box>
    </Modal>
  );
}

export default Modall;
