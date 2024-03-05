import Expertise from "@/components/Expertise";
import { HomeBanner } from "@/components/HomeBanner";
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
