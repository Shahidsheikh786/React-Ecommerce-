
import {useState} from "react"
const OtherTabs = () => {
  
  const [activeTab,setActiveTab] = useState(1);
  
  const tabsData = [
    {id: 1, contant : <div>
    consequat culpa labore ullamco enim excepteur ipsum nostrud laborum sit adipisicing exercitation nulla ea sit nulla est anim non eiusmod velit eiusmod nisi nulla duis ullamco minim nostrud sit adipisicing
    </div>},
    
    {id: 2, contant : <div> 
    <div className="flex items-center gap-2">
    <div className="bg-amber-400 rounded-full p-2 px-4 my-2">S</div> <div
    className="text-[#757575]"> ex labore pariatur est duis quis do qui nostrud reprehenderit
    </div>
    </div>
    
     <div className="flex items-center gap-2">
    <div className="bg-amber-400 rounded-full p-2 px-4 my-2">L</div> <div
    className="text-[#757575]"> ex labore pariatur est duis quis do qui nostrud reprehenderit
    </div>
    </div>
    
        <div className="flex items-center gap-2">
    <div className="bg-amber-400 rounded-full p-2 px-4 my-2">C</div> <div
    className="text-[#757575]"> ex labore pariatur est duis quis do qui nostrud reprehenderit
    </div>
    </div>
    
    </div>},
    
  ]
  
  return ( <div className="p-5">
  
  <div className="flex ">
  <div onClick={()=>setActiveTab(1)} className={`p-3 border e ${activeTab == 1 ? "" : "bg-[#e6e6e6]"}`}>Discription</div>
  
  <div onClick={()=>setActiveTab(2)} className={`p-3 border  ${activeTab
  == 2 ? "" : "bg-[#e6e6e6]"}`}>Reviews</div>
  
  
  </div>
  <div className="border p-2">

  {activeTab == 1 ? tabsData[0].contant :  activeTab == 2 ? tabsData[1].contant
  : ""}
  
  </div>
  
  </div>
    )
}
export default OtherTabs