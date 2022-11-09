const tabsItems = document.querySelectorAll(".tabs__item");
const tabsInfo = document.querySelectorAll(".tabs__info");
const tabsInput = document.querySelectorAll(".char__input input");
const tabsAdd = document.querySelectorAll(".char__input button");
let width = 0;
if (window.innerWidth > 1023) {
	for (let i = 0; i < tabsItems.length; i++) {
		width = width + tabsItems[i].offsetWidth;
	}
	width = width + tabsItems[0].offsetWidth;
	for (let j = 0; j < tabsInfo.length; j++) {
		tabsInfo[j].style.width = `${width}px`;
	}
}
for (let i = 0; i < tabsItems.length; i++) {
	tabsItems[i].addEventListener("click", function () {
		for (let i = 0; i < tabsItems.length; i++) {
			tabsItems[i].classList.remove("active");
		}
		this.classList.add("active");
	});
}

for (let k = 0; k < tabsAdd.length; k++) {
	tabsAdd[k].addEventListener("click", function () {
		let parent = this.parentElement;
		let inputValue = parent.querySelector("input").value;
		let li = document.createElement("li");
		li.textContent = inputValue;
		let bigParent = parent.parentElement.parentElement;
		let ul = bigParent.querySelector("ul");
		ul.append(li);
	});
}

for (let n = 0; n < tabsInput.length; n++) {
	tabsInput[n].addEventListener("input", function () {
		var re = /[^?!,.а-яА-Я0-9\s]+$/;
		let p = this.parentElement.querySelector("p");
		if (!re.test(tabsInput[n].value)) {
			tabsInput[n].style.border = "green solid 3px";
			p.style.display = "none";
			tabsAdd[n].removeAttribute('disabled');
			return true;
		} else {
			tabsInput[n].style.border = "red solid 3px";
			p.style.display = "block";
			tabsAdd[n].setAttribute('disabled', true);
			return false;
		}
	});
}
