// import React from 'react';
import ReactDOM from 'react-dom/client'

import { restaurants } from './constants/mock';

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(
	<div>
		<h1>{restaurants[0].name}</h1>
		<h3>Меню</h3>
		<ul>
			<li>{restaurants[0].menu[0].name}</li>
			<li>{restaurants[0].menu[1].name}</li>
			<li>{restaurants[0].menu[2].name}</li>
		</ul>
		<h3>Отзывы</h3>
		<ul>
			<li>{restaurants[0].reviews[0].text}</li>
			<li>{restaurants[0].reviews[1].text}</li>
		</ul>

		<h1>{restaurants[1].name}</h1>
		<h3>Меню</h3>
		<ul>
			<li>{restaurants[1].menu[0].name}</li>
			<li>{restaurants[1].menu[1].name}</li>
		</ul>
		<h3>Отзывы</h3>
		<ul>
			<li>{restaurants[1].reviews[0].text}</li>
			<li>{restaurants[1].reviews[1].text}</li>
			<li>{restaurants[1].reviews[2].text}</li>
		</ul>

		<h1>{restaurants[2].name}</h1>
		<h3>Меню</h3>
		<ul>
			<li>{restaurants[2].menu[0].name}</li>
			<li>{restaurants[2].menu[1].name}</li>
			<li>{restaurants[2].menu[2].name}</li>
		</ul>
		<h3>Отзывы</h3>
		<ul>
			<li>{restaurants[2].reviews[0].text}</li>
		</ul>

		<h1>{restaurants[3].name}</h1>
		<h3>Меню</h3>
		<ul>
			<li>{restaurants[3].menu[0].name}</li>
			<li>{restaurants[3].menu[1].name}</li>
		</ul>
		<h3>Отзывы</h3>
		<ul>
			<li>{restaurants[3].reviews[0].text}</li>
			<li>{restaurants[3].reviews[1].text}</li>
		</ul>
	</div>

	// React.createElement('div', {
	// 	children: [
	// 		React.createElement('h1', {children: restaurants[0].name, key: restaurants[0].id}),
	// 		React.createElement('h3', {children: 'Меню', key: 'menu_title_0'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[0].menu[0].name, key: restaurants[0].menu[0].id}),
	// 					React.createElement('li', {children: restaurants[0].menu[1].name, key: restaurants[0].menu[1].id}),
	// 					React.createElement('li', {children: restaurants[0].menu[2].name, key: restaurants[0].menu[2].id}),
	// 				]
	// 			],
	// 			key: 'menu_0'
	// 		}),
	// 		React.createElement('h3', {children: 'Отзывы', key: 'reviews_title_0'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[0].reviews[0].text, key: restaurants[0].reviews[0].id}),
	// 					React.createElement('li', {children: restaurants[0].reviews[1].text, key: restaurants[0].reviews[1].id}),
	// 				]
	// 			],
	// 			key: 'reviews_0'
	// 		}),
	//
	// 		React.createElement('h1', {children: restaurants[1].name, key: restaurants[1].id}),
	// 		React.createElement('h3', {children: 'Меню', key: 'menu_title_1'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[1].menu[0].name, key: restaurants[1].menu[0].id}),
	// 					React.createElement('li', {children: restaurants[1].menu[1].name, key: restaurants[1].menu[1].id}),
	// 				]
	// 			],
	// 			key: 'menu_1'
	// 		}),
	// 		React.createElement('h3', {children: 'Отзывы', key: 'reviews_title_1'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[1].reviews[0].text, key: restaurants[1].reviews[0].id}),
	// 					React.createElement('li', {children: restaurants[1].reviews[1].text, key: restaurants[1].reviews[1].id}),
	// 					React.createElement('li', {children: restaurants[1].reviews[2].text, key: restaurants[1].reviews[2].id}),
	// 				]
	// 			],
	// 			key: 'reviews_1'
	// 		}),
	//
	// 		React.createElement('h1', {children: restaurants[2].name, key: restaurants[2].id}),
	// 		React.createElement('h3', {children: 'Меню', key: 'menu_title_2'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[2].menu[0].name, key: restaurants[2].menu[0].id}),
	// 					React.createElement('li', {children: restaurants[2].menu[1].name, key: restaurants[2].menu[1].id}),
	// 					React.createElement('li', {children: restaurants[2].menu[2].name, key: restaurants[2].menu[2].id}),
	// 				]
	// 			],
	// 			key: 'menu_2'
	// 		}),
	// 		React.createElement('h3', {children: 'Отзывы', key: 'reviews_title_2'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[2].reviews[0].text, key: restaurants[2].reviews[0].id}),
	// 				]
	// 			],
	// 			key: 'reviews_2'
	// 		}),
	//
	// 		React.createElement('h1', {children: restaurants[3].name, key: restaurants[3].id}),
	// 		React.createElement('h3', {children: 'Меню', key: 'menu_title_3'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[3].menu[0].name, key: restaurants[3].menu[0].id}),
	// 					React.createElement('li', {children: restaurants[3].menu[1].name, key: restaurants[3].menu[1].id}),
	// 				]
	// 			],
	// 			key: 'menu_3'
	// 		}),
	// 		React.createElement('h3', {children: 'Отзывы', key: 'reviews_title_3'}),
	// 		React.createElement('ul', {
	// 			children: [
	// 				[
	// 					React.createElement('li', {children: restaurants[3].reviews[0].text, key: restaurants[3].reviews[0].id}),
	// 					React.createElement('li', {children: restaurants[3].reviews[1].text, key: restaurants[3].reviews[1].id}),
	// 				]
	// 			],
	// 			key: 'reviews_3'
	// 		}),
	// 	]
	// })
);
