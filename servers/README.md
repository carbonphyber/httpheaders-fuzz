# Servers

To run the tests of this repo, a backend web server and multiple different reverse proxy servers are required.

This README file will instruct .

## Set up a Docker network first
```
docker network create network-webapp
```

## Build+Run the backend server

Change to the [backend server](./servers/web-backend) directory:
```
cd servers/web-backend
```
Run the command in [the README](./servers/web-backend/README.md).

## Build+Start the NginX server

Change to the [nginx](./servers/nginx) directory:
```
cd servers/nginx
```
Run the command in [the README](./servers/nginx/README.md).

## Build+Start the HAProxy server

Change to the [haproxy](./servers/haproxy) directory:
```
cd servers/haproxy
```
Run the command in [the README](./servers/haproxy/README.md).
