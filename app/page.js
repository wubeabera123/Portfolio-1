import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import { HomeBanner } from "@/components/HomeBanner";
import Navbar from "@/components/Navbar";
import TechSkills from "@/components/TechSkills";

export default function Home() {
  return (
    <main>
         <div className="lg:mt-[80px] md:mt-[50px] sm:mt-[40px] mt-[40px]"><HomeBanner/></div>
         <Expertise/>
         <TechSkills/>
    </main>
  );
}
