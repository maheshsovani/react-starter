#!/usr/bin/env bash

# For Production follow somethings on these lines
# option 1
serve -s build -l 3000

## option 2
# npm run build
#sed -i 's|{{API_URL}}|'${API_URL}'|g' /etc/nginx/nginx.conf
#cat /etc/nginx/nginx.conf
#
#nginx -g 'daemon off;'
