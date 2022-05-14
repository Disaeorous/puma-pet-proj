import Menu from './components/Menu.js';
import About from './components/About.js';
import Features from './components/Features.js';
import Gallery from './components/Gallery.js';

console.log('working');

// Router
const router = async () => {
	const routes = [
		{ path: "/", view: Menu },
		{ path: "/about", view: About },
		{ path: "/features", view: Features },
		{ path: "/gallery", view: Gallery },
	];

	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path
		};
	});

	let match = potentialMatches.find(potentialMatches => potentialMatches.isMatch);

	if (!match) {
		match = {
			route: routes[0],
			isMatch: true
		};
	};

	const view = new match.route.view();

	const page = document.getElementById('page-wrapper');
	page.innerHTML = await view.getHtml();

	// console.log(match.route.view());
};

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
}

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener('click', e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		};
	});

	router();
})