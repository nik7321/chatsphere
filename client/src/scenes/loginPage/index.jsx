import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>

<Typography fontWeight="bold" fontSize="32px" color="primary" width="100%" 
        p="3rem 6%" 
        // marginTop="3rem"
        // marginBottom="0.1rem"
        textAlign="center">
          ChatSphere
        </Typography>

      {/* <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center" */}
      {/* > */}

        {/* <Typography fontWeight="bold" fontSize="32px" color="primary">
          ChatSphere
        </Typography> */}
      {/* </Box> */}

      

      <Box
        width={isNonMobileScreens ? "35%" : "83%"}
        p="1.5rem"
        m="-2rem auto"
        borderRadius="1rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ mb: "1rem" }}>
         <center>Log in to ChatSphere</center> 
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;