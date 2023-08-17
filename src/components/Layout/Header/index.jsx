import HeaderTop from "./HeaderTop";
import Navbar from "./Navbar";
import "./style.scss";
const index = () => {
  return (
    <header className="w-full fixed bg-white z-10 top-0">
      <div className="container mx-auto">
        <HeaderTop />
        <Navbar />
      </div>
    </header>
  );
};

export default index;
