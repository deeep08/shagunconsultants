#!/bin/bash -xe
APACHE_WEB_DIR=/usr/local/var/www

mkdir -p $APACHE_WEB_DIR/shagunconsultants
cp -r web/* $APACHE_WEB_DIR/shagunconsultants/
