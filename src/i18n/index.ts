export type Lang = 'ru' | 'en';

export const ui = {
  ru: {
    meta: {
      title: 'SCULPT — бюст В. И. Ленина из химически чистой серы',
      description:
        'Каталог бюста Владимира Ильича Ленина из химически чистой серы: материал, особенности хранения, фотографическая документация и информация о приобретении.',
    },
    form: {
      nameLabel: 'Имя',
      emailLabel: 'Email',
      messageLabel: 'Сообщение',
      submit: 'Отправить запрос',
      success: 'Спасибо. Ваш запрос отправлен.',
      invalidPrefix: 'Заполните корректно: ',
      fields: { name: 'Имя', email: 'Email', message: 'Сообщение' },
      tooMany: 'Слишком много запросов. Пожалуйста, подождите немного и попробуйте снова.',
      networkError: 'Не удалось отправить запрос. Проверьте соединение и попробуйте ещё раз.',
      serverError: 'Не удалось отправить запрос. Попробуйте ещё раз чуть позже.',
    },
    backToTop: 'Вернуться в начало',
    langSwitchAria: 'Переключить язык: русский',
    specsHeading: 'Характеристики',
    ghosts: { object: 'ОБЪЕКТ', material: 'МАТЕРИАЛ', condition: 'СОХРАННОСТЬ' },
  },
  en: {
    meta: {
      title: 'SCULPT — A Bust of Vladimir Ilyich Lenin in Chemically Pure Sulfur',
      description:
        'A catalogue of the bust of Vladimir Ilyich Lenin in chemically pure sulfur: the material, its condition and storage, photographic documentation, and acquisition information.',
    },
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      messageLabel: 'Message',
      submit: 'Send a request',
      success: 'Thank you. Your request has been sent.',
      invalidPrefix: 'Please provide a valid: ',
      fields: { name: 'Name', email: 'Email', message: 'Message' },
      tooMany: 'Too many requests. Please wait a moment and try again.',
      networkError: 'Unable to send your request. Please check your connection and try again.',
      serverError: 'Unable to send your request. Please try again later.',
    },
    backToTop: 'Back to top',
    langSwitchAria: 'Switch language: English',
    specsHeading: 'Specifications',
    ghosts: { object: 'OBJECT', material: 'MATERIAL', condition: 'CONDITION' },
  },
} as const;
