
import Header from "./Header";
import CareerCard from "../Pages/CareerCard";
import ExtraFristPage from "../Pages/ExtraFristPage";
import ExtraSecondPage from "../Pages/ExtraSecondPage";
import SuccessSection from "../SuccessSection";
import LearnAbout from "../LearnAbout";
import { Link } from "react-router-dom";
export default function AllHome() {
  return (
    <div>
      <Header />
      <div className="bg-base-200">
        <div className="flex justify-center pt-5 ">
          <CareerCard />
          
        </div>
        <div className="flex justify-center">
        <SuccessSection></SuccessSection>
        </div>
        <div>
          <ExtraFristPage />
          <LearnAbout></LearnAbout>
        </div>
        <div className="flex justify-center my-5">
          <Link to={'/packages'}><button className="btn btn-primary">Start Learing</button></Link>
        </div>
        <div>
          <ExtraSecondPage />
        </div>
      </div>
    </div>
  );
}
