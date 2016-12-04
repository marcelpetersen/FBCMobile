import { Component } from '@angular/core';
import { Dialogs } from 'ionic-native';

@Component({
	templateUrl: 'dialogs.html'
})
export class DialogsPage {
	alertMessage: string;
	confirmMessage: string;
	promptMessage: string;
	alertTitle: string;
	confirmTitle: string;
	promptTitle: string;
	times: number;

	constructor() {
	}

	showAlert() {
		Dialogs.alert(this.alertMessage, this.alertTitle)
	}

	showConfirm() {
		Dialogs.confirm(this.confirmMessage, this.confirmTitle)
	}

	showPrompt() {
		Dialogs.prompt(this.promptMessage, this.promptTitle)
	}

	showBeep() {
		Dialogs.beep(this.times)
	}

}
