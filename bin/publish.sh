#!/bin/bash


# generate blog from params
echo "Reminder: this command must be run as: npm run publish"
echo "-----------------------------------------------------"

bin/build-blog.sh
bin/build-kb.sh
bin/build-jobs.sh
npm run build
cd dist
../bin/sitemap.sh
cd ..

## publish assets
npm run publish:assets


cd dist
## rewrite assets to load from cdn
grep -rl '"/assets/' . | xargs sed -i 's|"/assets/|"https://sfo2.digitaloceanspaces.com/sipstack/www/assets/|g'
grep -rl 'alt=""' . | xargs sed -i 's|alt=""|alt="ss image"|g'

cd ..


echo "Completed successfully!"
