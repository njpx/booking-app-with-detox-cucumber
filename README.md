# booking-app-with-detox-cucumber

**Install** (1)

    install npm

---
**Set up the devices** (2)

Before running the test, you must modify the device settings in **.detoxrc**

    ...
    "ios.release": {
		...
	    "device": {
		    "type": "iPhone 13 Pro Max" <-- Change here
	    }
    },
    "android.debug": {
		...
	    "device": {
		    "adbName": "Pixel_5_API_27" <-- Change here
	    }
    },
    
   ---
**Build The Project** (3)

Currently has two configurations

1. android.debug
2. ios.release


For Android Debug

	    detox build --configuration android.debug
	    DETOX_CONFIGURATION=android.debug npx cucumber-js

**Before run the test on iOS

		cd ios/
		pod install
		cd ..

For iOS Release

	    detox build --configuration ios.release
	    DETOX_CONFIGURATION=ios.release npx cucumber-js

**Alternatively you may use simple commands like this to execute it.**

For Android Debug

	    npm run build:android-debug
	    npm run test:android-debug

For iOS Release

	    npm run build:ios-release
	    npm run test:ios-release



-----

If you have any issues with 

    Unable to load script. Make sure you're either running a Metro server (run 'react-native start') or that your bundle 'index.android.bundle'

You can run this command

```
adb reverse tcp:8081 tcp:8081
```