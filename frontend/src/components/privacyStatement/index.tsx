import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/system/Box";
import logo from "../../medias/branding/pepita_logo.png";
const PrivacyStatement = () => {
  return (
    <Box component={Container} display="flex" flexDirection="column" height="100vh" justifyContent="flex-end" sx={{maxWidth: {xs: "80%", md: "70%"}}}>
      <Stack alignItems="center" justifyContent="center" spacing={8} mb={4} textAlign="center">
        <Box component="img" maxWidth="100%" src={logo} alt="Pepita logo"/>
        <Typography>
            Help us help you by taking a few moments to answer some questions.
        </Typography>
        <Button variant="contained">
          <Typography>Continue</Typography>
        </Button>
        <Typography variant="body_xlight">
          {`By clicking continue, you agree to our Terms and Privacy Policy. We do not share any of your data with third-parties.
          Our site collects and stores information about you and your preferences to personalize content and provide you with curated resources.`}
        </Typography>
      </Stack>
    </Box>
  );
};

export default PrivacyStatement;
