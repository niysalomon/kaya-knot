import Footer from "./footer";
import Header from "./header"; 
const Layout = ({ children,open,setOpen }: {open:boolean; setOpen:(_value:boolean)=>void; children: React.ReactNode }) => {
  return ( 
      <div className="bg-white h-screen ">
        <div className="">
          <Header open={open} setOpen={setOpen}/>
        </div> 
        <div className="h-[calc(95vh-190px)] overflow-auto">{children}</div>
        <Footer />
      </div>
 
  );
};
export default Layout;
