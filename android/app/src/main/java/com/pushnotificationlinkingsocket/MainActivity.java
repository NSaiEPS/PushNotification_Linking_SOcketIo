// package com.pushnotificationlinkingsocket;

// import com.facebook.react.ReactActivity;
// import com.facebook.react.ReactActivityDelegate;
// import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled;
// import com.facebook.react.defaults.DefaultReactActivityDelegate;
// import org.devio.rn.splashscreen.SplashScreen;


// class MainActivity : ReactActivity() {

//   /**
//    * Returns the name of the main component registered from JavaScript. This is used to schedule
//    * rendering of the component.
//    */
//   override fun getMainComponentName(): String = "pushnotificationlinkingsocket"
//    @Override
// protected void onCreate(Bundle savedInstanceState) {
//   SplashScreen.show(this);
//   super.onCreate(null);
// }
//   /**
//    * Returns the instance of the [ReactActivityDelegate]. We use [DefaultReactActivityDelegate]
//    * which allows you to enable New Architecture with a single boolean flags [fabricEnabled]
//    */
//   override fun createReactActivityDelegate(): ReactActivityDelegate =
//       DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
// }



package com.pushnotificationlinkingsocket;

import android.os.Bundle;
import org.devio.rn.splashscreen.SplashScreen;
import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate;
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint;
import com.facebook.react.defaults.DefaultReactActivityDelegate;
// import com.reactnativepipandroid.PipAndroidModule;


public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "pushnotificationlinkingsocket";
  }

  // @Override
  // public void onPictureInPictureModeChanged (boolean isInPictureInPictureMode, Configuration newConfig) {
  //   PipAndroidModule.pipModeChanged(isInPictureInPictureMode);
  // }


     @Override
protected void onCreate(Bundle savedInstanceState) {
  SplashScreen.show(this);
  super.onCreate(null);
}

  /**
   * Returns the instance of the {@link ReactActivityDelegate}. Here we use a util class {@link
   * DefaultReactActivityDelegate} which allows you to easily enable Fabric and Concurrent React
   * (aka React 18) with two boolean flags.
   */
  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new DefaultReactActivityDelegate(
        this,
        getMainComponentName(),
        // If you opted-in for the New Architecture, we enable the Fabric Renderer.
        DefaultNewArchitectureEntryPoint.getFabricEnabled());
  }
}
