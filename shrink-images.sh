#!/bin/bash -xe

WEBSITE_IMAGE_DIR=web/img/
SC_SITE_IMAGE_DIR=sc-site-images

for FILE in "$SC_SITE_IMAGE_DIR"/*
do
  echo "Converting $FILE..."
  SHRINK_FILENAME=$(echo "$FILE" | cut -d'/' -f 2)
  convert "$FILE" -resize 800x600\> "$WEBSITE_IMAGE_DIR$SC_SITE_IMAGE_DIR-shrink/$SHRINK_FILENAME"
done
