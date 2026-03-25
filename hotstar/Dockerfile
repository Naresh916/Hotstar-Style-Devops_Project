FROM node:18 AS builder

WORKDIR /app

ARG REACT_APP_TMDB
ENV REACT_APP_TMDB=$REACT_APP_TMDB

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build
