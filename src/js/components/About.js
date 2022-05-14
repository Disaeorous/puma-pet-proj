import BaseView from "./BaseView.js";

export default class extends BaseView {
	constructor() {
		super();
		this.setTitle('About');
	}

	async getHtml() {
		return `
			<div class="container">
	  
				<header id="header" class="header">
					<a class="logo" href="#">
						<svg class="logo-icon" viewBox="0 0 70 29" width="7rem" height="2.9rem" xmlns="http://www.w3.org/2000/svg">
							<g>
								<path d="M0.999992 5.15718L1.13663 6.3582L3.89802 6.88436L8.17522 8.62212L12.7091 11.0008L15.8925 12.7687L18.9467 13.8309L24.782 14.1826L22.885 16.7213L21.5662 20.6128H15.6501L12.1452 23.5055L8.28694 25.8547L8.25448 26.9788L8.32619 27.791L9.46004 27.6461L10.5456 26.898L14.9926 23.8694L24.3148 24.1985L28.2704 21.0619L30.3622 20.0979L33.6716 16.6496L35.8895 15.8064L38.3104 15.9589L41.0748 16.9395L48.5777 16.676L50.9556 15.0372L51.4681 13.3085V16.0472L52.2396 17.1795L60.0384 14.3948L60.9548 14.0301L63.2942 14.5374L65.7537 15.5014L67.0951 16.1672L68.3482 15.4448L67.625 14.0943L61.684 11.6824L57.1109 12.1165L56.4119 11.9232L58.5331 8.76404L58.823 8.18579L59.9319 7.43845L60.2701 8.2575L61.7165 8.30582L63.2844 7.73965L63.6218 8.07331L64.3933 8.20089L65.7438 6.79981L66.0647 6.01473L64.6508 4.3434L64.5866 3.50699L63.5577 2.47883L60.9216 1.96399L59.6987 1H58.9921L58.8638 1.70658L56.8694 1.77074L55.0055 2.92874L49.5235 3.51529L44.5564 6.2646L39.9576 7.68681L37.0633 8.77989L32.4978 9.74539L27.6921 9.85032L22.9975 10.9041L19.1219 11.1601L16.1635 10.3878L9.55742 7.11007L5.61765 5.69315L2.80569 5.08471L0.999992 5.15718Z" stroke-width="1.5333" stroke-miterlimit="10"/>
							</g>
						</svg>

						<strong class="logo-name">Puma</strong>
					</a>

					<nav class="header-nav">
						<ul class="header-nav__menu">
							<li class="header-nav__item">
								<a class="header-nav__link" href="/" data-link>Menu</a>
							</li>

							<li class="header-nav__item">
								<a class="header-nav__link" href="/about" data-link>About</a>
							</li>

							<li class="header-nav__item">
								<a class="header-nav__link" href="/features" data-link>Feature</a>
							</li>

							<li class="header-nav__item">
								<a class="header-nav__link" href="/gallery" data-link>Gallery</a>
							</li>
						</ul>
					</nav>

					<button id="modal-cta" class="cta-order btn m-l-auto">Buy now</button>
					<div id="modal" class="modal">
						<article class="modal-content">

							<span id="modal-close" class="modal-close">&times;</span>

							<div class="modal-content__box">
								<div class="modal-content__item">
									<h2 class="modal-content__title">Brand</h2>
									<p class="modal-content__text">
										<strong>Puma</strong>
									</p>
								</div>

								<div class="modal-content__item">
									<h2 class="modal-content__title">Name</h2>
									<p class="modal-content__text">
										<strong>man</strong>
									</p>
								</div>

								<div class="modal-content__item">
									<h2 class="modal-content__title">Size</h2>
									<p class="modal-content__text">
										<strong>large</strong>
									</p>
								</div>

								<div class="modal-content__item">
									<h2 class="modal-content__title">Price</h2>
									<p class="modal-content__text">
										<strong>$150</strong>
									</p>
								</div>
							</div>

							<button class="cta-order btn">To stash</button>
						</article>
					</div>
				</header>

				<section class="about">
					<h1 class="about-title">About title</h1>
				</section>
			</div>


		`;
	}
}