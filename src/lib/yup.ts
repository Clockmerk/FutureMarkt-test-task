import * as yup from 'yup'

export const schema = yup.object({
  name: yup
    .string()
    .required('Введите ваше имя')
    .matches(/^[a-zA-Za-яА-ЯёЁ]+$/, 'Только буквы')
    .min(2, 'Минимум 2 символа')
    .max(30, 'Максимум 30 символов'),
  phone: yup
    .string()
    .required('Введите ваш телефон')
    .matches(/^\+7\d{10}$/, 'Неверный формат телефона'),
  check: yup.boolean().isTrue('Согласие на обработку данных обязательно')
})
