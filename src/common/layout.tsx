import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex flex-col bg-white justify-between ">
        <div className="px-2">
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
