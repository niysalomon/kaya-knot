import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col bg-white justify-between z-90">
        <div className="">
          <Header />
        </div>
        {/* h-[calc(80vh-186px)] */}
        <div className="">{children}</div>
        <Footer />
      </div>
    </>
  );
};
export default Layout;
