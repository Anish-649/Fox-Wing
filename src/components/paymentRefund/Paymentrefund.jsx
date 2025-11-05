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

export default function Paymentrefund() {
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
        Payment & Refund Policy
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
            Payment & Refund Policy
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, font: "" }}>
            1. Payment Terms <br />● All services require a minimum 50% advance
            payment to begin work. <br /> ● The remaining amount must be cleared
            before final delivery or publication.
            <br /> ● Accepted modes: UPI, Bank Transfer, and Online Payment
            Gateways.
            <br /> 2. Refund Policy Since our work involves editorial pitching,
            strategy, and effort-based services, payments are non-refundable
            once the campaign has started. Refunds are only applicable if:{" "}
            <br />● Payment was made in error or duplicate. <br />● No work or
            communication was initiated within 15 days of payment. <br />
            3. Cancellation If the client decides to cancel the project midway,
            the amount already paid will not be refunded but can be adjusted
            against future services within 30 days.
            <br /> 4. Invoice & Tax All payments are subject to applicable GST
            as per Indian law. A digital invoice will be provided for every
            transaction.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
