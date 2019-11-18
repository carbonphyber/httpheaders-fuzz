# Servers

To run the tests of this repo, a backend web server and multiple different reverse proxy servers are required.

This README file will instruct .

## Set up a Docker network first
```
docker network create network-webapp
```

## Build+Run the backend server

Change to the [backend server](./web-backend) directory:
```
cd servers/web-backend
```
Run the command in [the README](./web-backend/README.md).

## Build+Start the HAProxy server

Change to the [haproxy](./haproxy) directory:
```
cd servers/haproxy
```
Run the command in [the README](./haproxy/README.md).

## Build+Start the httpd server

Change to the [httpd](./httpd) directory:
```
cd servers/httpd
```
Run the command in [the README](./httpd/README.md).

## Build+Start the NginX server

Change to the [nginx](./nginx) directory:
```
cd servers/nginx
```
Run the command in [the README](./nginx/README.md).

## Build+Start the Varnish server

Change to the [varnish](./varnish) directory:
```
cd servers/varnish
```
Run the command in [the README](./varnish/README.md).
