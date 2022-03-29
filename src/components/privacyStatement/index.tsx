/* eslint-disable react-hooks/exhaustive-deps */
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
// import logo from "../../medias/branding/pepita_logo.png";
import { acceptAgreement } from "../../protectedRoutes/authSlice";
import Modal from "../modal";
const PrivacyStatement = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const dispatch = useDispatch();
  const updatePrivacy = useCallback(() => {
    dispatch(acceptAgreement());
  }, []);

  return (
    <>
      <Stack alignItems="center" justifyContent="center" spacing="10vh" pb="3vh" textAlign="center" >
        <Box component="img" src="branding/pepita_logo.png" alt="Pepita logo" maxWidth="100%" /* sx={{maxWidth: {xs: "90%", md: "70%"}}} */ />
        <Typography>
            Help us help you by taking a few moments to answer some questions.
        </Typography>
        <Button variant="contained" color="secondary" onClick={handleOpen}>
          <Typography>Continue</Typography>
        </Button>
        <Typography variant="body_xlight" textAlign="left">
          {`By clicking continue, you agree to our Terms and Privacy Policy. We do not share any of your data with third-parties.
          Our site collects and stores information about you and your preferences to personalize content and provide you with curated resources.`}
        </Typography>
      </Stack>
      <Modal
        isOpen={open}
        handleClose={handleClose}
        title="Before you begin"
        content={
          `We know that things change over time, so don’t worry - our site allows you to modify your responses to these questions whenever
          you’d like. Answer the following questions based on how you feel right now.`}
        actionButtons={<Button onClick={updatePrivacy}>Continue</Button>}/>
    </>
  );
};

export default PrivacyStatement;
