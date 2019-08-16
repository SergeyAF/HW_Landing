HW_Landing
Home Work Landing

Адаптивный лендинг

В данном лендинге используются шрифты
- dosis-light-webfont
- dosis-regular-webfont
- et-line
- opensans-light-webfont
- opensans-regular-webfont
а так же fontawesome


Хедер состоит из логотипа logo.png (слева)
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

далее идут обвертки с id
```html
<div id="branding">
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
