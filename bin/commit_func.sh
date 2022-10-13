# common functions -------------------------------------------------

func_yesno () {
        # expects to be called with a greeting
        MSG="Please confirm?"
        if [[ "$1" != "" ]]; then
                MSG=$1
        fi
        read -p "${MSG} (y/n): " SE 
        SE=${SE:-n} 
        case "$SE" in 
                y|Y ) echo "yes";;
                n|N ) echo "no" && exit 0;;
                * ) echo "Options: y/n" && exit 0;;
        esac
}

# included functions -----------------------------------------------

func_dev1 () { # build
   echo "On branch develop: we are going to build and deploy dev-${APPNAME} (when required)"
   docker build -t sipstack/www:dev .
   echo "Enter lws password:"
   sudo docker-compose -f /root/docker/compose/dev/docker-compose.yml up -d
   echo ""
   echo "Completed above, https://dev-www.sipstack.com should be live / updated."
   
}

func_dev2 () { # CI/CD prep
        ### if CI/CD performed in gitlab on main ------------------
        echo "--------------------------------------------------------------------------------"
        echo "Pipleline is running... Check Gitlab for more information. This process is now done, exiting."
        # echo "Pipleline not implemented. Proceeding to next steps..."
        exit 0
}

func_dev3 () {
        # nothing required here:
        exit 0
}


