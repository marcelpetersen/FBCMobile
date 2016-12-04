import { Component } from '@angular/core';
import { LocalNotifications } from 'ionic-native';

@Component({
	templateUrl: 'local-notifications.html'
})
export class LocalNotificationsPage {
	singleText: string;
	multipleTitle: string;
	multipleText_1: string;
	multipleText_2: string;
	delayedText: string;

	constructor() {
	}

	showSingleNotification() {
		LocalNotifications.schedule({
			id: 1,
			text: this.singleText,
			sound: 'file://sound.mp3',
		});
	}

	showMultipleNotification() {
		LocalNotifications.schedule([{
			id: 1,
			text: this.multipleText_1,
			sound: 'file://sound.mp3'
		}, {
			id: 2,
			title: this.multipleTitle,
			text: this.multipleText_2
		}]);
	}

	showDelayedNotification() {
		LocalNotifications.schedule({
			text: this.delayedText,
			at: new Date(new Date().getTime() + 3600),
			led: 'FF0000',
			sound: null
		});
	}
}
