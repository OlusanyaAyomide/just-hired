import DashboardFilter from "@/components/dashboard/DashboardFilter";
import Layout from "@/components/global/layout/Layout";
import { SvgIcons } from "@/icons/SvgIconts";

import { dashboardSubCards, dashboarditle } from "@/static/dashBoardStatic";

export default function DashBoard() {
  return (
    <Layout className="px-0">
      <DashboardFilter/>
      <div className="mt-3">
        {dashboarditle.map((item,index)=>(
          <div key={index} className={`flex flex-wrap padding-x ${index !== 2 ?"borer-b  border-main border-b-2":""} py-3`}>
              {item.map((overview,key)=>(
                <div className="w-6/12 grow my-1 sm:w-3/12 px-2" key={key}>
                    <div className="card w-full px-1 sm:px-2 h-full py-3">
                      <h3 className="font-medium">{overview.title}</h3>
                      <div className="flex-center justify-between">
                         <h3 className="text-main font-semibold text-2xl ">{overview.number}</h3>
                         <span className="flex-center">
                            {overview.isPositive?<SvgIcons.upLine className="scale-[75%]"/>:<SvgIcons.downLine className="scale-[75%]"/>}
                            <span className={`text-sm ml-1 ${overview.isPositive?"text-green-500":"text-red-500"}`}>{overview.percentage}</span>
                         </span>
                      </div>
                      <h3 className="mt-2 text-main-light">today</h3>
                    </div>
                </div>
              ))}
          </div>
        ))}
      </div>
      <div className="mt-6 flex padding-x flex-wrap">
        {dashboardSubCards.map((items,index)=>(
          <div className="px-1 w-full mb-4 sm:w-6/12 lg:w-4/12" key={index}>
            <div className="py-2 card w-full">
              <h3 className="text-2xl mb-1 font-semibold">{items.title}</h3>
              <h3 className="text-main-light text-sm">{items.subTitle}</h3>
              <ul className="mt-3">
                {items.company.map((item,key)=>(
                    <li key={key} className="py-2 font-medium text-base text-shade border-b border-main w-full flex-center justify-between">
                        <span>{item.name}</span>
                        <span className="flex-center">
                          <span>{item.percentage}</span>
                          {item.isPositive?<SvgIcons.upLine className="scale-[75%] ml-1"/>:<SvgIcons.downLine className="scale-[75%] "/>}
                        </span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  )
}
