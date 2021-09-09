import type { Theme } from 'theme-ui'

export const theme = {
  // fonts: {
  //   body: 'system-ui, sans-serif',
  //   heading: '"Avenir Next", sans-serif',
  //   monospace: 'Menlo, monospace',
  // },
  // colors: {
  //   text: '#000',
  //   background: '#fff',
  //   primary: '#33e',
  // },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
      "&:disabled": {
        backgroundColor: "disabledBackground",
        color: "disabledForeground"
      }
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    gray: {
      color: 'background',
      bg: 'gray',
    },
  },
  alerts: {
    danger: {
      color: "white",
      bg: "darkred"
    }
  }
}

export const darkTheme = {
  ...theme,
  colors: {
    text: 'var(--ifm-font-color-base)',
    background: 'var(--ifm-background-color)',
    // primary: '#07c',
    // secondary: '#639',
    // gray: '#555',
    // Colors taken from theme-ui.com/components/forms by inspecting the site
    //primary: "#3333e6",
    primary: "var(--ifm-color-primary)",
    secondary: "#111199",
    muted: "#f6f6f6",
    //highlight: "#efeffe",
    highlight: "var(--ifm-color-primary-contrast-background)",
    gray: "#777777",
    accent: "#660099",
    darken: "rgba(0, 0, 0, 0.25)",
    disabledBackground: "hsl(0, 0%, 20%)",
    disabledForeground: "hsl(0, 0%, 50%)"
  }
}

export const lightTheme = {
  ...theme,
  colors: {
    text: 'var(--ifm-font-color-base)',
    background: '#fff',
    // Colors taken from theme-ui.com/components/forms by inspecting the site
    //primary: "#3333e6",
    primary: "var(--ifm-color-primary)",
    secondary: "#111199",
    muted: "#f6f6f6",
    //highlight: "#efeffe",
    highlight: "var(--ifm-color-primary-contrast-background)",
    gray: "#777777",
    accent: "#660099",
    darken: "rgba(0, 0, 0, 0.25)",
    disabledBackground: "hsl(0, 0%, 90%)",
    disabledForeground: "hsl(0, 0%, 80%)"
  }
}
