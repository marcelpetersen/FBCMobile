import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { CloudModule } from '@ionic/cloud-angular';
import { MyApp } from './app.component';
//import { SlideBoxPage } from '../pages/slide-box/slide-box.page';
import { WordpressItemPage } from '../pages/wordpress/item/wordpress.item.page';
import { WordpressListPage } from '../pages/wordpress/list/wordpress.list.page';
import { HomePage } from '../pages/home/home.page';
import { CallService } from '../services/call.service';
import { EmailService } from '../services/email.service';
import { InAppBrowserService } from '../services/in-app-browser.service';
import { MapsService } from '../services/maps.service';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { TrimHtmlPipe } from '../pipes/trim-html.pipe';
import { Config, cloudSettings} from '../config';
//import { DrupalListPage } from '../pages/drupal/list/drupal.list.page';
//import { DrupalItemPage } from '../pages/drupal/item/drupal.item.page';
import { LocalStorageListPage } from '../pages/local-storage/list/local-storage.list.page';
import { LocalStorageEditPage } from '../pages/local-storage/edit/local-storage.edit.page';
import { NewsListPage } from '../pages/news/list/news.list.page';
import { NewsItemPage } from '../pages/news/item/news.item.page';
import { OAuthProvidersListPage } from '../pages/oauth/list/oauth-providers.list.page';
import { OAuthProfilePage } from '../pages/oauth/profile/oauth-profile.page';
//import { PositionPage } from '../pages/position/position.page';
import { ProductsListPage } from '../pages/products/list/products.list.page';
import { ProductsItemPage } from '../pages/products/item/products.item.page';
// import { SqliteListPage } from '../pages/sqlite/list/sqlite.list.page';
// import { SqliteEditPage } from '../pages/sqlite/edit/sqlite.edit.page';
import { VimeoListPage } from '../pages/vimeo/list/vimeo.list.page';
import { VimeoItemPage } from '../pages/vimeo/item/vimeo.item.page';
import { YoutubeListPage } from '../pages/youtube/list/youtube.list.page';
import { YoutubeItemPage } from '../pages/youtube/item/youtube.item.page';
import { TilesComponent } from '../components/tiles/tiles.component';
import { YoutubeEmbedUrlPipe } from '../pages/youtube/youtube-embed-url.pipe';
import { VimeoEmbedUrlPipe } from '../pages/vimeo/vimeo-embed-url.pipe';
import { OAuthService } from '../pages/oauth/oauth.service';
import { FacebookOauthProvider } from '../pages/oauth/facebook/facebook-oauth.provider';
import { GoogleOauthProvider } from '../pages/oauth/google/google-oauth.provider';
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
// import { PhotoViewerPage } '../pages/photo-viewer/photo-viewer.page';
import { LocalNotificationsPage } from '../pages/local-notifications/local-notifications.page';
//import { DeviceMotionPage } from '../pages/device-motion/device-motion.page';
// import { CalendarPage } from '../pages/calendar/calendar.page';
import { DialogsPage } from '../pages/dialogs/dialogs.page';
// import { NativeStorageListPage } from '../pages/native-storage/list/native-storage.list.page';
// import { NativeStorageEditPage } from '../pages/native-storage/edit/native-storage.edit.page';
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
// import { PushSenderService } from '../pages/push/push-sender.service';
// import { PushListenerService } from '../pages/push/push-listener.service';
// import { ComponentsListPage } from '../pages/components/list/components.list.page';
// import { ComponentsAlertsPage } from '../pages/components/alerts/components.alerts.page';
// import { ComponentsBadgesPage } from '../pages/components/badges/components.badges.page';
// import { ComponentsButtonsPage } from '../pages/components/buttons/components.buttons.page';
// import { ComponentsCardsPage } from '../pages/components/cards/components.cards.page';
// import { ComponentsCheckboxPage } from '../pages/components/checkbox/components.checkbox.page';

@NgModule({
	declarations: [
		MyApp,
		HomePage,
		//SlideBoxPage,
		WordpressItemPage,
		WordpressListPage,
		//DrupalListPage,
		//DrupalItemPage,
		LocalStorageListPage,
		LocalStorageEditPage,
		NewsListPage,
		NewsItemPage,
		OAuthProvidersListPage,
		OAuthProfilePage,
		//PositionPage,
		ProductsListPage,
		ProductsItemPage,
		//SlideBoxPage,
		// SqliteListPage,
		// SqliteEditPage,
		VimeoListPage,
		VimeoItemPage,
		YoutubeListPage,
		YoutubeItemPage,
		TilesComponent,
		// DateTimePage,
		//NetworkPage,
		// BarcodeScannerPage,
		//ToastsPage,
		//VibratePage,
		//SpinnerDialogPage,
		//FlashlightPage,
		// SocialSharingPage,
		//ActionsheetPage,
		//SimPage,
		//BrightnessPage,
		TruncatePipe,
		TrimHtmlPipe,
		YoutubeEmbedUrlPipe,
		VimeoEmbedUrlPipe,
		CallNumberPage,
		// CameraPage,
		// CropPage,
		ScreenOrientationPage,
		// PhotoViewerPage,
		LocalNotificationsPage,
		//DeviceMotionPage,
		// CalendarPage,
		DialogsPage,
		// NativeStorageListPage,
		// NativeStorageEditPage,
		//BadgePage,
		//ClipboardPage,
		// ContactsPage,
		//DevicePage,
		//AppAvailabilityPage,
		//ShakePage,
		// DatePickerPage,
		// YoutubeVideoPlayerPage,
		//TextToSpeechPage,
		// PushPage,
		// ComponentsListPage,
		// ComponentsAlertsPage,
		// ComponentsBadgesPage,
		// ComponentsButtonsPage,
		// ComponentsCardsPage,
		// ComponentsCheckboxPage
	],
	imports: [
		IonicModule.forRoot(MyApp),
		CloudModule.forRoot(cloudSettings)
	],
	bootstrap: [IonicApp],
	entryComponents: [
		MyApp,
		HomePage,
		//SlideBoxPage,
		WordpressItemPage,
		WordpressListPage,
		//DrupalListPage,
		//DrupalItemPage,
		LocalStorageListPage,
		LocalStorageEditPage,
		NewsListPage,
		NewsItemPage,
		OAuthProvidersListPage,
		OAuthProfilePage,
		//PositionPage,
		ProductsListPage,
		ProductsItemPage,
		//SlideBoxPage,
		// SqliteListPage,
		// SqliteEditPage,
		VimeoListPage,
		VimeoItemPage,
		YoutubeListPage,
		YoutubeItemPage,
		// DateTimePage,
		//NetworkPage,
		// BarcodeScannerPage,
		//ToastsPage,
		//VibratePage,
		//SpinnerDialogPage,
		//FlashlightPage,
		// SocialSharingPage,
		//ActionsheetPage,
		//SimPage,
		//BrightnessPage,
		CallNumberPage,
		// CameraPage,
		// CropPage,
		ScreenOrientationPage,
		// PhotoViewerPage,
		LocalNotificationsPage,
		//DeviceMotionPage,
		// CalendarPage,
		DialogsPage,
		// NativeStorageListPage,
		// NativeStorageEditPage,
		//BadgePage,
		//ClipboardPage,
		// ContactsPage,
		//DevicePage,
		//AppAvailabilityPage,
		//ShakePage,
		// DatePickerPage,
		// YoutubeVideoPlayerPage,
		//TextToSpeechPage,
		// PushPage,
		// ComponentsListPage,
		// ComponentsAlertsPage,
		// ComponentsBadgesPage,
		// ComponentsButtonsPage,
		// ComponentsCardsPage,
		// ComponentsCheckboxPage
	],
	providers: [
		Storage,
		CallService,
		EmailService,
		InAppBrowserService,
		MapsService,
		Config,
		OAuthService,
		FacebookOauthProvider,
		GoogleOauthProvider,
		// PushSenderService,
		// PushListenerService
	]
})
export class AppModule {
}
