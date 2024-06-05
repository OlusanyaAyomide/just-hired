import { create } from "zustand";

interface ILayoutData{
    openedMenu:string[]
    editOpenedmenu:(data:string)=>void

}

export const useSidebar = create<ILayoutData>((set)=>({
    openedMenu:[],
    editOpenedmenu:(menu)=>{
        set((state)=>{
            if(state.openedMenu.includes(menu)){
                const newitem = state.openedMenu.filter((item=> item !== menu))
                return {openedMenu:newitem}
            }else{
                return {openedMenu:[...state.openedMenu,menu]}
            }
            
        })
    }
    
}))