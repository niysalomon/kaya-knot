import Footer from "./footer";
import Header from "./header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return ( 
      <div className="bg-white h-screen ">
        <div className="">
          <Header />
        </div> 
        <div className="h-[calc(95vh-190px)] overflow-auto">{children}</div>
        <Footer />
      </div>
 
  );
};
export default Layout;
