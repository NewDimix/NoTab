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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29va2llcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llc1wiKTtcclxuY29uc3QgY29va2llc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29va2llc0J0blwiKTtcclxuXHJcbmNvb2tpZXNCdG4ub25jbGljayA9IGZ1bmN0aW9uICgpIHtcclxuXHRjb29raWVzLmNsYXNzTGlzdC5yZW1vdmUoXCJjb29raWVzX3Zpc2libGVcIik7XHJcbn07XHJcblxyXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24gKCkge1xyXG5cdHNldFRpbWVvdXQoKCkgPT4ge1xyXG5cdFx0Y29va2llcy5jbGFzc0xpc3QuYWRkKFwiY29va2llc192aXNpYmxlXCIpO1xyXG5cdH0sIDEwMDApO1xyXG59O1xyXG5cclxuY29uc3QgYW5pbUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5hbmltYXRlXCIpO1xyXG5jb25zdCBwYXJhbGxheEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wYXJhbGxheFwiKTtcclxuY29uc3Qgbm90YWJCZ1RleHRMaW5lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ub3RhYl9fYmdUZXh0TGluZVwiKTtcclxuXHJcbmlmIChhbmltSXRlbXMubGVuZ3RoID4gMCkge1xyXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIGZ1bmN0aW9uICgpIHtcclxuXHRcdGFuaW1PblNjcm9sbCgpO1xyXG5cdFx0cGFyYWxsYXhFZmZlY3QoKTtcclxuXHR9KTtcclxuXHJcblx0c2V0VGltZW91dCgoKSA9PiB7XHJcblx0XHRhbmltT25TY3JvbGwoKTtcclxuXHR9LCAzMDApO1xyXG59XHJcblxyXG5mdW5jdGlvbiBwYXJhbGxheEVmZmVjdCgpIHtcclxuXHRmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFyYWxsYXhJdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdGNvbnN0IHBhcmFsbGF4SXRlbSA9IHBhcmFsbGF4SXRlbXNbaW5kZXhdO1xyXG5cdFx0Y29uc3QgcGFyYWxsYXhJdGVtQ29udGVudCA9IHBhcmFsbGF4SXRlbS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwicGFyYWxsYXhfX2NvbnRlbnRcIilbMF07XHJcblx0XHRjb25zdCBwYXJhbGxheEl0ZW1IZWlnaHQgPSBwYXJhbGxheEl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0Y29uc3QgcGFyYWxsYXhJdGVtQ29udGVudEhlaWdodCA9IHBhcmFsbGF4SXRlbUNvbnRlbnQub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0Y29uc3QgcGFyYWxsYXhJdGVtT2Zmc2V0ID0gb2Zmc2V0KHBhcmFsbGF4SXRlbSkudG9wO1xyXG5cclxuXHRcdGNvbnN0IHdpbmRvd0JvdHRvbSA9IHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG5cdFx0aWYgKHdpbmRvd0JvdHRvbSA+IHBhcmFsbGF4SXRlbU9mZnNldCAmJiBzY3JvbGxZIDwgcGFyYWxsYXhJdGVtT2Zmc2V0ICsgcGFyYWxsYXhJdGVtSGVpZ2h0KSB7XHJcblx0XHRcdHBhcmFsbGF4SXRlbUNvbnRlbnQuc3R5bGUudG9wID0gKChwYXJhbGxheEl0ZW1PZmZzZXQgLSB3aW5kb3dCb3R0b20pIC8gKHdpbmRvdy5pbm5lckhlaWdodCArIHBhcmFsbGF4SXRlbUhlaWdodCkpICogKChwYXJhbGxheEl0ZW1Db250ZW50SGVpZ2h0IC8gcGFyYWxsYXhJdGVtSGVpZ2h0IC0gMSkgKiAxMDApICsgXCIlXCI7XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5mdW5jdGlvbiBhbmltT25TY3JvbGwoKSB7XHJcblx0Zm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFuaW1JdGVtcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdGNvbnN0IGFuaW1JdGVtID0gYW5pbUl0ZW1zW2luZGV4XTtcclxuXHRcdGNvbnN0IGFuaW1JdGVtSGVpZ2h0ID0gYW5pbUl0ZW0ub2Zmc2V0SGVpZ2h0O1xyXG5cdFx0Y29uc3QgYW5pbUl0ZW1PZmZzZXQgPSBvZmZzZXQoYW5pbUl0ZW0pLnRvcDtcclxuXHRcdGNvbnN0IGFuaW1TdGFydCA9IDQ7XHJcblxyXG5cdFx0bGV0IGFuaW1JdGVtUG9pbnQgPSBhbmltSXRlbUhlaWdodCAvIGFuaW1TdGFydDtcclxuXHRcdGlmIChhbmltSXRlbUhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG5cdFx0XHRhbmltSXRlbVBvaW50ID0gd2luZG93LmlubmVySGVpZ2h0IC8gYW5pbVN0YXJ0O1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghYW5pbUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0ZV9hY3RpdmVcIikpIHtcclxuXHRcdFx0aWYgKHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgPiBhbmltSXRlbU9mZnNldCArIGFuaW1JdGVtUG9pbnQgJiYgc2Nyb2xsWSA8IGFuaW1JdGVtT2Zmc2V0ICsgYW5pbUl0ZW1IZWlnaHQgLSBhbmltSXRlbVBvaW50KSB7XHJcblx0XHRcdFx0YW5pbUl0ZW0uY2xhc3NMaXN0LmFkZChcImFuaW1hdGVfYWN0aXZlXCIpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRpZiAoc2Nyb2xsWSArIHdpbmRvdy5pbm5lckhlaWdodCA8IGFuaW1JdGVtT2Zmc2V0IHx8IHNjcm9sbFkgPiBhbmltSXRlbU9mZnNldCArIGFuaW1JdGVtSGVpZ2h0KSB7XHJcblx0XHRcdFx0aWYgKCFhbmltSXRlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJhbmltYXRlX2FuaW1Ob0hpZGVcIikpIHtcclxuXHRcdFx0XHRcdGFuaW1JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX2FjdGl2ZVwiKTtcclxuXHRcdFx0XHRcdGFuaW1JdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJhbmltYXRlX2NlbnRlckFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAoYW5pbUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKFwiYW5pbWF0ZV9jZW50ZXJcIikpIHtcclxuXHRcdFx0aWYgKHdpbmRvdy5pbm5lckhlaWdodCAvIGFuaW1JdGVtSGVpZ2h0ID4gMS41KSB7XHJcblx0XHRcdFx0aWYgKHNjcm9sbFkgKyB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjEgPCBhbmltSXRlbU9mZnNldCAmJiBzY3JvbGxZICsgd2luZG93LmlubmVySGVpZ2h0ICogMC4yID4gYW5pbUl0ZW1PZmZzZXQpIHtcclxuXHRcdFx0XHRcdGFuaW1JdGVtLmNsYXNzTGlzdC5hZGQoXCJhbmltYXRlX2NlbnRlckFjdGl2ZVwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9mZnNldChlbCkge1xyXG5cdGNvbnN0IHJlY3QgPSBlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHRjb25zdCBzY3JvbGxMZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0O1xyXG5cdGNvbnN0IHNjcm9sbFRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xyXG5cclxuXHRyZXR1cm4ge1xyXG5cdFx0dG9wOiByZWN0LnRvcCArIHNjcm9sbFRvcCxcclxuXHRcdGxlZnQ6IHJlY3QubGVmdCArIHNjcm9sbExlZnQsXHJcblx0fTtcclxufVxyXG5cclxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZm9ybVwiKTtcclxuY29uc3QgZm9ybUl0ZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZvcm1fX2l0ZW1cIik7XHJcblxyXG5mb3JtLm9uc3VibWl0ID0gZnVuY3Rpb24gKCkge1xyXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuXHRcdGlmIChmb3JtSXRlbVtpXS52YWx1ZSA9PSBcIlwiKSB7XHJcblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZm9ybUl0ZW0ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0XHRpZiAoZm9ybUl0ZW1baV0udmFsdWUgPT0gXCJcIikge1xyXG5cdFx0XHRcdFx0Zm9ybUl0ZW1baV0uY2xhc3NMaXN0LmFkZChcImlucHV0X2ludmFsaWRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHR9XHJcbn07XHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGZvcm1JdGVtLmxlbmd0aDsgaSsrKSB7XHJcblx0Zm9ybUl0ZW1baV0ub25pbnB1dCA9IGZ1bmN0aW9uICgpIHtcclxuXHRcdGZvcm1JdGVtW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJpbnB1dF9pbnZhbGlkXCIpO1xyXG5cdH07XHJcbn1cclxuXHJcbmNvbnN0IHBhcmFsbGF4Q3Vyc29ySXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJub3RhYl9fcGFyYWxsYXhXcmFwXCIpWzBdO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBmdW5jdGlvbiAoZSkge1xyXG5cdGxldCB4ID0gZS5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGg7XHJcblx0bGV0IHkgPSBlLmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblx0cGFyYWxsYXhDdXJzb3JJdGVtLnN0eWxlLnRyYW5zZm9ybSA9IFwidHJhbnNsYXRlKC1cIiArIHggKiA1MCArIFwicHgsIC1cIiArIHkgKiA1MCArIFwicHgpXCI7XHJcbn0pO1xyXG4iXX0=
