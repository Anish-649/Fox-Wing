import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { borderRadius, maxHeight, maxWidth } from "@mui/system";
import TimebasedBg from "../timeBasedBg/TimebasedBg";

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

export default function TermsConditions() {
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
        Terms & Conditions
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
            Terms and Conditions
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, font: "" }}>
            1. Introduction Welcome to Fox Wing Media LLP. By accessing or using
            our website and services, you agree to comply with the following
            terms and conditions. <br /> 2. Services Fox Wing Media provides PR,
            personal branding, media coverage, and digital marketing solutions.
            Service scope and deliverables will be defined in individual client
            agreements. <br /> 3. Payment Terms <br />● All payments are due as
            per the invoice schedule shared with the client. <br /> ● Work will
            commence only after the agreed advance payment is received. <br /> ●
            Any delay in payment may result in a delay of deliverables.
            <br /> 4. Deliverables Media placements depend on editorial
            discretion. Fox Wing Media guarantees effort and pitching but cannot
            guarantee publication timing, edits, or placement decisions by
            third-party platforms.
            <br /> 5. Intellectual Property All creative materials, strategies,
            and written content developed remain the intellectual property of
            Fox Wing Media unless stated otherwise in the agreement.
            <br /> 6. Confidentiality Both parties agree to keep all project
            information, strategies, and data confidential. <br />
            7. Limitation of Liability Fox Wing Media shall not be liable for
            any indirect, incidental, or consequential damages arising from
            service use.
            <br /> 8. Governing Law These terms shall be governed by and
            construed in accordance with the laws of India. <br />
            Last Updated: October 2025
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
