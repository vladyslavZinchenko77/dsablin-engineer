import { FC } from 'react';
import './ButtonMainLink.scss';

interface ButtonMainLinkProps {
  children: string;
  style?: React.CSSProperties;
  fileUrl?: string; // Добавленное свойство для передачи ссылки на файл
  onClick?: () => void;
  isBlack: boolean;
}

const ButtonMainLink: FC<ButtonMainLinkProps> = ({
  children,
  style,
  fileUrl, // Передаваемая ссылка на файл
  onClick,
  isBlack,
}) => {
  const handleDownload = () => {
    if (fileUrl) {
      // Создаем ссылку
      const downloadLink = document.createElement('a');

      // Устанавливаем атрибуты
      downloadLink.href = fileUrl; // Путь к файлу

      downloadLink.target = '_blank';
      // Добавляем ссылку в DOM
      document.body.appendChild(downloadLink);

      // Запускаем событие клика
      downloadLink.click();

      // Удаляем ссылку из DOM
      document.body.removeChild(downloadLink);
    }

    // Вызываем переданный onClick, если он есть
    if (onClick) {
      onClick();
    }
  };

  return (
    <a
      href={fileUrl} // Используем fileUrl в href
      download
      onClick={handleDownload}
      style={style}
      className={isBlack ? 'button-main-black' : 'button-main'}
    >
      {children}
    </a>
  );
};

export default ButtonMainLink;
