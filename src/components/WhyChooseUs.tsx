import React from 'react';

import { Card, CardContent } from './Card';
import { t } from 'i18next';

const WhyChooseUs: React.FC = () => {
  const factors = [
    {
      title: t('HealthyVitamins'),
      description: t('HealthyVitaminsContent'),
    },
    {
      title: t('EnergyWholeDay'),
      description: t('EnergyWholeDayContent'),
    },
    {
      title: t('RefreshingTaste'),
      description: t('RefreshingTasteContent'),
    },
  ];

  return (
    <section className="py-10  ">
      <div className="container mx-auto px-4">
        {/* <motion.h2
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
        ></motion.h2> */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {factors.map((factor, index) => (
            <Card key={index} className="hover:bg-[#ff5d52] text-black  hover:text-white  transition-colors">
              <CardContent>
                <h3 className="  text-xl font-semibold mb-2">{factor.title}</h3>
                <p className="">{factor.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
