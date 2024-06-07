import { cn } from "@/lib/utils";
import Header from "./Header";
import ProfileSection from "./ProfileSection";
import Sidebar from "./Sidebar";

export default function Layout({children,className}:{children:React.ReactNode,className?:string}) {
  return (
    <div className="min-h-screen flex max-w-[1600px] mx-auto">
        <div className="min-h-full relative shrink-0 hidden lg:block lg:w-[270px]">
            <div className="sticky h-screen overflow-scroll default-scroll w-full shadow-sm border-r top-0 left-0">
                <Sidebar/>
            </div>
        </div>
        <div className="min-h-[120vh] relative grow" >
            <Header/>
            <div className={cn("bg-[#F5F6FA] pb-8 min-h-screen padding-x",className)}>
                {children}
            </div>
        </div>
        <div className="min-h-full hidden xl:block relative shrink-0 xl:w-[270px]">
            <div className="sticky border-l h-screen overflow-scroll default-scroll w-full shadow-sm border-r top-0 left-0">
                <ProfileSection/>
            </div>
        </div>
    </div>
  )
}
