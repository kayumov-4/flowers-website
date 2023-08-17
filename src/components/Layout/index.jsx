import "./style.scss";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Outlet, Route, Routes } from "react-router-dom";
import Generic from "../../pages/Generic";
import NotFound from "../../pages/NotFound";
import HomePage from "../../pages/Home/HomePage";
import FlowersPage from "../../pages/Flowers/FlowersPage";
import PlantsPage from "../../pages/Plants/PlantsPage";
import PlantsItem from "../../pages/PlantsItem";
import FlowersItem from "../../pages/FlowersItem";

const index = () => {
  return (
    <>
      <Header />

      <main className="mt-[132px]">
        <Routes>
          <Route path="/" element={<FlowersPage />} />
          <Route path="/plants" element={<PlantsPage />} />
          <Route path="/plants/:id" element={<PlantsItem />} />
          <Route path="/flowers" element={<HomePage />} />
          <Route path="/flowers/:id" element={<FlowersItem />} />
          <Route path="/gifts" element={<NotFound />} />
          <Route path="/discounts" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      {/* <Route path="/about" element={<NotFound />} /> */}
    </>
  );
};

export default index;
