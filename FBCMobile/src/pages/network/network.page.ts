import { Component } from '@angular/core';
import { Network } from 'ionic-native';

@Component({
	templateUrl: 'network.html'
})
export class NetworkPage {
	status: string;
	networkConnection: string

	constructor() {
		if (Network.connection && Network.connection !== 'none') {
			this.status = 'connected';
			this.networkConnection = Network.connection;
		} else {
			this.status = 'disconnected';
			this.networkConnection = 'no network connection';
		}
		this.watchDisconnect();
		this.watchConnect();
	}

	watchDisconnect() {
		Network.onDisconnect().subscribe(() => {
			this.status = 'disconnected';
			setTimeout(() => {
				this.networkConnection = Network.connection;
			}, 3000);
		});
	}

	watchConnect() {
		Network.onConnect().subscribe(() => {
			this.status = 'connected';

			setTimeout(() => {
				this.networkConnection = Network.connection;
				if (Network.connection && Network.connection !== 'none') {
					alert(`we got a '${Network.connection}' connection!`);
				}
			}, 3000);
		});
	}
}
