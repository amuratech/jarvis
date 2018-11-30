FROM ibmcom/ibmnode

ENV NODE_ENV production
ENV PORT 3000

WORKDIR "/app"

#install app dependency 
COPY package.json /app/
RUN cd /app; npm install

#bundle appsource
COPY . /app

EXPOSE 3000
CMD [ "npm", "start" ]