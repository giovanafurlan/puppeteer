import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: `'Lato', sans-serif`,
    body: `'Lato', sans-serif`,
  }
});

export default MyApp;