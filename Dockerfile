FROM node:10
WORKDIR /usr/local/app

RUN yarn global add serve
COPY package.json yarn.lock ./
RUN yarn
COPY . .
RUN yarn build
CMD serve -s build
