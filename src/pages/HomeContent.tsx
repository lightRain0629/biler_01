import { Button, Typography } from 'antd';
import bgBlue from '../assets/bg_blue.svg';
import logo from '../assets/logo.png';
import { t } from 'i18next';

const HomeContent = () => {
  return (
    <div className="bg-[#0E1225] h-screen overflow-x-hidden relative min-h-screen  ">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgb(25,48,147)_0%,_rgb(25,48,147)_33%,_rgba(25,48,147,0.53)_60%,_rgba(25,48,147,0)_100%)] h-full md:h-[70%] lg:h-[70%] xl:h-[70%] 2xl:h-full sm:h-full" />
      <div
        className=" flex 
         
                h-full "
        // h-full md:h-[70%] lg:h-[70%] xl:h-[70%] 2xl:h-full sm:h-full" bg-[linear-gradient(180deg,_rgb(25,48,147)_0%,_rgb(25,48,147)_33%,_rgba(25,48,147,0.53)_60%,_rgba(25,48,147,0)_100%)]
      >
        {/* <div className="bg-gradient-to-b from-[#172979] to-[rgba(22,40,116,0.02)]"> */}
        {/* <div className="bg-gradient-to-b from-[#172979] to-[rgba(22,40,116,0.02)] "> */}
        <img
          src={bgBlue}
          alt="bgBlue"
          className="absolute z-5 md:block overflow-clip md:w-full md:h-[500px] lg:h-auto xl:h-auto xxl:h-auto object-cover"
        />
        <div className="overflow-clip max-w-none">
          <img
            src={bgBlue}
            alt="bgBlue"
            className="absolute box-border object-fill max-w-none  overflow-clip overflow-x-clip overflow-y-clip md:hidden"
            style={{ overflowClipMargin: 'content-box', boxSizing: 'border-box', overflow: 'clip', overflowX: 'clip' }}
          />
        </div>
        <div className="flex flex-col justify-end pl-12  pr-12 w-fit leading-none z-15 relative mt-auto  mb-[50px]">
          <div>
            <img src={logo} alt="logo" className="w-[238px]  md:w-[478px] mb-6" />
          </div>

          <h2 className="text-[20px] font-captureit md:text-[36px]"> {t('VictoryNotCoincidence')}</h2>
          <Typography.Text className=" text-[18px] md:text-[30px] font-Oswald_Medium">
            {t('EnergyDrinksMainQuote')}
          </Typography.Text>

          <Button
            type="primary"
            className="pt-[20px] pb-[20px] pr-[20px] pl-[20px] mt-4 "
            onClick={() => {
              // window.location.href = '#part-1';
              window.location.assign('#products');
            }}
          >
            <div className="pt-[0px]">
              <h2 className=" text-[18px] font-captureit md:text-[24px]"> {t('Recharge')}</h2>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
