// package com.pushnotificationlinkingsocket;

// import android.app.Application;
// import com.facebook.react.PackageList;
// import com.facebook.react.ReactApplication;
// import com.facebook.react.ReactHost;;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.load;
// import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost;
// import com.facebook.react.defaults.DefaultReactNativeHost;
// import com.facebook.react.flipper.ReactNativeFlipper;
// import com.facebook.soloader.SoLoader;
// import org.devio.rn.splashscreen.SplashScreenReactPackage;

// class MainApplication : Application(), ReactApplication {

//   override val reactNativeHost: ReactNativeHost =
//       object : DefaultReactNativeHost(this) {
//         override fun getPackages(): List<ReactPackage> =
//             PackageList(this).packages.apply {
//               // Packages that cannot be autolinked yet can be added manually here, for example:
//               // add(MyReactNativePackage())
//             }

//         override fun getJSMainModuleName(): String = "index"

//         override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

//         override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
//         override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
//       }

//   override val reactHost: ReactHost
//     get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

//   override fun onCreate() {
//     super.onCreate()
//     SoLoader.init(this, false)
//     if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
//       // If you opted-in for the New Architecture, we load the native entry point for this app.
//       load()
//     }
//     ReactNativeFlipper.initializeFlipper(this, reactNativeHost.reactInstanceManager)
//   }
// }

// package com.pushnotificationlinkingsocket;


// import android.app.Application;
// import com.facebook.react.PackageList;
// import com.facebook.react.ReactApplication;
// import com.facebook.react.ReactNativeHost;
// import com.facebook.react.ReactPackage;
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
// import com.facebook.react.defaults.DefaultReactNativeHost;
// import com.facebook.soloader.SoLoader;
// import java.util.List;

// public class MainApplication extends Application implements ReactApplication {

//   private final ReactNativeHost mReactNativeHost =
//       new DefaultReactNativeHost(this) {
//         @Override
//         public boolean getUseDeveloperSupport() {
//           return BuildConfig.DEBUG;
//         }

//     //     @Override
//     // protected JSIModulePackage getJSIModulePackage() {
//     //   return new ReanimatedJSIModulePackage(); // <- add
//     // }

//         @Override
//         protected List<ReactPackage> getPackages() {
//           @SuppressWarnings("UnnecessaryLocalVariable")
//           List<ReactPackage> packages = new PackageList(this).getPackages();
//           // Packages that cannot be autolinked yet can be added manually here, for example:
//           // packages.add(new MyReactNativePackage());
//           return packages;
//         }

//         @Override
//         protected String getJSMainModuleName() {
//           return "index";
//         }

//         @Override
//         protected boolean isNewArchEnabled() {
//           return BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
//         }

//         @Override
//         protected Boolean isHermesEnabled() {
//           return BuildConfig.IS_HERMES_ENABLED;
//         }
//       };

//   @Override
//   public ReactNativeHost getReactNativeHost() {
//     return mReactNativeHost;
//   }

//   @Override
//   public void onCreate() {
//     super.onCreate();
//     SoLoader.init(this, /* native exopackage */ false);
//     if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
//       // If you opted-in for the New Architecture, we load the native entry point for this app.
//       DefaultNewArchitectureEntryPoint.load();
//     }
//     // ReactNativeFlipper.initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
//   }
// }



// // git remote add origin https://github.com/nizampatnamsai202/PushNotification_Linking_SOcketIo.git
// // git push -u origin main
// //  git remote add origin https://github.com/nizampatnamsai202/PushNotification_Linking_SOcketIo.git



// MainApplication.java

package com.pushnotificationlinkingsocket;

import android.app.Application;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

    private final ReactNativeHost mReactNativeHost =
            new ReactNativeHost(this) {
                @Override
                public boolean getUseDeveloperSupport() {
                    return BuildConfig.DEBUG;
                }

                @Override
                protected List<ReactPackage> getPackages() {
                    List<ReactPackage> packages = new PackageList(this).getPackages();
                    packages.add(new FloatingViewPackage()); // Add this line to add FloatingViewModule
                    return packages;
                }

                @Override
                protected String getJSMainModuleName() {
                    return "index";
                }
            };

    @Override
    public ReactNativeHost getReactNativeHost() {
        return mReactNativeHost;
    }

    @Override
    public void onCreate() {
        super.onCreate();
        SoLoader.init(this, /* native exopackage */ false);
    }
}
