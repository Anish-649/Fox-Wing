import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TimebasedBg from "../timeBasedBg/TimebasedBg";
import "./careersPage.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "#e7a11e",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  maxHeight: "80vh",
  maxWidth: "80vw",
  overflowY: "auto",
  borderRadius: "12px",
};

export default function Careerpage () {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const bgColor = TimebasedBg();

  return (
    <div>
      <Button
        onClick={handleOpen}
        variant="text"
        sx={{
          backgroundColor: "transparent",
          color: "white",
          boxShadow: "none",
          border: "none",
          textTransform: "none", // optional (prevents uppercase)
          "&:hover": {
            backgroundColor: "transparent", // remove hover gray
            boxShadow: "none",
            color: "#f0c040",
          },
        }}
      >
        Careers Page
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, background: bgColor }}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ color: "black" }}
          >
            Careers Page
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, font: "" }}>
            Join the Team that Shapes Stories and Builds Influence.
            <br /> At Fox Wing Media, we’re not just another PR firm — we’re
            storytellers, strategists, and creators shaping how the world sees
            entrepreneurs and brands. We’re always looking for passionate minds
            who love media, communication, and creativity. <br /> Open Positions
            <br />
            1. PR Executive (Full-Time / Remote)
            <br /> ● Media relations & press release pitching
            <br /> ● Founder profiling & coordination with publications <br />●
            Must have strong communication skills
            <br /> 2. Content & Copywriter (Freelance)
            <br /> ● Writing PR articles, website copy, and social media
            captions <br />● Understanding brand tone and storytelling
            <br /> 3. Client Success Manager
            <br /> ● Handle client onboarding, coordination, and reporting
            <br /> 4. Video Editor / Social Media Creator
            <br /> ● Edit reels and storytelling videos for clients
            <br /> ● Understanding of trends and formats <br />.
            <span className="glasstext">
              {"  "}
              Send your resume to careers@foxwingmedia.com or DM us on LinkedIn
              with your portfolio link.
            </span>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
