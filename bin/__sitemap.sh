#!/bin/bash

# regenerate sitemap from vite
# nvm use 
# npm run build:vite

# url configuration
URL="https://www.sipstack.com/resources"

# values: always hourly daily weekly monthly yearly never
FREQ="daily"

# begin new sitemap
# exec 1> sitemap.xml

# print head
# echo '<?xml version="1.0" encoding="UTF-8"?>'
# echo '<!-- generator="Milkys Sitemap Generator, https://github.com/mcmilk/sitemap-generator" -->'
# echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'



# print urls
# IFS=$'\r\n' GLOBIGNORE='*' command eval "OPTIONS=($(cat $0.options))"
i=1 n=0
find src_content/resources/ -type d "${OPTIONS[@]}" -printf "%TY-%Tm-%Td%p\n" | \
while read -r line; do
  DATE=${line:0:10}
  # FILE=${line:12} ## when find .
  FILE=${line:10}
  FILE=${FILE#"src_content/resources"}
  if [[ $FILE == \/blog\/20* ]]; then FILE="/blog/${FILE:15}"; fi
  # echo $FILE
  ## skip if already exists from vite build
  if [[ $FILE == "/blog" ]] || [[ $FILE == \/docs* ]] || [[ $FILE == "/knowledge-base" ]] || [[ $FILE == "/case-study" ]] || [[ $FILE == "/" ]]; then continue; fi
  if [[ $n > $i ]]; then
    # echo "<url>"
    # echo " <loc>${URL}${FILE}</loc>"
    # echo " <lastmod>$DATE</lastmod>"
    # echo " <changefreq>$FREQ</changefreq>"
    # echo "</url>"
     echo "<url><loc>${URL}${FILE}</loc><lastmod>$DATE</lastmod><changefreq>$FREQ</changefreq></url>" >> sitemap.xml
  fi
  ((n++))
done
# hardset sitemap links
echo "<url><loc>${URL}/resources</loc><lastmod>$DATE</lastmod><changefreq>$FREQ</changefreq></url>" >> sitemap.xml
# print foot
echo "</urlset>" >> sitemap.xml

# merge into vite generated sitemap
sed -i 's|</urlset>||g' public/sitemap.xml
sed -i ':a;N;$!ba;s/\n/ /g' sitemap.xml # remove linebreaks
sed -i 's/ //g' sitemap.xml
cat sitemap.xml >> public/sitemap.xml
rm sitemap.xml
# output to log for review 
cat public/sitemap.xml

if [[ -d dist ]]; then
  cp public/sitemap.xml dist/server/
  cp public/sitemap.xml dist/client/
  echo "Sitemap updated in production build!"
fi

exit 0