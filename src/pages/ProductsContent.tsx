import pineapple from '../assets/products/ananas.webp';
import lemon from '../assets/products/lemon.webp';
import raspberry from '../assets/products/raspberry.webp';
import pomegranate from '../assets/products/pomegranate.webp';
import currant from '../assets/products/currant.webp';
import orange from '../assets/products/orange.webp';
import iced_coffee from '../assets/products/coffee.webp';
import carbonated_coffee from '../assets/products/carbonated_coffee.webp';
import mineralized_water from '../assets/products/mineralized_water.webp';
import carbonated_water from '../assets/products/carbonated_water.webp';
import { Button, Radio } from 'antd';
import { useEffect, useState } from 'react';
import { t } from 'i18next';
import { SizeType } from 'antd/es/config-provider/SizeContext';

const ProductsContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const productsList = [
    { value: 'pineapple', image: pineapple },
    { value: 'lemon', image: lemon },
    { value: 'raspberry', image: raspberry },
    { value: 'pomegranate', image: pomegranate },
    { value: 'currant', image: currant },
    { value: 'orange', image: orange },
    { value: 'iced_coffee', image: iced_coffee },
    { value: 'carbonated_coffee', image: carbonated_coffee },
    { value: 'mineralized_water', image: mineralized_water },
    { value: 'carbonated_water', image: carbonated_water },
  ];

  const [radioSize, setRadioSize] = useState<SizeType>('middle');

  useEffect(() => {
    productsList.forEach((product) => {
      const img = new Image();
      img.src = product.image;
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setRadioSize(window.innerWidth < 1315 ? 'small' : 'middle');
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % productsList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + productsList.length) % productsList.length);
  };

  const generateProductList = () => {
    return productsList.map((product) => ({
      label: <div className="font-Oswald_Medium text-[16px]">{t(product.value)}</div>,
      value: product.value,
    }));
  };

  return (
    <div className="uppercase text-white font-Oswald_Medium font-normal flex flex-col min-h-fit bg-gradient-to-b from-[#01326F] to-[#0E1225] h-screen">
      <div className="h-0 w-1/2 self-center relative border-[25px] md:border-[60px] border-t-[#0E1326] md:border-t-[#0E1326] border-x-transparent md:border-x-transparent border-b-0 md:border-b-0 md:border-solid border-solid p-12" />

      <div className="relative mx-10">
        {/* Затемненный фон */}
        <div className="absolute inset-0 bg-black opacity-40 blur-[10px] z-10 h-[60vh]" />
        {/* Размытая фоновая картинка */}
        <img
          src={productsList[currentIndex].image}
          alt="drink"
          className="h-[60vh] w-screen z-0 blur-[16px] object-cover absolute inset-0"
        />

        <div className="flex">
          <div className="absolute z-40 h-[60vh] w-full flex items-start">
            {/* Картинка слева */}
            <div className="h-[60vh] hidden md:flex">
              <button onClick={handlePrev} className=" absolute lg:hidden top-1 left-1 z-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <img
                src={productsList[currentIndex].image}
                alt="drink"
                className="h-[60vh] w-auto z-20 object-contain rounded-md"
              />
              <button onClick={handleNext} className="absolute lg:hidden top-1 right-1 z-[100]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="h-[60vh] w-screen flex items-center justify-center md:hidden">
              <button onClick={handlePrev} className="absolute top-1 left-1 z-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M15 19l-7-7 7-7"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <img
                src={productsList[currentIndex].image}
                alt="drink"
                className="h-[60vh] w-auto z-20 object-contain rounded-md items-center justify-center"
              />
              <button onClick={handleNext} className="absolute top-1 right-1 z-[100]">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 5l7 7-7 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            {/* Тайтл справа с отступом 30px + отступ сверху */}
            <div className=" hidden lg:flex flex-col justify-around items-start  w-[60%] z-50 flex-grow ml-[30px] h-[60vh]">
              <div className=" text-[44px] font-Oswald_Medium "> {t(productsList[currentIndex].value)} </div>

              <div className="text-[24px] font-Oswald_Medium  ">{`#${t(`${productsList[currentIndex].value}_phrase`)}`}</div>
              <div className="text-[18px] font-bold">{t(`${productsList[currentIndex].value}_description`)}</div>

              <Button
                type="primary"
                className="pt-[20px] pb-[20px] pr-[20px] pl-[20px] mt-4 w-full mr-[30px]"
                onClick={() => {
                  window.location.href = 'mailto:biler.distribute@gmail.com';
                }}
              >
                <div className="pt-[0px]">
                  <h2 className=" text-[18px] font-Oswald_Medium md:text-[24px] uppercase"> {t('Buy')}</h2>
                </div>
              </Button>
            </div>
            <div className=" hidden md:flex lg:hidden flex-col justify-around items-start  w-[30%] z-50 flex-grow ml-[30px] h-[60vh]">
              <div className=" text-[32px] font-Oswald_Medium "> {t(productsList[currentIndex].value)} </div>

              <div className="text-[20px] font-Oswald_Medium  ">{`#${t(`${productsList[currentIndex].value}_phrase`)}`}</div>
              <div className="text-[15px] font-bold">{t(`${productsList[currentIndex].value}_description`)}</div>

              <Button
                type="primary"
                className="pt-[20px] pb-[20px] pr-[20px] pl-[20px] mt-4 w-full mr-[30px]"
                onClick={() => {}}
              >
                <div className="pt-[0px]">
                  <h2 className=" text-[18px] font-Oswald_Medium md:text-[24px] uppercase"> {t('Buy')}</h2>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[60vh] w-screen mb-10" />
      <div className="hidden lg:flex justify-center items-center mt-10 ">
        <Radio.Group
          // block
          size={radioSize} // todo make small if display width is smaller than 1315
          // onChange={(e) => {
          //   console.log(e.target.value);
          //   setProduct(e.target.value);
          // }}
          // options={[
          // { label: <div className="font-Oswald_Medium ">{t('pineapple')} </div>, value: 'pineapple' },
          //   { label: <div className="font-Oswald_Medium "> {t('lemon')} </div>, value: 'lemon' },
          //   { label: <div className="font-Oswald_Medium "> {t('lemon')} </div>, value: 'lemon' },
          //   // { label: 'Carbonated coffee', value: 'Carbonated coffee' },
          //   // { label: 'Mineral Water', value: 'Mineral Water' },
          //   // { label: 'Carbonated Water', value: 'Carbonated Water' },
          //   // { label: 'Raspberry', value: 'Raspberry' },
          //   // { label: 'Pomegranate', value: 'Pomegranate' },
          //   // { label: 'Currant', value: 'Currant' },
          //   // // { label: 'Carbonated water', value: 'Apple' },
          //   // { label: 'Iced coffee', value: 'Iced coffee' },
          //   // // { label: 'Apple', value: 'Apple' },
          // ]}

          onChange={(e) => {
            const newIndex = productsList.findIndex((p) => p.value === e.target.value);
            if (newIndex !== -1) setCurrentIndex(newIndex);
          }}
          value={productsList[currentIndex].value}
          options={generateProductList()}
          defaultValue="pineapple"
          optionType="button"
          buttonStyle="solid"
        />
      </div>
      <div className="md:hidden  items-center justify-center mx-10">
        <Button
          type="primary"
          className="pt-[20px] pb-[20px] pr-[20px] pl-[20px] mt-4 w-full mr-[30px]"
          onClick={() => {
            window.location.href = 'mailto:biler.distribute@gmail.com';
          }}
        >
          <div className="pt-[0px]">
            <h2 className=" text-[18px] font-Oswald_Medium md:text-[24px] uppercase"> {t('Buy')}</h2>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default ProductsContent;
