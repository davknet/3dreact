import React, { useState } from 'react';
import { buildingTwo } from '../canvas/walls/buildingTwo' ;
import './style/floor-tabs-style.css';






export const FloorTabs = () => {

    const [activeView, setActiveView] = useState('all'); 

  const activeTabs  = [{ id: 'all', label: 'Full Building' }];
  const totalFloors = buildingTwo.dimensions.floors;
  const floorData   = buildingTwo.elements.floors;

  for (let i = 1; i <= totalFloors; i++) {
  
    const floor = floorData.find(f => f.level === i);

    if (floor) {
      activeTabs.push({ id: floor.id, label: `Floor ${floor.level}` });
    } else {
      activeTabs.push({ id: `inactive-${i}`, label: `Floor not active ${i}` });
    }
  }

     console.log(activeTabs) ;



    return (

         <>
          <div className='perspective' id='perspective-tabs'>
            <div className='perspective-menu' >
                            {activeTabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveView(tab.id)} 
                                style={{  background: activeView === tab.id ? 'hsla(219, 100%, 49%, 0.902)' : ''  }} >
                                {tab.label}
                          </button>
        ))}
      </div>

      
      <div className='perspective-view'>
        {/* <FloorView activeFloor={activeView} /> */}
       floor  { activeView }
      </div>
        
     </div>
         </>
    )


}