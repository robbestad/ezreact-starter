require('shelljs/global');
mkdir('-p','dist/assets');
cp('-R', 'assets/', 'dist/assets');
