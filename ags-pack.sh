#!/bin/sh

echo "Copying  assets .....";

cp ./projects/ags-extension/i18n/ src/assets/ags-extension -r

echo "Done";

echo "Packing the changes .....";

npm run pack:ags-extension

echo "Installing Extension .....";

npm install dist/ags-extension/ags-extension-0.0.1.tgz

echo "Installation Done .... ";
