#!/usr/bin/env bash

echo "APPCENTER_SOURCE_DIRECTORY = $APPCENTER_SOURCE_DIRECTORY"
echo "APPCENTER_OUTPUT_DIRECTORY = $APPCENTER_OUTPUT_DIRECTORY"
echo "APPCENTER_REACTNATIVE_PACKAGE = $APPCENTER_REACTNATIVE_PACKAGE"

python3 -m pip install azure-cognitiveservices-vision-customvision || exit 1
python3 train_and_export_model.py || exit 1

appcenter codepush release-react -a $OWNER_NAME/$APP_NAME \
-d Staging \
--token $APPCENTER_ACCESS_TOKEN \
--disable-duplicate-release-error || exit 1