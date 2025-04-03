import React from 'react';
import { WhatsAppOutlined } from '@ant-design/icons';

interface WhatsAppIconProps {
  phoneNumber: string;
  message?: string;
  className?: string;
}

const WhatsAppIcon: React.FC<WhatsAppIconProps> = ({ phoneNumber, message = '', className = '' }) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Предотвращает переход по ссылке по умолчанию
    const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;
    window.open(url, '_blank');
  };

  return (
    <a href="#" className={className} onClick={handleClick}>
      <WhatsAppOutlined style={{ fontSize: 30 }} />
    </a>
  );
};

export default WhatsAppIcon;
