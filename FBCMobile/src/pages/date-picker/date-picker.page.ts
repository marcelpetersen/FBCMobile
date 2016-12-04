import { Component } from '@angular/core';
import { DatePicker } from 'ionic-native';

@Component({
	templateUrl: 'date-picker.html'
})
export class DatePickerPage {
	gotDate: Date;

	show() {
		DatePicker.show({
			date: new Date(),
			mode: 'date'
		}).then(
			date => { this.gotDate = date;},
			err => console.log('Error occurred while getting date: ', err)
		);
	}
}
