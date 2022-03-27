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
  palette: {
    common: {
      black: "#231F20",
      white: "#F2F2F3"
    },
    primary: {
      main: "#E867A6"
    },
    secondary: {
      main: "#94D4F5"
    },
    info: { /*sdf*/
      main: "rgba(0, 0, 0, 0.54)"
    }
  },
  typography: {
    fontFamily: "Krona One, Lexend, Exo 2, sans-serif",
    h1: {
      fontFamily: "Exo 2, sans-serif",
      fontWeight: 400
    },
    h2: {
      fontFamily: "Exo 2, sans-serif",
      fontWeight: 400
    },
    h6: {
      fontFamily: "Krona One, sans-serif",
      fontWeight: 400
    },
    subtitle1: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 500,
      color: "#231F20"
    },
    subtitle2: {
      fontFamily: "Krona One, sans-serif",
      fontWeight: 400
    },
    body1: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 400,
      color: "#231F20"
    },
    body2: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 300
    },
    body_xlight: {
      fontFamily: "Lexend, sans-serif",
      fontWeight: 200
    },
    button: {
      textTransform: "none"
    },
    caption: {
      fontFamily: "Exo 2, sans-serif"
    }
  }
});
