 # clean up 
common_clean() {  
  DESCRIPTION="${DESCRIPTION//’/$'\''}"
  TITLE="${TITLE//’/$'\''}"
}

# generate tag in array format from keywords
common_tags() {
  TAGS="'${KEYWORDS//,/$'\', \''}'"
  TAGS="${TAGS//\' /$'\''}"
}

# generate author image name from AUTHOR
common_imgauthor() {
  if [ -z "${IMAGE_AUTHOR}" ]; then 
    arr=(${AUTHOR})
    IMAGE_AUTHOR="${arr[0]}${arr[1]:0:1}" # returns first name + lastname letter1
    IMAGE_AUTHOR=${IMAGE_AUTHOR,,}.jpg #lower case
  fi
}

