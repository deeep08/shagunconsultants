#!/bin/bash -xe
APACHE_WEB_DIR=/usr/local/var/www

cd web
npm run build
cd ..

mkdir -p $APACHE_WEB_DIR/shagunconsultants
cp -r web/src/* $APACHE_WEB_DIR/shagunconsultants/
cp -r web/dist/* $APACHE_WEB_DIR/shagunconsultants/

#aws s3 cp shagunconsultants/gallery.html s3://sc.deeep08.com/gallery.html --profile deeep08 --recursive
#aws s3 cp shagunconsultants/gallery.html s3://sc.deeep08.com/gallery.html --profile deeep08
#sudo apachectl start
