import { FC, useEffect, useState } from 'react';

import { Anchor, ConfigProvider, Drawer, FloatButton, Layout, Select, Typography } from 'antd';

import './plugins/reactI18n';

import { Header } from 'antd/es/layout/layout';
import React from 'react';
import { InstagramOutlined, MenuOutlined, WhatsAppOutlined } from '@ant-design/icons';

import logo from './assets/logo.png';

import i18n from './plugins/reactI18n';
import { useTranslation } from 'react-i18next';

import ru from 'antd/locale/ru_RU';
import en from 'antd/locale/en_US';
import MainLayout from './pages/MainLayout';

const App: FC = () => {
  // const themeConfig = {
  //   algorithm: [theme.darkAlgorithm],
  //   token: {
  //     colorPrimary: appCustomization.primaryColor,
  //     borderRadius: appCustomization.borderRadius,
  //     fontFamily: 'Open Sans, sans-serif',
  //     fontSize: appCustomization.fontSize,
  //     colorTextBase: appCustomization.colorTextBase,
  //     colorBgContainer: appCustomization.theme === 'dark' ? '#000000' : '#FFFFFF',
  //     screenXXLMin: 2500,
  //     screenXXL: 2500,
  //   },
  //   components: {
  //     Typography: {
  //       titleMarginTop: 0,
  //       titleMarginBottom: 0,
  //     },
  //   },
  // };

  {
    /* <Button className="md:bg-black md:text-white xl:bg-white xl:text-black sm:bg-slate-500 sm:text-green-300 lg:bg-orange-900 lg:text-red-600">
          Hanle
        </Button> */
  }

  const topRef = React.useRef<HTMLDivElement>(null);
  const [targetOffset, setTargetOffset] = useState<number>();

  const { t } = useTranslation();

  const [open, setOpen] = useState(false);

  const [language, setLanguage] = useState('ru');

  const currentLanguage = () => {
    if (language === 'en') {
      return en;
    }
    if (language === 'ru') {
      return ru;
    }
  };

  useEffect(() => {
    setTargetOffset(topRef.current?.clientHeight);
  }, []);

  return (
    <ConfigProvider
      locale={currentLanguage()}
      theme={{
        components: {
          FloatButton: { colorText: 'black' },
          Drawer: { colorIcon: 'white' },
          Select: { colorText: 'black', colorTextLabel: 'black' },
          Radio: { colorText: 'black', colorTextLabel: 'black' },
          Input: { colorText: 'black', colorTextLabel: 'black', colorTextBase: 'black' },
          Message: { colorText: 'black' },
          Modal: { colorText: 'black', titleColor: 'black', colorTextLabel: 'black ' },
        },
        token: {
          colorPrimary: '#ff0000',
          // colorPrimary: '#fa8c16',
          // colorInfo: '#fa8c16',
          colorInfo: '#ff0000',
          colorText: 'white',
        },
      }}
    >
      <Layout>
        <FloatButton.BackTop visibilityHeight={400} />
        <Drawer
          style={{ background: '#172979' }}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <div className="flex h-full flex-col justify-between">
            <Anchor
              targetOffset={targetOffset}
              onClick={() => {
                setOpen(false);
              }}
              items={[
                {
                  key: 'products',
                  href: '#products',
                  title: (
                    <Typography.Text className="text-[22px] mr-3 ml-3  font-DINProCond font-semibold">
                      {t('Products').toUpperCase()}
                    </Typography.Text>
                  ),
                },
                {
                  key: 'distributors',
                  href: '#distributors',
                  title: (
                    <Typography.Text className="text-[22px] mr-3 ml-3 font-DINProCond font-semibold">
                      {t('BecomeDistributor').toUpperCase()}
                    </Typography.Text>
                  ),
                },
                {
                  key: 'contacts',
                  href: '#contacts',
                  title: (
                    <Typography.Text className="text-[22px] mr-3 ml-3 font-DINProCond font-semibold">
                      {t('ContactUs').toUpperCase()}
                    </Typography.Text>
                  ),
                },
              ]}
            />

            <div className="gap-4 flex flex-col">
              <Select
                value={language}
                onChange={(value) => {
                  i18n.changeLanguage(value);
                  setLanguage(value);
                  localStorage.setItem('I18N_LANGUAGE', value);
                }}
                options={[
                  { id: 1, label: 'Русский', key: 1, value: 'ru' },
                  { id: 2, label: 'English', key: 2, value: 'en' },
                ]}
              />
              <div className="flex justify-between">
                <Typography.Text className="text-[22px] mr-3 ml-3 font-DINProCond font-semibold">
                  {'© BILER DRINKS ' + new Date().getFullYear()}
                </Typography.Text>
                <div className="flex gap-3">
                  <a target="_blank" href="https://www.instagram.com/biler.drinks?igsh=ODNjZDJ1bmlrdm42">
                    <InstagramOutlined style={{ fontSize: 30 }} onClick={() => {}} />
                  </a>
                  <a target="_blank" href="https://www.whatsapp.com/?lang=ru_RU">
                    <WhatsAppOutlined style={{ fontSize: 30 }} onClick={() => {}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
        <Header className="z-50 bg-gradient-to-b from-[#172979] to-[rgba(22,40,116,0.02)] bg-transparent  h-[100px] fixed top-0 right-0 left-0 pt-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {/* <Typography.Text className="text-4xl pr-10">Biler Drinks</Typography.Text> */}
              <img
                src={logo}
                alt="logo"
                height={50}
                width={48}
                className="mr-11"
                onClick={() => {
                  window.scroll(0, 0);
                  window.location.reload();
                }}
              />
              <Anchor
                className="hidden md:block"
                direction="horizontal"
                targetOffset={targetOffset}
                items={[
                  {
                    key: 'products',
                    href: '#products',

                    title: (
                      <Typography.Text className="text-[22px] mr-3 ml-3  font-DINProCond font-semibold">
                        {t('Products').toUpperCase()}
                      </Typography.Text>
                    ),
                  },
                  {
                    key: 'distributors',
                    href: '#distributors',
                    title: (
                      <Typography.Text className="text-[22px] mr-3 ml-3 font-DINProCond font-semibold">
                        {t('BecomeDistributor').toUpperCase()}
                      </Typography.Text>
                    ),
                  },
                  {
                    key: 'contacts',
                    href: '#contacts',
                    title: (
                      <Typography.Text className="text-[22px] mr-3 ml-3 font-DINProCond font-semibold">
                        {t('ContactUs').toUpperCase()}
                      </Typography.Text>
                    ),
                  },
                ]}
              />
            </div>
            <div className="gap-3 flex justify-center items-center">
              <a
                className="hidden md:flex"
                target="_blank"
                href="https://www.instagram.com/biler.drinks?igsh=ODNjZDJ1bmlrdm42"
              >
                <InstagramOutlined style={{ fontSize: 30 }} onClick={() => {}} />
              </a>
              <a className="hidden md:flex" target="_blank" href="https://www.whatsapp.com/?lang=ru_RU">
                <WhatsAppOutlined style={{ fontSize: 30 }} onClick={() => {}} />
              </a>
              <Select
                className="hidden md:flex"
                value={language}
                onChange={(value) => {
                  i18n.changeLanguage(value);
                  setLanguage(value);
                  localStorage.setItem('I18N_LANGUAGE', value);
                }}
                options={[
                  { id: 1, label: 'Русский', key: 1, value: 'ru' },
                  { id: 2, label: 'English', key: 2, value: 'en' },
                ]}
              />

              <a className="flex md:hidden">
                <MenuOutlined
                  style={{ fontSize: 30 }}
                  onClick={() => {
                    setOpen(true);
                  }}
                />
              </a>
            </div>
          </div>
        </Header>
        {/* <Layout>
          <Content className="bg-gradient-to-b from-[#172979] to-[rgba(22,40,116,0.02)] h-screen"></Content>
          <Content id="products" className="bg-gradient-to-b from-[#172979] to-[rgba(22,40,116,0.02)] h-screen"></Content>
          <Content id="distributors" className="h-screen">
            {' '}
            Content2{' '}
          </Content>
          <Content id="contacts" className="h-screen">
            {' '}
            Content3{' '}
          </Content>
        </Layout> */}
        <MainLayout />
      </Layout>
    </ConfigProvider>
  );
};
export default App;
