// FloatingViewModule.java

package com.pushnotificationlinkingsocket;

import android.content.Context;
import android.graphics.PixelFormat;
import android.view.Gravity;
import android.view.View;
import android.view.WindowManager;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

public class FloatingViewModule extends ReactContextBaseJavaModule {

    private final ReactApplicationContext reactContext;
    private WindowManager windowManager;
    private View floatingView;

    public FloatingViewModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "FloatingView";
    }

    @ReactMethod
    public void showFloatingView() {
        if (floatingView == null) {
            windowManager = (WindowManager) reactContext.getSystemService(Context.WINDOW_SERVICE);
            floatingView = new View(reactContext);
            // Customize your floating view here
            floatingView.setBackgroundColor(0x7F000000); // Semi-transparent black
            WindowManager.LayoutParams params = new WindowManager.LayoutParams(
                    WindowManager.LayoutParams.MATCH_PARENT,
                    WindowManager.LayoutParams.MATCH_PARENT,
                    WindowManager.LayoutParams.TYPE_APPLICATION_OVERLAY,
                    WindowManager.LayoutParams.FLAG_NOT_FOCUSABLE,
                    PixelFormat.TRANSLUCENT);
            params.gravity = Gravity.CENTER;
            windowManager.addView(floatingView, params);
        }
    }

    @ReactMethod
    public void hideFloatingView() {
        if (floatingView != null && windowManager != null) {
            windowManager.removeView(floatingView);
            floatingView = null;
            windowManager = null;
        }
    }
}
