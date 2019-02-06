FROM node:latest
RUN mkdir -p /home/synerzip/Desktop/Practicals/SourabhPractice/Docker/Docker_Node_Mongo_Dir
WORKDIR /home/synerzip/Desktop/Practicals/SourabhPractice/Docker/Docker_Node_Mongo_Dir
COPY package.json /home/synerzip/Desktop/Practicals/SourabhPractice/Docker/Docker_Node_Mongo_Dir
RUN npm install
COPY . /home/synerzip/Desktop/Practicals/SourabhPractice/Docker/Docker_Node_Mongo_Dir
EXPOSE 3000
CMD [ “npm”, “start” ]
