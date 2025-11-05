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

export default function Privacypolicy() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const bgColor = TimebasedBg ();

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
        Privacy Policy
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
            Privacy Policy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, font: "" }}>
            1. Introduction Fox Wing Media LLP (“we”, “our”, “us”) respects your
            privacy and is committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, and safeguard your
            data when you visit our website or engage with our services. <br />{" "}
            2. Information We Collect We may collect the following information:
            <br /> ● Name, email, and contact details when you fill out forms.{" "}
            <br />● Company name and project details for service inquiries.
            <br /> ● Payment details when you make transactions for our
            services.
            <br /> ● Cookies and analytics data to improve our website
            performance.
            <br /> 3. How We Use Your Information We use your data to:
            <br /> ● Provide, manage, and improve our services.
            <br /> ● Respond to your inquiries and communicate updates.
            <br /> ● Send you PR insights, offers, or newsletters (only with
            your consent).
            <br />● Maintain internal records and compliance documentation.
            <br />
            4. Data Protection We use secure servers and encrypted connections
            (SSL) to protect your data. Access to information is limited to
            authorized team members only.
            <br /> 5. Third-Party Disclosure We do not sell or rent your
            personal data. We may share necessary information with trusted
            partners or media publishers solely to fulfill project deliverables.{" "}
            <br />
            6. Cookies Our website uses cookies for better functionality and
            user experience. You can choose to disable cookies in your browser
            settings.
            <br /> 7. Your Rights You may request to review, update, or delete
            your personal data by contacting us at contact@foxwingmedia.com.
            <br /> 8. Updates to this Policy We may update this policy
            periodically. Any changes will be posted on this page with a revised
            date.
            <br /> Last Updated: October 2025
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
