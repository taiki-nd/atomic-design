import { Footer } from "../atoms/layout/Footer";
import { Header } from "../atoms/layout/header";

export const DefaulyLayout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
