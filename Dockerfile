# base image
FROM node:9.6.1

# set working directory
WORKDIR /app
ADD . /app

# add `/usr/src/run/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache run dependencies
COPY package.json /app/package.json
RUN npm install
RUN npm install react-scripts@1.1.1 -g

COPY start-web-server.sh /start-web-server.sh
RUN chmod +x /start-web-server.sh

# start app
RUN npm run build
RUN npm install serve@10.0.2

ENTRYPOINT ["/start-web-server.sh"]
