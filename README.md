HW_Landing

Адаптивный лендинг

Используемые шрифты:
- dosis-light-webfont
- dosis-regular-webfont
- et-line
- opensans-light-webfont
- opensans-regular-webfont
а так же fontawesome

Сброс ситлей и дефолтная стилизация тегов.

```css
*{
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}


body{
	margin: 0;
	font-family: 'opensans-light', sans-serif;
	font-size: 15px;
	color: #777;
}

a{
	color: inherit;
	text-decoration: none;
}
a:hover, a:active{
	text-decoration: none;
}
ul{
	list-style: none;
}
img {
	display: inline-block;
	max-width: 100%;
	vertical-align: middle;
}
button {
	outline: none;
	border: none;
	cursor: pointer;
}

h1,h2,h3,h4,h5,h6 {
	font-weight: normal;
	font-family: 'dosis-regular', sans-serif;
	margin: 0 0 7px;
	text-transform: uppercase;
}

h2 {
	font-size: 18px;
	color: #111;
	letter-spacing: 0.5em;
	margin: 0 0 75px;
}

h1 {
	font-size: 30px;
	letter-spacing: 51px;
	text-indent: 51px;
	margin-bottom: 100px;
}

input, textarea {
	font-family: 'opensans-regular', sans-serif;
	font-size: 12px;
	line-height: 1;
	letter-spacing: 2.5px;
}
```


Хедер 

```css
.header {
	background-color: #9f9f9f;
	color: #fff;
	text-transform: uppercase;
	font-size: 11px;
}
```

состоит из логотипа logo.png (слева)
и пунктов меню (справа)
- Home
- About
- Services
- Works
- Contacts

---
Main часть состоит из 12 секций:

---
1. Секция intro завернута в .container 
```css
.container {
	width: 100%;
	max-width: 1200px;
	padding: 0 15px;
	margin: 0 auto;
}
```
и состоит из h1

Thomas Rhythm
==============

Extraordinary art director & creative minimalism lover

С выравниванием текста по центру и вертикальным расположением посередине.

фон всей секции bg-intro.jpg

Внизу по центру пристусрвует кнопка в виде рома со стрелкой вниз

---
2. Секция About

Завернута в .container

About studio
------------

2 ряда по 3 колонки на ширину контейнера (в адаптиве 2 или 1 колонка в ширину )

В первом ряду колонки с текстом
Во втором ряду фото сотрудников и должностями.

---
3. Service-section

Services
---------
Далее список с использованием JS tabs
```js
 $( ".tabs" ).tabs();
 ```
 - Branding
 - Web-design
 - Graphic Design
 - Development
 - Photography

Каждый элемент содержит ссылку на свой id для переключения табов.

далее идут обвертки с id (где tab-id = "branding, web-design, gr-design, development, photography" соответсвенно
```html
<div id="tab-id">
```
внутри которых идет текст сгруппированый по 3 колонки в ряд.

---
4. Digital-Services

```css
background-color: #111;
color: #fff;
```
Содержит 2 колонки

В первой колонке

Looking for eclusive digital services?
----
Текст секции

Кнопка "Lets Talk"

С правой стороны секции
картинка imac.png которая сдвинута на 170px вверх секции

---
