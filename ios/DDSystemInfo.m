//
//  DDSystemInfo.m
//  DietDoctor
//
//  Created by Naji Chemaly on 10/23/20.
//

#import "DDSystemInfo.h"
#import <React/RCTLog.h>

@implementation DDSystemInfo

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(getLanguage:(RCTResponseSenderBlock)callback)
{
  NSString *language = [[[NSBundle mainBundle] preferredLocalizations] firstObject];
  callback(@[language]);
}

RCT_EXPORT_METHOD(getBundleIdentifier:(RCTResponseSenderBlock)callback)
{
  NSString *bundleIdentifier = [[NSBundle mainBundle] bundleIdentifier];
  callback(@[bundleIdentifier]);
}

@end
