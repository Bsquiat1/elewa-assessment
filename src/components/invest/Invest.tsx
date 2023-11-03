import React from 'react'
import HeroSection from '../HeroSection'
import SectionWithPhoto from '../SectionWithPhoto'
import BottomPhoto from './BottomPhoto'
import LearnMoreSection from '../about/LearnMore'
import Footer from '../Footer'

const Invest = () => {
  return (
    <div>
       <HeroSection
        backgroundImage="https://images.pexels.com/photos/6056776/pexels-photo-6056776.jpeg?auto=compress&cs=tinysrgb&w=1600"
        title="Trade, not aid"
        subtitle="Southern innovations addressing "
        description="global problems"
        info=""
      />
   
<BottomPhoto 
title='How we see it differently'
description="The global South is rapidly catching up with the 'developed' world. It's time for you to get to know the rapid development, innovation, and drive going on in this part of the world (East-Africa, South Asia, and beyond)."

imageUrl='https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,w_1280/v1675690306/elewa-group-website/Images/Mask_Group_17_rjkgrq.png'
/>

<SectionWithPhoto
  backgroundColor="bg-grey-300"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690303/elewa-group-website/Images/IMG_6523_vabpyo.png"
  title="Elewa NV, a multi-stakeholder cooperation"
  description="At the heart of Elewa lies the structure Elewa NV. Based in Brussels, Belgium, Elewa NV is a private holding company which controls the assets of all Elewa activities.

  Elewa NV is owned and controlled by Elewa's founder, a small community of investors which share in the vision of Elewa and Elewa employees based throughout the activities of the group."
  photoPosition="left"
  textColor="black"
/>
<SectionWithPhoto
  backgroundColor="bg-grey-300"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983012/elewa-group-website/Images/creative-hub-image_dd6o8o.jpg"
  title="The Elewa Creative Hub"
  description="Coming soon; The Elewa Creative Hub Lies at the heart of our organization. A two-acre property at the center of Nairobi's creative district, the hub connects all Elewa's Activities under a single banner.

  Through partnerships with creative community, the Elewa Hub will organize vibrant activites that bring talents from different fields (tech, business, art, fashion) together to nurture continuous innovation."
  photoPosition="right"
  textColor="black"
/>
<SectionWithPhoto
  backgroundColor="bg-grey-300"
  imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1679983082/elewa-group-website/Images/invest-now_ftxg4z.jpg"
  title="Investing in Elewa NV"
  description="From time to time, we offer investment opportunities (private equity & debt) to out community of investors. Interested to take part when this opportunity arrives?"
  photoPosition="left"
  textColor="black"
/>
<LearnMoreSection
  title="Become part of our mission"
  subtitle="And start investing"
 
/>
<Footer />

    </div>

  )
}

export default Invest