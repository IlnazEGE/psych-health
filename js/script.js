// ======webp===========
function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
});
// ======webp===========

// ======устройство пользователя===========
const isMobile = {
	Android: function () {
		return navigator.userAgent.match(/Android/i);
	},
	BlackBerry: function () {
		return navigator.userAgent.match(/BlackBerry/i);
	},
	iOS: function () {
		return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	},
	Opera: function () {
		return navigator.userAgent.match(/Opera Mini/i);
	},
	Windows: function () {
		return navigator.userAgent.match(/IEMobile/i);
	},
	any: function () {
		return (
			isMobile.Android() ||
			isMobile.BlackBerry() ||
			isMobile.iOS() ||
			isMobile.Opera() ||
			isMobile.Windows());
	}
};
// ======устройство пользователя===========

// ========Menu=========
let openFixedMenu = document.querySelector(".header-fixed__burger");
let openMenu = document.querySelector(".header__burger");
let closeMenu = document.querySelector(".top-header-left__close");
let menuBody = document.querySelector(".header-left");
openMenu.addEventListener("click", function () {
	menuBody.classList.add("active");
});
openFixedMenu.addEventListener("click", function () {
	menuBody.classList.add("active");
});
closeMenu.addEventListener("click", function () {
	menuBody.classList.remove("active");
});
// ========Menu=========

// ======Tabs==========
// let tabs = document.querySelectorAll("._tabs");
// for (let index = 0; index < tabs.length; index++) {
// 	let tab = tabs[index];
// 	let tabs_items = tab.querySelectorAll("._tabs-item");
// 	let tabs_blocks = tab.querySelectorAll("._tabs-block");
// 	for (let index = 0; index < tabs_items.length; index++) {
// 		let tabs_item = tabs_items[index];
// 		tabs_item.addEventListener("click", function (e) {
// 			for (let index = 0; index < tabs_items.length; index++) {
// 				let tabs_item = tabs_items[index];
// 				tabs_item.classList.remove('active');
// 				tabs_blocks[index].classList.remove('active');
// 			}
// 			tabs_item.classList.add('active');
// 			tabs_blocks[index].classList.add('active');
// 			e.preventDefault();
// 		});
// 	}
// }
// ======Tabs==========

// =====SlideToggle===========
// let _slideUp = (target, duration = 500) => {
// 	target.style.transitionProperty = 'height, margin, padding';
// 	target.style.transitionDuration = duration + 'ms';
// 	target.style.height = target.offsetHeight + 'px';
// 	target.offsetHeight;
// 	target.style.overflow = 'hidden';
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	window.setTimeout(() => {
// 		target.style.display = 'none';
// 		target.style.removeProperty('height');
// 		target.style.removeProperty('padding-top');
// 		target.style.removeProperty('padding-bottom');
// 		target.style.removeProperty('margin-top');
// 		target.style.removeProperty('margin-bottom');
// 		target.style.removeProperty('overflow');
// 		target.style.removeProperty('transition-duration');
// 		target.style.removeProperty('transition-property');
// 		target.classList.remove('_slide');
// 	}, duration);
// }
// let _slideDown = (target, duration = 500) => {
// 	target.style.removeProperty('display');
// 	let display = window.getComputedStyle(target).display;
// 	if (display === 'none')
// 		display = 'block';

// 	target.style.display = display;
// 	let height = target.offsetHeight;
// 	target.style.overflow = 'hidden';
// 	target.style.height = 0;
// 	target.style.paddingTop = 0;
// 	target.style.paddingBottom = 0;
// 	target.style.marginTop = 0;
// 	target.style.marginBottom = 0;
// 	target.offsetHeight;
// 	target.style.transitionProperty = "height, margin, padding";
// 	target.style.transitionDuration = duration + 'ms';
// 	target.style.height = height + 'px';
// 	target.style.removeProperty('padding-top');
// 	target.style.removeProperty('padding-bottom');
// 	target.style.removeProperty('margin-top');
// 	target.style.removeProperty('margin-bottom');
// 	window.setTimeout(() => {
// 		target.style.removeProperty('height');
// 		target.style.removeProperty('overflow');
// 		target.style.removeProperty('transition-duration');
// 		target.style.removeProperty('transition-property');
// 		target.classList.remove('_slide');
// 	}, duration);
// }
// let _slideToggle = (target, duration = 500) => {
// 	if (!target.classList.contains('_slide')) {
// 		target.classList.add('_slide');
// 		if (window.getComputedStyle(target).display === 'none') {
// 			return _slideDown(target, duration);
// 		} else {
// 			return _slideUp(target, duration);
// 		}
// 	}
// }
// ======SlideToggle===========

// ======Spollers===========
// let spollers = document.querySelectorAll("._spoller");
// let spollersGo = true;
// if (spollers.length > 0) {
// 	for (let index = 0; index < spollers.length; index++) {
// 		const spoller = spollers[index];
// 		spoller.addEventListener("click", function () {
// 			if (spollersGo) {
// 				spollersGo = false;
// 				if (spoller.classList.contains('_spoller-992') && window.innerWidth > 992) {
// 					return false;
// 				}
// 				if (spoller.classList.contains('_spoller-768') && window.innerWidth > 768) {
// 					return false;
// 				}
// 				if (spoller.closest('._spollers').classList.contains('_one')) {
// 					let curent_spollers = spoller.closest('._spollers').querySelectorAll('._spoller');
// 					for (let i = 0; i < curent_spollers.length; i++) {
// 						let el = curent_spollers[i];
// 						if (el != spoller) {
// 							el.classList.remove('_active');
// 							_slideUp(el.nextElementSibling);
// 						}
// 					}
// 				}
// 				spoller.classList.toggle('_active');
// 				_slideToggle(spoller.nextElementSibling);

// 				setTimeout(function () {
// 					spollersGo = true;
// 				}, 500);
// 			}
// 		});
// 	}
// }
// ======Spollers===========

//======fixed шапки==========
const headerFixed = document.querySelector('.header-fixed');

window.addEventListener('scroll', () => {
	let scrollDistance = window.scrollY;


	// 	//======fixed после первой секции===========
	if (scrollDistance >= 1000) {
		headerFixed.classList.add('active');
	} else {
		headerFixed.classList.remove('active');
	}
	// 	//======fixed после первой секции===========
});
// 	//======fixed при скролле вверх===========
// 	// if (scrollDistance > lastScrollTop) {
// 	// 	header.classList.remove('header_fixed');
// 	// 	first.style.marginTop = null;
// 	// } else {
// 	// 	header.classList.add('header_fixed');
// 	// 	first.style.marginTop = `${headerHeight}px`;
// 	// }

// 	// if (scrollDistance === 0) {
// 	// 	header.classList.remove('header_fixed');
// 	// 	first.style.marginTop = null;
// 	// }

// 	// lastScrollTop = scrollDistance;
// 	//======fixed при скролле вверх===========
// });
//======fixed шапки==========


// ======Скролл по якорям==========
// const anchors = document.querySelectorAll('.goto');

// for (let anchor of anchors) {
// 	anchor.addEventListener('click', function (e) {
// 		e.preventDefault();
// 		const blockID = document.querySelector(anchor.getAttribute('href'));

// 		blockID.scrollIntoView({
// 			block: "center",
// 			behavior: "smooth"
// 		});
// 	})
// }
// ======Скролл по якорям==========

// ======Lazy Load img==========
// const lazyImages = document.querySelectorAll('img.lazyload');
// const windowHeight = document.documentElement.clientHeight;

// let lazyImagesPositions = [];

// lazyImages.forEach(img => {
// 	lazyImagesPositions.push(img.getBoundingClientRect().top + window.scrollY);
// 	lazyScrollCheck();
// });

// window.addEventListener("scroll", lazyScroll);

// function lazyScroll() {
// 	if (document.querySelectorAll('img.lazyload').length > 0) {
// 		lazyScrollCheck();
// 	}
// }


// function lazyScrollCheck() {
// 	let imgIndex = lazyImagesPositions.findIndex(
// 		item => window.scrollY > item - windowHeight
// 	);
// 	if (imgIndex >= 0) {
// 		newImgsrc = lazyImages[imgIndex].dataset.src.replace(/.jpg|.png|.svg|.gif|.ico/, '.webp');
// 		lazyImages[imgIndex].previousElementSibling.srcset = newImgsrc;
// 		lazyImages[imgIndex].src = lazyImages[imgIndex].dataset.src;
// 		lazyImages[imgIndex].removeAttribute('data-src');

// 		delete lazyImagesPositions[imgIndex];
// 	}
// }
// ======Lazy Load img==========


// ======ПРЕЛОАДЕР==========
// window.onload = function () {
// 	document.querySelector('.wrapper').classList.add('loaded');
// }
// ======ПРЕЛОАДЕР==========

//======stepper===========================
// const stepper = document.querySelector('.stepper');
// const stepperInput = stepper.querySelector('.stepper__input');
// const stepperBtnUp = stepper.querySelector('.stepper__btn_up');
// const stepperBtnDown = stepper.querySelector('.stepper__btn_down');

// let count = stepperInput.value;

// const isNotApple = () => {
// 	if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
// 		return false;
// 	}
// 	return true;
// };

// function allowNumbersOnly(e) {
// 	var code = (e.which) ? e.which : e.keyCode;
// 	if (code > 31 && (code < 48 || code > 57)) {
// 		e.preventDefault();
// 	}
// }

// stepperInput.addEventListener('keyup', (e) => {
// 	let self = e.currentTarget;

// 	if (self.value == '0') {
// 		self.value = 1;
// 	}

// 	if (isNotApple) {
// 		self.style.width = `${self.value.length + 1}ex`;
// 	} else {
// 		self.style.width = `${self.value.length + 2}ex`;
// 	}

// 	count = stepperInput.value;

// 	if (count == 1) {
// 		stepperBtnDown.classList.add('stepper__btn_disabled');
// 	} else {
// 		stepperBtnDown.classList.remove('stepper__btn_disabled');
// 	}
// });

// stepperInput.addEventListener('keypress', (e) => {
// 	allowNumbersOnly(e);
// });

// stepperInput.addEventListener('change', (e) => {
// 	let self = e.currentTarget;

// 	if (!self.value) {
// 		self.value = 1;
// 	}

// 	count = stepperInput.value;

// 	if (count == 1) {
// 		stepperBtnDown.classList.add('stepper__btn_disabled');
// 	} else {
// 		stepperBtnDown.classList.remove('stepper__btn_disabled');
// 	}
// });

// stepperBtnUp.addEventListener('click', (e) => {
// 	e.preventDefault();

// 	count++;

// 	if (count == 1) {
// 		stepperBtnDown.classList.add('stepper__btn_disabled');
// 	} else {
// 		stepperBtnDown.classList.remove('stepper__btn_disabled');
// 	}

// 	stepperInput.value = count;

// 	if (isNotApple) {
// 		stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
// 	} else {
// 		stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
// 	}
// });

// stepperBtnDown.addEventListener('click', (e) => {
// 	e.preventDefault();

// 	count--;

// 	if (count == 1) {
// 		stepperBtnDown.classList.add('stepper__btn_disabled');
// 	} else {
// 		stepperBtnDown.classList.remove('stepper__btn_disabled');
// 	}

// 	stepperInput.value = count;

// 	if (isNotApple) {
// 		stepperInput.style.width = `${stepperInput.value.length + 1}ex`;
// 	} else {
// 		stepperInput.style.width = `${stepperInput.value.length + 2}ex`;
// 	}
// });
//======stepper===========================


//======magic menu========
// const navLine = document.querySelector('.nav__line'),
// 	navItem = document.querySelectorAll('.nav__item');

// navLine.style.width = `${navItem[0].offsetWidth}px`;

// navItem.forEach(el => {
// 	el.addEventListener('mouseenter', (e) => {
// 		navLine.style.width = `${e.currentTarget.offsetWidth}px`;
// 		navLine.style.left = `${e.currentTarget.offsetLeft}px`;
// 	});

// 	el.addEventListener('mouseleave', () => {
// 		navLine.style.width = `${navItem[0].offsetWidth}px`;
// 		navLine.style.left = `0px`;
// 	});
// });
//======magic menu========

//======умная выпадашка========
// if (isMobile.any()) {

// 	document.body.classList.add('_touch');

// 	let menuArrows = document.querySelectorAll('.menu-header__arrow');
// 	if (menuArrows.length > 0) {
// 		for (let index = 0; index < menuArrows.length; index++) {
// 			const menuArrow = menuArrows[index];
// 			menuArrow.addEventListener("click", function (e) {
// 				menuArrow.parentElement.classList.toggle('_active');
// 			});
// 		}
// 	}

// } else {
// 	document.body.classList.add('_pc');
// }
//======умная выпадашка========

//======ПОПАП========
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
// для фиксированных элементов (header):
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function (e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(curentPopup) {
	if (curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if (popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		if (menuBody.classList.contains('active')) {
			menuBody.classList.remove("active");
		}
		curentPopup.addEventListener("click", function (e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if (doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});
//======ПОПАП========

// ===========кастомный селект============
// const element = document.querySelector('.js-choice');
// const choices = new Choices(element, {
// 	searchEnabled: false
// });
// ===========кастомный селект============

// ===========маска============
// var elementMask = document.querySelector("mask");

// var im = new Inputmask("+7 (999) 999-9999");
// im.mask(elementMask);
// ===========маска============

// ========Мы используем куки========
// function checkCookies() {
// 	let cookieDate = localStorage.getItem('cookieDate');
// 	let cookieNotification = document.querySelector('.cookie-notification');
// 	let cookieBtn = cookieNotification.querySelector('.cookie-notification__btn');

// 	// Если записи про кукисы нет или она просрочена на 1 год, то показываем информацию про кукисы
// 	if (!cookieDate || (+cookieDate + 31536000000) < Date.now()) {
// 		cookieNotification.classList.add('show');
// 	}

// 	// При клике на кнопку, в локальное хранилище записывается текущая дата в системе UNIX
// 	cookieBtn.addEventListener('click', function () {
// 		localStorage.setItem('cookieDate', Date.now());
// 		cookieNotification.classList.remove('show');
// 	})
// }
// checkCookies();
// ========Мы используем куки========


// ===========Toggle Theme===============
// const themeToggle = document.querySelector('.theme-toggle');
// const body = document.querySelector('body');

// themeToggle.addEventListener('click', (e) => {
// 	e.preventDefault;
// 	if (localStorage.getItem('theme')) {
// 		localStorage.removeItem('theme')
// 	} else {
// 		localStorage.setItem('theme', 'dark')
// 	}
// 	addDarkClassToHTML();
// });

// function addDarkClassToHTML() {
// 	if (localStorage.getItem('theme') === 'dark') {
// 		body.classList.add('dark');
// 	} else {
// 		body.classList.remove('dark');
// 	}
// }

// addDarkClassToHTML();
// ===========Toggle Theme===============

// =============RATING===================
// const ratings = document.querySelectorAll('.rating');
// if (ratings.length > 0) {
// 	initRatings();
// }

// Основная функция
// function initRatings() {
// 	let ratingActive, ratingValue;
// 	// "Бегаем" по всем рейтингам на странице
// 	for (let index = 0; index < ratings.length; index++) {
// 		const rating = ratings[index];
// 		initRating(rating);
// 	}

// 	// Инициализируем конкретный рейтинг
// 	function initRating(rating) {
// 		initRatingVars(rating);

// 		setRatingActiveWidth();

// 		// Возможность указать оценку 
// 		if (rating.classList.contains('rating_set')) {
// 			setRating(rating);
// 		}
// 	}

// 	// Инициализация переменных
// 	function initRatingVars(rating) {
// 		ratingActive = rating.querySelector('.rating__active');
// 		ratingValue = rating.querySelector('.rating__value');
// 	}
// 	// Изменяем ширину активных звезд
// 	function setRatingActiveWidth(index = ratingValue.innerHTML) {
// 		const ratingActiveWidth = index / 0.05;
// 		ratingActive.style.width = `${ratingActiveWidth}%`;
// 	}

// 	// Возможность указать оценку 
// 	function setRating(rating) {
// 		const ratingItems = rating.querySelectorAll('.rating__item');
// 		for (let index = 0; index < ratingItems.length; index++) {
// 			const ratingItem = ratingItems[index];
// 			ratingItem.addEventListener("mouseenter", function (e) {
// 				// Обновление переменных
// 				initRatingVars(rating);
// 				// Обновление активных звезд
// 				setRatingActiveWidth(ratingItem.value);
// 			});
// 			ratingItem.addEventListener("mouseleave", function (e) {
// 				// Обновление активных звезд
// 				setRatingActiveWidth();
// 			});
// 			ratingItem.addEventListener("click", function (e) {
// 				// Обновление переменных
// 				initRatingVars(rating);

// 				// Отобразить указанную оцнку
// 				ratingValue.innerHTML = index + 1;
// 				setRatingActiveWidth();
// 			});
// 		}
// 	}
// }
// =============RATING===================

// ==============QUIZ==============
// const quizData = [{
// 	number: 1,
// 	title: "Каков бюджет сайта?",
// 	answer_alias: "money",
// 	answers: [{
// 		answer_title: "100 рублей",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "5000 рублей",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "10000 рублей",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "20000 рублей",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "50000 рублей",
// 		type: "text"
// 	},
// 	]
// },
// {
// 	number: 2,
// 	title: "Какой именно вам нужен сайт?",
// 	answer_alias: "great",
// 	answers: [{
// 		answer_title: "Лендинг-пейдж",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "Корпоративный сайт",
// 		type: "radio"
// 	},
// 	{
// 		answer_title: "Интернет-магазин",
// 		type: "radio"
// 	}
// 	]
// },
// {
// 	number: 3,
// 	title: "Что есть на сайте?",
// 	answer_alias: "what",
// 	answers: [{
// 		answer_title: "Слайдер",
// 		type: "checkbox"
// 	},
// 	{
// 		answer_title: "Селект",
// 		type: "checkbox"
// 	},
// 	{
// 		answer_title: "Кастомный скролл",
// 		type: "checkbox"
// 	},
// 	{
// 		answer_title: "Адаптив",
// 		type: "checkbox"
// 	},
// 	{
// 		answer_title: "Анимации",
// 		type: "checkbox"
// 	},
// 	]
// },
// {
// 	number: 4,
// 	title: "Оставьте свой телефон, мы вам перезвоним",
// 	answer_alias: "phone",
// 	answers: [{
// 		answer_title: "Введите телефон",
// 		type: "text"
// 	},
// 	]
// }
// ];

// const quizTemplate = (data = [], dataLength, options) => {
// 	const { number, title } = data;
// 	const { nextBtnText } = options;
// 	const answers = data.answers.map(item => {
// 		return `
// 			<label class="quiz-question__label">
// 				<input type="${item.type}" data-valid="false" class="quiz-question__answer" name="${data.answer_alias}" ${item.type == 'text' ? 'placeholder="Введите ваш вариант"' : ''} value="${item.type !== 'text' ? item.answer_title : ''}">
// 				<span>${item.answer_title}</span>
// 			</label>
// 		`;
// 	});

// 	return `
// 			<div class="quiz__content">
// 				<div class="quiz__questions">${number} из ${dataLength}</div>
// 				<div class="quiz-question">
// 					<h3 class="quiz-question__title">${title}</h3>
// 					<div class="quiz-question__answers">
// 						${answers.join('')}
// 					</div>
// 					<button type="button" class="quiz-question__btn" data-next-btn>${nextBtnText}</button>
// 				</div>
// 			</div>
// 		`;
// };


// const quiz = document.querySelector('.quiz');

// class Quiz {
// 	constructor(selector, data, options) {
// 		this.$el = document.querySelector(selector);
// 		this.options = options;
// 		this.data = data;
// 		this.counter = 0;
// 		this.dataLength = this.data.length;
// 		this.resultArray = [];
// 		this.tmp = {};
// 		this.init();
// 		this.events();
// 	}

// 	init() {
// 		console.log('init!');
// 		this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);
// 	}

// 	events() {
// 		this.$el.addEventListener('click', (e) => {
// 			if (e.target == document.querySelector('[data-next-btn]')) {
// 				this.addToSend();
// 				this.nextQuestion();
// 			}

// 			if (e.target == document.querySelector('[data-send]')) {
// 				this.send();
// 			}
// 		});

// 		this.$el.addEventListener('change', (e) => {
// 			if (e.target.tagName == 'INPUT') {
// 				if (e.target.type !== 'checkbox' && e.target.type !== 'radio') {
// 					let elements = this.$el.querySelectorAll('input');

// 					elements.forEach(el => el.checked = false);
// 				}

// 				this.tmp = this.serialize(this.$el);
// 			}
// 		});
// 	}

// 	nextQuestion() {
// 		if (this.valid()) {
// 			console.log('next question!');
// 			quiz.classList.remove('error');
// 			if (this.counter + 1 < this.dataLength) {
// 				this.counter++;
// 				this.$el.innerHTML = quizTemplate(quizData[this.counter], this.dataLength, this.options);

// 				if (this.counter + 1 == this.dataLength) {
// 					this.$el.insertAdjacentHTML('beforeend', `<button type="button" class="quiz-question__btn" data-send>${this.options.sendBtnText}</button>`);
// 					this.$el.querySelector('[data-next-btn]').remove();
// 				}
// 			}
// 		}
// 	}

// 	valid() {
// 		let isValid = false;
// 		let elements = this.$el.querySelectorAll('input');
// 		elements.forEach(el => {
// 			switch (el.type) {
// 				case 'text':
// 					(el.value) ? isValid = true : quiz.classList.add('error');
// 				case 'checkbox':
// 					(el.checked) ? isValid = true : quiz.classList.add('error');
// 				case 'radio':
// 					(el.checked) ? isValid = true : quiz.classList.add('error');
// 			}
// 		});

// 		return isValid;
// 	}

// 	addToSend() {
// 		this.resultArray.push(this.tmp);
// 	}

// 	send() {
// 		if (this.valid()) {
// 			console.log('send!');

// 			let elements = this.$el.querySelectorAll('input');
// 			elements.forEach(el => el.classList.remove('error'));


// 			const formData = new FormData();

// 			for (let item of this.resultArray) {
// 				for (let obj in item) {
// 					formData.append(obj, item[obj].substring(0, item[obj].length - 1))
// 				}
// 			}
// 			console.log(formData);

// 			// const response = fetch('mail.php', {
// 			// 	method: 'POST',
// 			// 	body: formData
// 			// });
// 		}
// 	}

// 	serialize(form) {
// 		let field, s = {};
// 		let valueString = '';
// 		if (typeof form == 'object' && form.nodeName == "FORM") {
// 			let len = form.elements.length;
// 			for (let i = 0; i < len; i++) {
// 				field = form.elements[i];

// 				if (field.name && !field.disabled && field.type != 'file' && field.type != 'reset' && field.type != 'submit' && field.type != 'button') {
// 					if (field.type == 'select-multiple') {
// 						for (j = form.elements[i].options.length - 1; j >= 0; j--) {
// 							if (field.options[j].selected)
// 								s[s.length] = encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[j].value);
// 						}
// 					} else if ((field.type != 'checkbox' && field.type != 'radio' && field.value) || field.checked) {
// 						valueString += field.value + ',';

// 						s[field.name] = valueString;


// 					}
// 				}
// 			}
// 		}
// 		return s
// 	}
// }

// window.quiz = new Quiz('.quiz', quizData, {
// 	nextBtnText: "Вперёд",
// 	sendBtnText: "Отправить"
// });
// ==============QUIZ==============

// ============Валидация и отправка формы===========
// document.addEventListener('DOMContentLoaded', function () {
// 	const form = document.getElementById('form');
// 	form.addEventListener('submit', formSend);

// 	// отправка формы
// 	async function formSend(e) {
// 		e.preventDefault();

// 		let error = formValidate(form);

// 		let formData = new FormData(form);
// 		formData.append('image', formImage.files[0]);

// 		if (error === 0) {
// 			form.classList.add('_sending');
// 			let response = await fetch('sendmail.php', {
// 				method: 'POST',
// 				body: formData
// 			});
// 			if (response.ok) {
// 				let result = await response.json();
// 				alert(result.message);
// 				formPreview.innerHTML = '';
// 				form.reset();
// 				form.classList.remove('_sending');
// 			} else {
// 				alert("Ошибка");
// 				form.classList.remove('_sending');
// 			}
// 		} else {
// 			alert('Заполните обязательные поля');
// 		}

// 	}

// 	// Валидация
// 	function formValidate(form) {
// 		let error = 0;
// 		let formReq = document.querySelectorAll('._req');

// 		for (let index = 0; index < formReq.length; index++) {
// 			const input = formReq[index];
// 			formRemoveError(input);

// 			if (input.classList.contains('_email')) {
// 				if (emailTest(input)) {
// 					formAddError(input);
// 					error++;
// 				}
// 			} else if (input.getAttribute("type") === "checkbox" && input.checked === false) {
// 				formAddError(input);
// 				error++;
// 			} else {
// 				if (input.value === '') {
// 					formAddError(input);
// 					error++;
// 				}
// 			}
// 		}
// 		return error;
// 	}
// 	function formAddError(input) {
// 		input.parentElement.classList.add('_error');
// 		input.classList.add('_error');
// 	}
// 	function formRemoveError(input) {
// 		input.parentElement.classList.remove('_error');
// 		input.classList.remove('_error');
// 	}
// 	//Функция теста email
// 	function emailTest(input) {
// 		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
// 	}
// 	// конец валидации


// 	// валидация выбора файла:
// 	//Получаем инпут file в переменную
// 	const formImage = document.getElementById('formImage');
// 	//Получаем див для превью в переменную
// 	const formPreview = document.getElementById('formPreview');

// 	//Слушаем изменения в инпуте file
// 	formImage.addEventListener('change', () => {
// 		uploadFile(formImage.files[0]);
// 	});

// 	function uploadFile(file) {
// 		// провераяем тип файла
// 		if (!['image/jpeg', 'image/png', 'image/gif'].includes(file.type)) {
// 			alert('Разрешены только изображения.');
// 			formImage.value = '';
// 			return;
// 		}
// 		// проверим размер файла (<2 Мб)
// 		if (file.size > 2 * 1024 * 1024) {
// 			alert('Файл должен быть менее 2 МБ.');
// 			return;
// 		}

// 		var reader = new FileReader();
// 		reader.onload = function (e) {
// 			formPreview.innerHTML = `<img src="${e.target.result}" alt="Фото">`;
// 		};
// 		reader.onerror = function (e) {
// 			alert('Ошибка');
// 		};
// 		reader.readAsDataURL(file);
// 	}
// 	// конец валидации выбора файла
// });
// ============Валидация и отправка формы===========
// Инициализируем Swiper
// let swiper = new Swiper('.swiper', {

// Стрелки
// navigation: {
// 	nextEl: '.swiper-button-next',
// 	prevEl: '.swiper-button-prev'
// },
// Навигация 
// Буллеты, текущее положение, прогрессбар
// pagination: {
// 	el: '.swiper-pagination',
/*
// Буллеты
type: 'bullets',
clickable: true,
// Динамические буллеты
dynamicBullets: true,
// Кастомные буллеты
renderBullet: function (index, className) {
	return '<span class="' + className + '">' + (index + 1) + '</span>';
},
*/
/*
// Фракция
type: 'fraction',
// Кастомный вывод фракции
renderFraction: function (currentClass, totalClass) {
	return 'Фото <span class="' + currentClass + '"></span>' +
		' из ' +
		'<span class="' + totalClass + '"></span>';
},
*/
// Прогрессбар
//type: 'progressbar'
// },
// Скролл
/*
scrollbar: {
	el: '.swiper-scrollbar',
	// Возможность перетаскивать скролл
	draggable: true
},
*/

// })

const blogSwiper = new Swiper('.blog__swiper', {
	slidesPerView: 3,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.3,
			spaceBetween: 12
		},
		420: {
			slidesPerView: 1.6,
			spaceBetween: 15
		},
		// when window width is >= 480px
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		992: {
			slidesPerView: 3,
			spaceBetween: 28,
		}
	}
});
const heroSwiper = new Swiper('.hero__slider', {
	slidesPerView: 1,
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
const blogHeroSlider = new Swiper('.hero-blog__slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
const reviewBlogSlider = new Swiper('.review-blog__slider', {
	slidesPerView: 1,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	},
});
// ======Yandex map===========
let center = [55.721213291475664, 37.652280042327824];

function init() {
	let map = new ymaps.Map('map-contacts', {
		center: center,
		zoom: 17
	});

	// ====создаём метку==========
	let placemark = new ymaps.Placemark(center, {}, {
		iconLayout: 'default#image',
		iconImageHref: 'https://cdn-icons-png.flaticon.com/512/684/684908.png',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});
	map.geoObjects.add(placemark);
	// ====создаём метку==========


	// ====создаём метку с кастомным балуном==========
	// let placemark = new ymaps.Placemark(center, {
	// 	balloonContentHeader: 'Хедер балуна',
	// 	balloonContentBody: 'Боди балуна',
	// 	balloonContentFooter: 'Подвал',
	// }, {
	// 	iconLayout: 'default#image',
	// 	iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
	// 	iconImageSize: [40, 40],
	// 	iconImageOffset: [-19, -44]
	// });

	// let placemark1 = new ymaps.Placemark(center, {
	// 	balloonContent: `
	// 		<div class="balloon">
	// 			<div class="balloon__address">г. Париж</div>
	// 			<div class="balloon__contacts">
	// 				<a href="tel:+7999999999">+7999999999</a>
	// 			</div>
	// 		</div>
	// 	`
	// }, {
	// 	iconLayout: 'default#image',
	// 	iconImageHref: 'https://image.flaticon.com/icons/png/512/64/64113.png',
	// 	iconImageSize: [40, 40],
	// 	iconImageOffset: [-19, -44]
	// });
	// map.geoObjects.add(placemark);
	// placemark1.balloon.open();
	// ====создаём метку с кастомным балуном==========




	map.controls.remove('geolocationControl'); // удаляем геолокацию
	map.controls.remove('searchControl'); // удаляем поиск
	map.controls.remove('trafficControl'); // удаляем контроль трафика
	map.controls.remove('typeSelector'); // удаляем тип
	map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
	map.controls.remove('zoomControl'); // удаляем контрол зуммирования
	map.controls.remove('rulerControl'); // удаляем контрол правил
	// map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
}

ymaps.ready(init);


