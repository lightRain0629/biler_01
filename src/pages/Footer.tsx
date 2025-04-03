import { t } from 'i18next';
import logo from '../assets/logo.png';
import { InstagramOutlined } from '@ant-design/icons';
import WhatsAppIcon from './WhatsAppIcon';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#01326F] to-[#0E1225] text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {/* Логотип и описание */}
        <div>
          <img src={logo} alt="logo" className="w-[300px]" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">BILER DRINKS</h2>
          {/* Replace this by address */}
          {/* <p className="text-gray-400">{t('FooterDecsription')}</p> */}
          <p className="text-gray-400">{t('UniqueFlavorsQuote')}</p>
        </div>
        {/* Ссылки на страницы */}
        {/* <div>
          <h3 className="text-xl font-bold mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                {t('Products')}
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Услуги
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Контакты
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white">
                Блог
              </a>
            </li>
          </ul>
        </div> */}
        {/* Контакты и соцсети */}
        <div>
          <h3 className="text-xl font-bold mb-4 uppercase"> {t('ContactUs')} </h3>
          <p className="text-gray-400 mb-2">
            Email:{' '}
            <a
              onClick={() => {
                window.location.href = 'mailto:biler.drinks@gmail.com';
              }}
            >
              biler.drinks@gmail.com
            </a>{' '}
          </p>
          <p className="text-gray-400 mb-2">
            {`${t('DistributionInquiries')}: `}
            <a
              onClick={() => {
                window.location.href = 'mailto:biler.distribute@gmail.com';
              }}
            >
              biler.distribute@gmail.com
            </a>{' '}
          </p>
          <p className="text-gray-400 mb-2"> {`${t('WhatsApp')}: +993 62 89 29 70 / +993 61 42 94 01`} </p>
          <p className="text-gray-400 mb-4"> {`${t('PhoneNo')}: +993 62 89 29 70 / +993 61 42 94 01`} </p>
          <div className="flex gap-3">
            <a target="_blank" href="https://www.instagram.com/biler.drinks?igsh=ODNjZDJ1bmlrdm42">
              <InstagramOutlined style={{ fontSize: 30 }} onClick={() => {}} />
            </a>
            {/* <a target="_blank" href="https://www.whatsapp.com/?lang=ru_RU">
              <WhatsAppOutlined style={{ fontSize: 30 }} onClick={() => {}} />
            </a> */}
            <WhatsAppIcon phoneNumber="99362892970" message={t('WhatsAppPreMessage')} />
          </div>
        </div>{' '}
        {/* {'© BILER DRINKS ' + new Date().getFullYear()} */}
      </div>
      {/* <div className="text-center text-gray-500 mt-10"> {`© ${new Date().getFullYear()} BILER DRINKS`}</div> */}
      <div className="text-center text-gray-500 mt-10">{`© ${new Date().getFullYear()} BILER DRINKS. ${t('AllRightsReserved')}.`}</div>
    </footer>
  );
};

export default Footer;
