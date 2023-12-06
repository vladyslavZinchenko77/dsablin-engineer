// import { FC } from 'react';
// import './ButtonMain.scss';

// interface ButtonMainProps {
//   children: string;
//   style?: React.CSSProperties;
//   href?: string;
//   onСlick?: () => void;
// }

// const ButtonMain: FC<ButtonMainProps> = ({
//   children,
//   style,
//   href,
//   onСlick,
// }) => {
//   return (
//     <a
//       href={href}
//       download
//       onClick={onСlick}
//       style={style}
//       className="button-main"
//     >
//       {children}
//     </a>
//   );
// };

// export default ButtonMain;

import { FC } from 'react';
import './ButtonMain.scss';

interface ButtonMainProps {
  children: string;
  style?: React.CSSProperties;
  fileUrl?: string; // Добавленное свойство для передачи ссылки на файл
  onClick?: () => void;
}

const ButtonMain: FC<ButtonMainProps> = ({
  children,
  style,
  fileUrl, // Передаваемая ссылка на файл
  onClick,
}) => {
  const handleDownload = () => {
    if (fileUrl) {
      // Создаем ссылку
      const downloadLink = document.createElement('a');

      // Устанавливаем атрибуты
      downloadLink.href = fileUrl; // Путь к файлу
      downloadLink.download = 'yourFileName.ext'; // Имя файла, которое будет предложено при сохранении

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
      onClick={handleDownload} // Заменяем onСlick на handleDownload
      style={style}
      className="button-main"
    >
      {children}
    </a>
  );
};

export default ButtonMain;
