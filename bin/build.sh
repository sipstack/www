#!/bin/bash


# generate blog from params
echo "Reminder: this command must be run as: npm run publish"
echo "-----------------------------------------------------"

bin/build-blog.sh
bin/build-kb.sh
bin/build-jobs.sh

echo "Completed successfully!"
exit 0