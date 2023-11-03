import React from 'react';
import HeroSection from '../HeroSection';
import SectionWithPhoto from '../SectionWithPhoto';
import Achievements from './Achievements';
import LearnMoreSection from '../about/LearnMore';
import Footer from '../Footer';

/**
 * SocialImpact Component
 *
 * This component represents the Social Impact page, providing information about the organization's achievements and its commitment to social enterprise and environmental impact.
 */
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
      <Achievements />
      <SectionWithPhoto
        backgroundColor="bg-black"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681306013/lady-impact_rnc9jy.jpg"
        title="(Social) business for the win"
        description="With a young dynamic population that is eager to contribute to the global economy, East Africa has a lot to offer to the world. Now is the time to nurture sustainable, inclusive and scalable business. The rest will take care of itself."
        photoPosition="left"
        textColor="white"
      />
      <SectionWithPhoto
        backgroundColor="bg-grey-300"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1681308135/buffelo_i60xeu.jpg"
        title="A cooperative mindset"
        description="Elewa has one shared objective; To unlock the true potential of individuals, teams, and the community. We believe strongly in the power of sharing ideas and continuously strive to grow each other and ourselves. Internally, but also within the larger communities in which we are active."
        photoPosition="right"
        textColor="black"
      />
      <SectionWithPhoto
        backgroundColor="bg-white"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/c_scale,q_90,w_400/v1675690301/elewa-group-website/Images/IMG_0764_twyo3k.png"
        title="Beyond business"
        description="We channel a good amount of our resources into giving back. Through projects such as our coding school in Kakuma refugee camp, training teachers in pastoral Samburu, and our open-source coding initiatives providing entry-level opportunities to hundreds of junior engineers. These projects don't necessarily have an immediate financial return, but their impact can be tangibly measured in the long-term."
        photoPosition="left"
        textColor="black"
      />
      <SectionWithPhoto
        backgroundColor="bg-black"
        imageUrl="https://res.cloudinary.com/dyl3rncv3/image/upload/v1675690302/elewa-group-website/Images/unnamed_1_m3dvll.png"
        title="Open knowledge"
        description="What we learn, we share. Through community events, open knowledge repositories, regular teaching moments (everyone a teacher), and academic partnerships. We build for today, with a lens on tomorrow."
        photoPosition="right"
        textColor="white"
      />
      <LearnMoreSection
        title="Become part of our mission"
        subtitle="and join Elewa."
      />
      <Footer />
    </div>
  );
};

export default SocialImpact;
