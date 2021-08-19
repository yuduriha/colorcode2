window.onload = () => {
	let cnt = 0;
	let list = getElement('color-list');
	setInterval(() => {
		let color = convertColor(cnt);
		setColorCodeText(color);
		let mainBox = getElement("color-box");
		setColor(mainBox, color);
		setRGBBoxes(color);
		cnt = (cnt + 1) % 1000000;
	}, 1);
};

function getElement(id: string): HTMLElement | null{
	return document.getElementById(id);
}

function setColorCodeText(color: string) {
	let elemet = getElement("txt-color-code");
	if(elemet) {
		elemet.innerText = color;
	}
}
/**
 * boxに色を設定する
 */
function setColor(elemet: HTMLElement | null, color: string): void {
	if(elemet) {
		elemet.style.backgroundColor = color;
	}
}

/**
 * boxの高さを設定する
 */
function setHeight(elemet: HTMLElement | null, h: number): void {
	if(elemet) {
		elemet.style.height = h + "px";
	}
}
/**
 * 数字をカラーコードに変える
 */
function convertColor(num: number): string {
	return "#" + ("000000" + num).slice(-6);
}

/**
 * 各色のボックスを設定する
 */
function setRGBBoxes(color: string){
	let r = +color.slice(1, 3);
	let g = +color.slice(3, 5);
	let b = +color.slice(5, 7);

	setRGBBox("r", r, 10000);
	setRGBBox("g", g, 100);
	setRGBBox("b", b, 1);
}

function setRGBBox(tag: string, val: number, mask: number) {
	let element = getElement("box-" + tag);

	if(!element) return;

	setHeight(element, val);
}
