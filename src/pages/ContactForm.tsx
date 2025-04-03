import React, { useMemo, useState } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import emailjs from 'emailjs-com';
import { t } from 'i18next';

const Context = React.createContext({ name: 'Default' });

const ContactForm: React.FC = () => {
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();
  const [isLoading, setIsLoading] = useState(false);

  const success = () => {
    modal.success({
      title: <h2 className="text-black"> {t('SuccessRequestDistTitle')} </h2>,
      content: <h2> {t('SuccessRequestDist')} </h2>,
    });
  };

  const errorMessage = () => {
    modal.error({
      title: <h2 className="text-black">{t('SomethingWentWrong')}</h2>,
      content: <h2>{t('ErrorRequestDist')}</h2>,
    });
  };

  const onFinish = (values: any) => {
    const { companyName, inn, phoneNumber, email } = values;

    const templateParams = {
      time: new Date().toISOString(),
      company_name: companyName,
      inn,
      phone_number: phoneNumber,
      email,
    };
    setIsLoading(true);
    emailjs
      .send('service_tt44rvc', 'template_t0wz8uj', templateParams, 'vQY8gMnFn1rlgIBjx')
      .then(() => {
        setIsLoading(false);
        success();
        form.resetFields();
      })
      .catch(() => {
        setIsLoading(false);
        errorMessage();
      });
  };

  const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  return (
    <div className="h-screen bg-gradient-to-b from-[#0E1225] to-[#01326F] text-white flex items-center justify-center font-Oswald_Medium">
      {contextHolder}
      <Context.Provider value={contextValue}>
        <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Block */}
          <div className="text-center lg:text-left space-y-4 lg:space-y-6">
            <h1 className="text-4xl lg:text-6xl font-bold uppercase"> {t('BecomeADistributor')} </h1>
            <h4 className="text-xl lg:text-2xl"> {t('BecomeADistributorContent')} </h4>
          </div>

          {/* Form Block */}
          <Form
            size="large"
            form={form}
            name="contact_form"
            layout="vertical"
            onFinish={onFinish}
            className="bg-white p-8 rounded-lg shadow-md text-black"
          >
            <Form.Item
              label={
                <h2 className="text-[16px] md:text-[18px] font-Oswald_Medium  text-black"> {t('CompanyName')} </h2>
              }
              name="companyName"
              rules={[{ required: true, message: t('CompanyNameFieldError') }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<h2 className="text-[16px] md:text-[18px] font-Oswald_Medium text-black"> {t('INN')} </h2>}
              name="inn"
              rules={[{ required: true, message: t('INNFieldError') }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<h2 className="text-[16px] md:text-[18px] font-Oswald_Medium text-black"> {t('PhoneNo')} </h2>}
              name="phoneNumber"
              rules={[{ required: true, message: t('PhoneNoFieldError') }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label={<h2 className="text-[16px] md:text-[18px] font-Oswald_Medium text-black"> {t('Email')} </h2>}
              name="email"
              rules={[
                { required: true, message: t('EmailFieldError') },
                { type: 'email', message: t('EmailNotCorrect') },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="w-full text-white" loading={isLoading}>
                {/* <Button type="primary" htmlType="submit" className="w-full bg-[#01326F] hover:bg-[#012454] text-white"> */}
                <h2 className="text-[18px] md:text-[24px] font-Oswald_Medium uppercase"> {t('Submit')}</h2>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Context.Provider>
    </div>
  );
};

export default ContactForm;
