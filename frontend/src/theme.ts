import { createTheme } from "@mui/material/styles";

// FROM: https://mui.com/customization/typography/
declare module "@mui/material/styles" {
  interface TypographyVariants {
    body_xlight: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    body_xlight?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body_xlight: true;
  }
}

export const theme = createTheme({
  // palette: {
  //   secondary: {
  //     main: "#EBF445"
  //   }
  // },
  typography: {
    fontFamily: "Krona One, Lexend, sans-serif",
    body1: {
      fontFamily: "Lexend, Krona One, sans-serif",
      fontWeight: 400
    },
    body_xlight: {
      fontFamily: "Lexend, Krona One, sans-serif",
      fontWeight: 200
    },
    button: {
      textTransform: "none"
    }
  }
});
