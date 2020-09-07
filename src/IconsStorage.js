import defer from 'promise-defer';
let instance = null;

export default class IconsStorage {

	icons;
	requestWaitingForIcons;

	constructor() {
		if (instance) {
			return instance;
		}

		this.requestWaitingForIcons = [];
		instance = this;
	}

	getIcons() {
		if (this.icons) {
			return Promise.resolve(this.icons);
		}

		if (this.isLoadingIcons) {
			const p = new defer();

			this.requestWaitingForIcons.push(p);
			return p.promise;
		}

		this.isLoadingIcons = true;

		return fetch('https://raw.githubusercontent.com/google/material-design-icons/3.0.2/iconfont/codepoints')
			.then(response => response.text())
			.then(data => data.split('\n'))
			.then(namesAndCodes => namesAndCodes.map(nameAndCode => {
				const parts = nameAndCode.split(' ');
				return {
					name: parts[0],
					code: parts[1]
				};
			}))
			.then((icons) => {
				this.icons = icons;
				this.isLoadingIcons = false;
				if (this.requestWaitingForIcons.length > 0) {
					this.requestWaitingForIcons.map(awaitingPromise => {
						awaitingPromise.resolve(icons);
					});
				}

				return icons;
			});
	}

}
