package com.mobile;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import com.beefe.picker.PickerViewPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import com.github.yamill.orientation.OrientationPackage; // orientation
import com.BV.LinearGradient.LinearGradientPackage; // gradient
import com.lwansbrough.RCTCamera.RCTCameraPackage; // camera
import com.RNFetchBlob.RNFetchBlobPackage; // fetch blob

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new PickerViewPackage(),
          new OrientationPackage(),
          new LinearGradientPackage(),
          new RCTCameraPackage(),
          new RNFetchBlobPackage()
      );
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
