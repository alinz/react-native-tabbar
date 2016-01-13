#!/bin/bash

onExit ()
{
  echo "Killing App"
}

trap 'onExit' SIGINT

getCurrentFolder ()
{
  echo ${PWD##*/}
}

#
# Android bootup stage. It requires 2 stage after that it is ok to launch app
stage1 ()
{
  while :
  do
    state=$(adb get-state)
    if [ "$state" == "device" ]
    then
      break
    fi
  done
}

stage2 ()
{
  while :
  do
    bootanim=$(adb shell getprop init.svc.bootanim)
    if [ "$bootanim" == $'stopped\r' ]
    then
      break
    fi
  done
}


# stage1
# stage2
#
#
run_install_ios ()
{
  projectName=`getCurrentFolder`
  xctool -project ios/"$projectName".xcodeproj -scheme "$projectName" -sdk iphonesimulator -destination 'platform=iphonesimulator,name=iPhone 6' archive -archivePath=/Users/ali/projects/react-native-tabbar/example/WithIcons/ios/tmp
}


run_install_ios
