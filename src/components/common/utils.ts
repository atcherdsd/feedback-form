export const formSignatures = {
	title: "Свяжитесь с нами",
	name: "Имя",
	email: "Email",
	phone: "Телефон",
	message: "Сообщение",
	button: "Подробнее о форме",
	submit: "Отправить сообщение",
};

export const placeholders = {
	email: "example@gmail.com",
	phone: "+375(__)___-__-__",
	message: "Введите сообщение длиной до 500 символов",
};

export const errors = {
	empty: "Заполните поле",
	email: "Email-адрес не корректен",
	phone: "Введен неполный номер телефона",
};

export const popupContent = [
	{
		title: "Обратите внимание",
	},
	{
		item: "Все поля формы обязательны к заполнению",
	},
	{
		item: `Нажатием кнопки "${formSignatures.submit}" Вы подтверждаете, что ознакомлены с политикой конфиденциальности и согласны на обработку Ваших персональных данных`,
	},
	{
		button: "Закрыть окно",
	},
];
