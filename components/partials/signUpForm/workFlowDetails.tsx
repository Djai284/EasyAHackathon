import React from 'react'

// Represents an option component
// String -> React Component
const WorkFlowOption = (workType: string) => {
  return (
    <div>

    </div>
  )
}


// Entire Form Component for the Work Flow Page
const WorkFlowDetails = () => {
  /*
    Digital Design
    Engineering/Architecture
    Video/Audio Production
    Art/Animation
    General
    Other
  */
  return (
    <div>
      WorkFlowDetails
      <div className="flex grid">
        <div>
          Digital Design
        </div>
        <div>
          Engineering/Architecture
        </div>
        <div>
          Video/Audio Production
        </div>
        <div>
          Art/Animation
        </div>
        <div>
          General
        </div>
        <div>
          Other
        </div>
      </div> 
    </div>
  ) 
}

export default WorkFlowDetails