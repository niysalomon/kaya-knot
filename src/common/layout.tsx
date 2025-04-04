import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col bg-white justify-between z-90">
        <div className="">
          <Header />
        </div> 
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
