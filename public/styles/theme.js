const defaultTheme = {
  // FONTS
  fontFamilyMain: "Montserrat, sans-serif",
  fontFamilyTitle: "Inter, sans-serif",

  // FONT SIZES
  fontSizeXS: "12px",
  fontSizeS: "14px",
  fontSizeMD: "16px",
  fontSizeL: "18px",
  fontSizeXL: "20px",
  fontSizeTitleXS: "24px",
  fontSizeTitleS: "30px",
  fontSizeTitleMD: "36px",
  fontSizeTitleL: "48px",
  fontSizeTitleXL: "60px",
  fontSizeTitleXXL: "72px",

  // FONT WEIGHTS
  fontWeightRegular: "400",
  fontWeightMedium: "500",
  fontWeightSemiBold: "600",
  fontWeightBold: "700",

  lineHeightXS: "1em",
  lineHeightS: "1.25em",
  lineHeightMD: "1.5em",
  lineHeightL: "1.75em",
  lineHeightXL: "2em",

  // COLORS
  primaryWhite: "#FFFFFF",
  primaryBlack: "#000000",
  grey25: "#FCFCFD",
  grey50: "#F9FAFB",
  grey100: "#F2F4F7",
  grey200: "#EAECF0",
  grey300: "#D0D5DD",
  grey400: "#98A2B3",
  grey500: "#667085",
  grey: "#667085",
  grey700: "#344054",
  grey800: "#1D2939",

  primaryColor25: "#F5FAFF",
  primaryColor50: "#EFF8FF",
  primaryColor100: "#B2DDFF",
  primaryColor300: "#84CAFF",
  primaryColor500: "#0799DC",
  primaryColor600: "#286EED",
  primaryColor: "#287EED",
  primaryColor800: "#00306B",

  errorColor25: "#FFFBFA",
  errorColor50: "#FEF3F2",
  errorColor100: "#FEE4E2",
  errorColor300: "#FDA29B",
  errorColor500: "#F04438",
  errorColor600: "#D92D20",
  errorColor: "#B42318",

  warningColor50: "#FFFAEB",
  warningColor: "#F79009",

  successColor25: "#F6FEF9",
  successColor50: "#ECFDF3",
  successColor100: "#D1FADF",
  successColor300: "#6CE9A6",
  successColor500: "#12B76A",
  successColor600: "#039855",
  successColor: "#027A48",

  // WIDTHS
  menuBarWidth: "16em",

  // PADDING
  mainPadding: "2em 2.75em",
  mainPaddingWithNotification: "3.75em 2.75em 2em 2.75em",
  buttonPadding: ".7em 1.15em",
  listItemPadding: "1.4em 1.15em",
  smallButtonPadding: ".1em .75em",
  inputPadding: ".5em .75em",
  inputWithIconPadding: ".5em .75em .5em 3em",
  textAreaPadding: ".625em .875em",
  menuBarPadding: "2em 1em",

  // BORDERS
  sectionBorder: "1px solid #EAECF0",
  borderWidth: "1px",

  // BORDER RADIUSES
  borderRadiusS: "6px",
  borderRadius: "8px",

  // SHADOWS
  boxShadow: "0px 1px 2px 0px #1018280D",
  boxShadowL: "0px 12px 16px -4px #10182814",
  tabBoxShadow:
    "0px 1px 3px rgba(16, 24, 40, 0.1), 0px 1px 2px rgba(16, 24, 40, 0.06)",

  // ANIMATIONS
  transitionDuration: ".2s",
};

export const theme = defaultTheme;

export const buttonStyles = {
  primary: {
    color: theme.primaryWhite,
    hoverColor: theme.primaryColor,
    backgroundColor: theme.primaryColor,
    backgroundHoverColor: theme.primaryColor50,
    borderColor: theme.primaryColor,
    borderHoverColor: theme.primaryColor,
  },
  secondary: {
    color: theme.primaryBlack,
    hoverColor: theme.primaryColor,
    backgroundColor: "transparent",
    backgroundHoverColor: "transparent",
    borderColor: theme.grey300,
    borderHoverColor: theme.primaryColor,
  },
  tertiary: {
    color: theme.primaryColor,
    hoverColor: theme.primaryWhite,
    backgroundColor: theme.primaryColor50,
    backgroundHoverColor: theme.primaryColor,
    borderColor: theme.primaryColor50,
    borderHoverColor: theme.primaryColor,
  },
  alert: {
    color: theme.primaryWhite,
    hoverColor: theme.errorColor,
    backgroundColor: theme.errorColor,
    backgroundHoverColor: theme.errorColor50,
    borderColor: theme.errorColor,
    borderHoverColor: theme.errorColor50,
  },
};

export const statusStyles = {
  unapproved: {
    color: theme.errorColor,
    backgroundColor: theme.errorColor50,
  },
  review: {
    color: theme.warningColor,
    backgroundColor: theme.warningColor50,
  },
  approved: {
    color: theme.successColor,
    backgroundColor: theme.successColor50,
  },
  active: {
    color: theme.primaryColor,
    backgroundColor: theme.primaryColor50,
  },
  overdrive: {
    color: theme.successColor,
    backgroundColor: theme.successColor50,
  },
  full: {
    color: theme.grey,
    backgroundColor: theme.grey50,
  },
  complete_successful: {
    color: theme.successColor,
    backgroundColor: theme.successColor50,
  },
  complete_unsuccessful: {
    color: theme.errorColor,
    backgroundColor: theme.errorColor50,
  },
  declined: {
    color: theme.errorColor,
    backgroundColor: theme.errorColor50,
  },
};

export const featuredIconSchemes = {
  grey: {
    primary: theme.grey,
    secondary: theme.grey200,
    tertiary: theme.grey100,
  },
  green: {
    primary: theme.successColor,
    secondary: theme.successColor100,
    tertiary: theme.successColor50,
  },
  blue: {
    primary: theme.primaryColor,
    secondary: theme.primaryColor100,
    tertiary: theme.primaryColor50,
  },
  red: {
    primary: theme.errorColor,
    secondary: theme.errorColor100,
    tertiary: theme.errorColor50,
  },
};

export const notificationStyles = {
  inform: {
    messageColor: theme.primaryColor,
    borderColor: theme.primaryColor300,
    detailsColor: theme.primaryColor600,
    backgroundColor: theme.primaryColor50,
    closeBtnColor: theme.primaryColor500,
  },
  success: {
    messageColor: theme.successColor,
    borderColor: theme.successColor300,
    detailsColor: theme.successColor600,
    backgroundColor: theme.successColor25,
    closeBtnColor: theme.successColor500,
  },
  warning: {
    messageColor: theme.warningColor,
    backgroundColor: theme.warningColor50,
  },
  error: {
    messageColor: theme.errorColor,
    borderColor: theme.errorColor300,
    detailsColor: theme.errorColor600,
    backgroundColor: theme.errorColor25,
    closeBtnColor: theme.errorColor500,
  },
};
