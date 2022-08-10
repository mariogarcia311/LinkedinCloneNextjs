import Preload from "../src/components/Preload";
import PostsProvider from "../src/context/PostsProvider";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <PostsProvider>
      <Preload />
      <Component {...pageProps} />
    </PostsProvider>
  );
}

export default MyApp;
