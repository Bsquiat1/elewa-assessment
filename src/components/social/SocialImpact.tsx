import React from 'react'
import HeroSection from '../HeroSection'
import SectionWithPhoto from '../SectionWithPhoto'

const SocialImpact = () => {
  return (
    <div>
       <HeroSection
        backgroundImage="https://images.pexels.com/photos/13020508/pexels-photo-13020508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Scaling impact. Beyond the norm"
        subtitle="Human and Environmental Impact"
        description="through Social Enterprise"
        info=""
      />
        <SectionWithPhoto
  backgroundColor="bg-black"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
  title="New Section Title"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio."
  photoPosition="left"
/>
<SectionWithPhoto
  backgroundColor="bg-grey-200"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
  title="New Section Title"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio."
  photoPosition="right"
/>
<SectionWithPhoto
  backgroundColor="bg-grey-200"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
  title="New Section Title"
  description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, sapien eu tincidunt lobortis, felis purus vulputate odio."
  photoPosition="left"
/>

    </div>
  )
}

export default SocialImpact