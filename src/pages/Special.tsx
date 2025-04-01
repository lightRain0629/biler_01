import { t } from 'i18next';
import WhyChooseUs from '../components/WhyChooseUs';

const Special = () => {
  return (
    <div className=" bg-gradient-to-b from-[#0E1225] to-[#0E1225] items-center justify-center text-white font-Oswald_Medium font-medium uppercase flex ">
      <div className="mx-4 my-8">
        <h2 className="text-[20px] md:text-[32px] font-Oswald_Medium mx-5"> {t('WhyChooseUs')} </h2>
        <WhyChooseUs />
      </div>
    </div>
  );
};

export default Special;
