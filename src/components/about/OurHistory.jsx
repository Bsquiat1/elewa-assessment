import React from 'react';
import HistoryItem from './HistoryItem';

const OurHistory = () => {
  return (
    <div className="bg-gray-100 p-8 relative overflow-hidden">
      <h2 className="text-6xl font-normal text-left mb-28 mt-20 ml-20">Our History</h2>
      <div class="-lg mx-auto">
        <div className="relative">
          <div className="h-2 w-full bg-black absolute top-0 mt-5 ml-20"></div>
          <div className="flex items-center space-x-8 mt-8">
            <HistoryItem year="2015" title="Elewa is born">
              From a Belgian garage and Embakasi apartment, Elewa first sees the light as a purely SaaS-based EdTech analyzing KCSE past papers.
            </HistoryItem>

            <HistoryItem year="2017" title="Kickstarting Elewa Education">
              Kickstarting Elewa Education With an initial pre-seed investment of friends and family and a master's thesis on the subject, Elewa pilots its innovative "Four Pillars" model in 5 secondary schools across Kenya. Learning outcomes go through the roof in only one term.
            </HistoryItem>

            <HistoryItem year="2018" title="Commercial exploration">
              Commercial exploration Successfully piloting in 5 schools, Elewa Education is ready for the market. Elewa founds Elewa Investment, a cooperative fund in Belgium aimed at fueling the growth of Elewa. Elewa launching four commercial services across schools in Kenya.
            </HistoryItem>

            <HistoryItem year="2019" title="Elewa on the map">
              Elewa on the map Elewa is recognized by UNESCO as the Kenyan representative and a top 10 innovation in the UNESCO ICT in Education Prize (Theme AI & education). Elewa joins the fourth Cohort of the "Google for Startups Africa" accelerator program.
            </HistoryItem>
          </div>
        </div>
      </div>
    </div>
  );
};



export default OurHistory;
