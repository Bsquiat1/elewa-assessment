import React from 'react'

type Props = {}

const achievements = [
    { title: 'People trained', value: '733+' },
    { title: 'Careers launched', value: '733k' },
    { title: 'Projects finished', value: '200+' },
    { title: 'Investors', value: '56' },
  ];

const Achievements = (props: Props) => {
  return (
    
<div className=" bg-black">
  <div className="grid grid-cols-4 gap-2 ">
    {achievements.map((achievement, index) => (
      <div key={index} className="text-center mt-20 mb-20"> 
      <h2 className="text-6xl font-normal text-white mb-8">{achievement.value}</h2>
        <p className="text-4xl font-semibold text-white">{achievement.title}</p>
       
      </div>
    ))}
  </div>
</div>
  )
}

export default Achievements