import redUnderline from '../assets/underline_red.svg';
import lightAround from '../assets/light_arround.png';
import lightning from '../assets/lightning.svg';
import { t } from 'i18next';

const EnergyContent = () => {
  return (
    <div className="bg-[#0E1225] min-h-[80vh] xl:h-screen flex justify-center flex-col ">
      <div className="flex flex-col items-center text-white">
        <div className="relative mb-[7vh] box-border">
          <p className="text-[20px] md:text-[28px] font-captureit relative z-[21] font-normal whitespace-break-spaces text-center">
            {'Biler Drinks'}
          </p>
          <img src={redUnderline} className="absolute z-20 bottom-[0px] left-[-5px] w-[110%] m-0 p-0" />
        </div>
        <p className="w-[308px] md:w-[555px] lg:w-[768px] text-[15px] font-Oswald_Medium md:text-[22px]  uppercase text-center block space letter-spacing-[-1px]">
          {t('BilerInfo')}
        </p>
        <div className="flex mt-[66px] gap-[0px] md:gap-[40px] md:mt-[80px] lg:gap-[75px]">
          <div className=" w-[81px] md:w-[110px] lg:w-[160px] mt-0 opacity-100 relative transition-all duration-500 ease-in-out">
            <img src={lightAround} className="w-full h-full" />
            <img
              src={lightning}
              className="w-[10px] md:w-[12px] lg:w-[17px] absolute inset-0 m-auto animate-tudasuda"
            />
          </div>
          <div className="flex items-center flex-col justify-center text-center  ">
            <h1 className="text-[50px] md:text-[100px] lg:text-[140px] font-normal font-Hackney whitespace-nowrap">
              [{'Biler Drinks'}]
            </h1>
            <p className="text-[15px] font-normal letter-spacing-normal w-[201px] md:text-[18px] md:w-auto lg:text-[22px] font-Oswald_Medium letter-spacing-[-1px] uppercase  lg:whitespace-nowrap">
              {t('UniqueFlavorsQuote')}
            </p>
          </div>
          <div className=" w-[81px] md:w-[110px] lg:w-[160px] mt-0 opacity-100 relative transition-all duration-500 ease-in-out">
            <img src={lightAround} className="w-full h-full" />
            <img
              src={lightning}
              className="w-[10px] md:w-[12px] lg:w-[17px] absolute inset-0 m-auto animate-tudasuda"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnergyContent;
