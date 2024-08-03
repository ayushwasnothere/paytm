# Use the official MongoDB image from the Docker Hub
FROM mongo:4.4.7

# Create an initialization script for the replica set
RUN echo "rs.initiate();" > /docker-entrypoint-initdb.d/replica-init.js

# Set the command to run MongoDB with replica set configuration
CMD ["mongod", "--replSet", "rs"]

