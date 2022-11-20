const cookies = document.getElementById("cookies");
const cookiesBtn = document.getElementById("cookiesBtn");

cookiesBtn.onclick = function () {
	cookies.classList.remove("cookies_visible");
};

window.onload = function () {
	setTimeout(() => {
		cookies.classList.add("cookies_visible");
	}, 1000);
};

const animItems = document.querySelectorAll(".animate");
const parallaxItems = document.querySelectorAll(".parallax");
const notabBgTextLine = document.querySelectorAll(".notab__bgTextLine");

if (animItems.length > 0) {
	window.addEventListener("scroll", function () {
		animOnScroll();
		parallaxEffect();
	});

	setTimeout(() => {
		animOnScroll();
	}, 300);
}

function parallaxEffect() {
	for (let index = 0; index < parallaxItems.length; index++) {
		const parallaxItem = parallaxItems[index];
		const parallaxItemContent = parallaxItem.getElementsByClassName("parallax__content")[0];
		const parallaxItemHeight = parallaxItem.offsetHeight;
		const parallaxItemContentHeight = parallaxItemContent.offsetHeight;
		const parallaxItemOffset = offset(parallaxItem).top;

		const windowBottom = scrollY + window.innerHeight;

		if (windowBottom > parallaxItemOffset && scrollY < parallaxItemOffset + parallaxItemHeight) {
			parallaxItemContent.style.top = ((parallaxItemOffset - windowBottom) / (window.innerHeight + parallaxItemHeight)) * ((parallaxItemContentHeight / parallaxItemHeight - 1) * 100) + "%";
		}
	}
}

function animOnScroll() {
	for (let index = 0; index < animItems.length; index++) {
		const animItem = animItems[index];
		const animItemHeight = animItem.offsetHeight;
		const animItemOffset = offset(animItem).top;
		const animStart = 4;

		let animItemPoint = animItemHeight / animStart;
		if (animItemHeight > window.innerHeight) {
			animItemPoint = window.innerHeight / animStart;
		}

		if (!animItem.classList.contains("animate_active")) {
			if (scrollY + window.innerHeight > animItemOffset + animItemPoint && scrollY < animItemOffset + animItemHeight - animItemPoint) {
				animItem.classList.add("animate_active");
			}
		} else {
			if (scrollY + window.innerHeight < animItemOffset || scrollY > animItemOffset + animItemHeight) {
				if (!animItem.classList.contains("animate_animNoHide")) {
					animItem.classList.remove("animate_active");
					animItem.classList.remove("animate_centerActive");
				}
			}
		}

		if (animItem.classList.contains("animate_center")) {
			if (window.innerHeight / animItemHeight > 1.5) {
				if (scrollY + window.innerHeight * 0.1 < animItemOffset && scrollY + window.innerHeight * 0.2 > animItemOffset) {
					animItem.classList.add("animate_centerActive");
				}
			}
		}
	}
}

function offset(el) {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft,
	};
}

const form = document.getElementById("form");
const formItem = document.querySelectorAll(".form__item");

form.onsubmit = function () {
	for (let i = 0; i < formItem.length; i++) {
		if (formItem[i].value == "") {
			for (let i = 0; i < formItem.length; i++) {
				if (formItem[i].value == "") {
					formItem[i].classList.add("input_invalid");
				}
			}
			event.preventDefault();
			return;
		}
	}
};

for (let i = 0; i < formItem.length; i++) {
	formItem[i].oninput = function () {
		formItem[i].classList.remove("input_invalid");
	};
}

const parallaxCursorItem = document.getElementsByClassName("notab__parallaxWrap")[0];
window.addEventListener("mousemove", function (e) {
	let x = e.clientX / window.innerWidth;
	let y = e.clientY / window.innerHeight;
	parallaxCursorItem.style.transform = "translate(-" + x * 50 + "px, -" + y * 50 + "px)";
});
