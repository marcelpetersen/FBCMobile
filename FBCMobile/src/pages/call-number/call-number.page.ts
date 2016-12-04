import { Component } from '@angular/core';
import { CallNumber } from 'ionic-native';

@Component({
	templateUrl: 'call-number.html'
})
export class CallNumberPage {
	number: string;

	constructor() {
	}

	callNumber() {
		CallNumber.callNumber(this.number, true)
			.then(() => console.log('Launched dialer!'));
	}
}
