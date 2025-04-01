import { FC } from 'react';

import Layout, { Content } from 'antd/es/layout/layout';
import HomeContent from './HomeContent';
import EnergyContent from './EnergyContent';
import ProductsContent from './ProductsContent';
import Special from './Special';
import ContactForm from './ContactForm';
import Footer from './Footer';

const MainLayout: FC = () => {
  return (
    <Layout>
      <Content className="h-screen flex flex-col pb-[5vh] border-none">
        <HomeContent />
      </Content>
      <Content className="min-h-[60vh] xl:h-screen">
        <EnergyContent />
      </Content>

      <Content id="products" className="h-screen">
        <ProductsContent />
      </Content>
      <Content>
        <Special />
      </Content>
      <Content id="distributors">
        <ContactForm />
      </Content>
      <Content id="contacts">
        <Footer />
      </Content>
    </Layout>
  );
};
export default MainLayout;
