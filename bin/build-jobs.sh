#!/bin/bash

## INI PARAMS ---------------------------------------------------------
# SLUG="full-stack-developer"
# CATEGORY="Engineering"
# TITLE="Full Stack Developer"
# DESCRIPTION="You are a mission driven developer that is addicted to personal growth."
# JOB_ID="2"
# LOCATION="Toronto, ON"
# EMAIL="seniorengineer@sipstack.com"
# SALARY="Between \$50,000 - \$65,000"
# TYPE="Full-time"
# KEYWORDS="HTML, Javascript, Python, XML, jQuery, React"
# PERKS=""
# CREATED="2022-04-13"
# RECRUITER="Stamatis Loizides"

## INITIAL VARS -------------------------------------------------------
COUNT=0

## INITIAL INCLUDES ---------------------------------------------------
. "${BASH_SOURCE%/*}/build/_jobs.sh"


# generate blog from params
echo "Reminder: this command must be run from project root."
echo "-----------------------------------------------------"

  for file in src/views/pages/jobs/*/article.ini ; do
    IFS="\/" read -a TEST <<< $file
    SLUG=${TEST[4]}
    echo "Processing ${SLUG}"
    . src/views/pages/jobs/${SLUG}/article.ini

    ## common ----------------------------------------------------------
    # clean up 
    DESCRIPTION="${DESCRIPTION//’/$'\''}"
    TITLE="${TITLE//’/$'\''}"

    # generate tag in array format from keywords
    TAGS="'${KEYWORDS//,/$'\', \''}'"
    TAGS="${TAGS//\' /$'\''}"

    ## functions --------------------------------------------------------
    func1
    func2
    COUNT=$(expr ${COUNT} + 1)
  done

if [ ${COUNT} -gt 0 ]; then
  func3
fi

echo "Completed successfully!"
exit 0