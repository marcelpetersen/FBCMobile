import { Component } from '@angular/core';
import { ScreenOrientation } from 'ionic-native';

@Component({
	templateUrl: 'screen-orientation.html'
})
export class ScreenOrientationPage {
	orientation: string;

	constructor() {
	}

	setOrientation() {
		ScreenOrientation.lockOrientation(this.orientation);
	}

	unlockOrientation() {
		ScreenOrientation.unlockOrientation();
	}
}
