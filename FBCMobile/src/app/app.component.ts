import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, App, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { OAuthService } from '../pages/oauth/oauth.service';
import { HomePage } from '../pages/home/home.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
//import { DrupalListPage } from '../pages/drupal/list/drupal.list.page';
//import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { YoutubeListPage } from '../pages/youtube/list/youtube.list.page';
import { VimeoListPage } from '../pages/vimeo/list/vimeo.list.page';
import { NewsListPage } from '../pages/news/list/news.list.page';
import { ProductsListPage } from '../pages/products/list/products.list.page';
import { LocalStorageListPage } from '../pages/local-storage/list/local-storage.list.page';
// import { SqliteListPage } from '../pages/sqlite/list/sqlite.list.page';
import { OAuthProvidersListPage } from '../pages/oauth/list/oauth-providers.list.page';
import { OAuthProfilePage } from '../pages/oauth/profile/oauth-profile.page';
// import { DateTimePage } from '../pages/date-time/date-time.page';
//import { NetworkPage } from '../pages/network/network.page';
// import { BarcodeScannerPage } from '../pages/barcode-scanner/barcode-scanner.page';
//import { ToastsPage } from '../pages/toasts/toasts.page';
//import { VibratePage } from '../pages/vibrate/vibrate.page';
//import { SpinnerDialogPage } from '../pages/spinner-dialog/spinner-dialog.page';
//import { FlashlightPage } from '../pages/flashlight/flashlight.page';
// import { SocialSharingPage } from '../pages/social-sharing/social-sharing.page';
//import { ActionsheetPage } from '../pages/actionsheet/actionsheet.page';
//import { SimPage } from '../pages/sim/sim.page';
//import { BrightnessPage } from '../pages/brightness/brightness.page';
import { CallNumberPage } from '../pages/call-number/call-number.page';
// import { CameraPage } from '../pages/camera/camera.page';
// import { CropPage } from '../pages/crop/crop.page';
import { ScreenOrientationPage } from '../pages/screen-orientation/screen-orientation.page';
// import { PhotoViewerPage } from '../pages/photo-viewer/photo-viewer.page';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications.page';
//import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
// import { CalendarPage } from '../pages/calendar/calendar.page';
import { DialogsPage } from '../pages/dialogs/dialogs.page';
// import { NativeStorageListPage } from '../pages/native-storage/list/native-storage.list.page';
//import { BadgePage } from '../pages/badge/badge.page';
//import { ClipboardPage } from '../pages/clipboard/clipboard.page';
// import { ContactsPage } from '../pages/contacts/contacts.page';
//import { DevicePage } from '../pages/device/device.page';
//import { AppAvailabilityPage } from '../pages/app-availability/app-availability.page';
//import { ShakePage } from '../pages/shake/shake.page';
// import { DatePickerPage } from '../pages/date-picker/date-picker.page';
// import { YoutubeVideoPlayerPage } from '../pages/youtube-video-player/youtube-video-player.page';
//import { TextToSpeechPage } from '../pages/text-to-speech/text-to-speech.page';
// import { PushPage } from '../pages/push/push.page';
// import { ComponentsListPage } from '../pages/components/list/components.list.page';

@Component({
	templateUrl: 'app.html'
})
export class MyApp {
	wide: boolean = false;
	pages;
	rootPage;

	private app;
	private platform;
	private menu: MenuController;
	private oauthService: OAuthService;

	@ViewChild(Nav) nav: Nav;

	constructor(platform: Platform, menu: MenuController, oauthService: OAuthService, app: App) {
		this.menu = menu;
		this.oauthService = oauthService;
		// set up our app
		this.app = app;
		this.platform = platform;
		this.initializeApp();

		// set our app's pages
		this.pages = [
			{ title: 'Home', component: HomePage, icon: 'home' },
			{ title: 'Wordpress', component: WordpressListPage, icon: 'logo-wordpress' },
//			{ title: 'Drupal', component: DrupalListPage, icon: 'water' },
//			{ title: 'Slides', component: SlideBoxPage, icon: 'swap' },
			{ title: 'YouTube', component: YoutubeListPage, icon: 'logo-youtube' },
			{ title: 'Vimeo', component: VimeoListPage, icon: 'logo-vimeo' },
			{ title: 'News', component: NewsListPage, icon: 'paper' },
			{ title: 'Products', component: ProductsListPage, icon: 'archive' },
			{ title: 'Local storage', component: LocalStorageListPage, icon: 'cloud' },
			// { title: 'SQLite', component: SqliteListPage, icon: 'cube' },
			{ title: 'OAuth', component: OAuthProvidersListPage, icon: 'log-in' },
			// { title: 'DateTime', component: DateTimePage, icon: 'time' },
//			{ title: 'Network', component: NetworkPage, icon: 'wifi' },
			// { title: 'BarcodeScanner', component: BarcodeScannerPage, icon: 'qr-scanner' },
//			{ title: 'Toasts', component: ToastsPage, icon: 'information-circle' },
//			{ title: 'Vibrate', component: VibratePage, icon: 'phone-portrait' },
//			{ title: 'SpinnerDialog', component: SpinnerDialogPage, icon: 'sync' },
//			{ title: 'Flashlight', component: FlashlightPage, icon: 'flash' },
			// { title: 'SocialSharing', component: SocialSharingPage, icon: 'share' },
//			{ title: 'Action sheet', component: ActionsheetPage, icon: 'list-box' },
//			{ title: 'Sim', component: SimPage, icon: 'time' },
//			{ title: 'Brightness', component: BrightnessPage, icon: 'time' },
			{ title: 'Call number', component: CallNumberPage, icon: 'call' },
			// { title: 'Camera', component: CameraPage, icon: 'camera' },
			// { title: 'Crop', component: CropPage, icon: 'camera' },
			{ title: 'Screen orientation', component: ScreenOrientationPage, icon: 'expand' },
			// { title: 'Photo viewer', component: PhotoViewerPage, icon: 'images' },
			{ title: 'Local notifications', component: LocalNotificationsPage, icon: 'notifications' },
//			{ title: 'Device motion', component: DeviceMotionPage, icon: 'contract' },
			// { title: 'Calendar', component: CalendarPage, icon: 'calendar' },
			{ title: 'Dialogs', component: DialogsPage, icon: 'alert' },
			// { title: 'Native storage', component: NativeStorageListPage, icon: 'cloud' },
//			{ title: 'Badge', component: BadgePage, icon: 'ionic' },
//			{ title: 'Clipboard', component: ClipboardPage, icon: 'clipboard' },
			// { title: 'Contacts', component: ContactsPage, icon: 'contacts' },
//			{ title: 'Device', component: DevicePage, icon: 'logo-android' },
//			{ title: 'App availability', component: AppAvailabilityPage, icon: 'apps' },
//			{ title: 'Shake', component: ShakePage, icon: 'hand' },
			// { title: 'Date picker', component: DatePickerPage, icon: 'calendar' },
			// { title: 'Youtube player', component: YoutubeVideoPlayerPage, icon: 'logo-youtube' },
//			{ title: 'Text to speech', component: TextToSpeechPage, icon: 'microphone' },
			// { title: 'Push', component: PushPage, icon: 'notifications' },
			// { title: 'Components', component: ComponentsListPage, icon: 'grid' }
		];

		this.rootPage = HomePage;
	}

	initializeApp() {
		this.platform.ready().then(() => {
			StatusBar.styleDefault();
		});
	}

	openPage(page) {
		// close the menu when clicking a link from the menu
		this.menu.close();
		// navigate to the new page if it is not the current page
		let component = page.component;
		if (component === OAuthProvidersListPage && this.oauthService.isAuthorized()) {
			component = OAuthProfilePage;
		}

		this.nav.setRoot(component);
	}

	setWidth() {
		if (this.platform.width() > 767) {
			this.wide = true;
			this.menu.open();
		} else {
			this.wide = false;
			this.menu.close();
		}
	};

	listenToEvents() {
		window.addEventListener('resize', () => {
			this.setWidth();
		});
	}
}
