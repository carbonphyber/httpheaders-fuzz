# web-backend

This server is a simple Node HTTP server which receives and records the HTTP Headers submitted from upstream servers and clients.

To build this server as a docker image:
```
docker build --tag web-backend .
```

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name web-backend --network network-webapp -p 80:80 web-backend
```
note: this server runs on port `80` on the Docker host and, as such, requires admin permissions (as all services which want to tun on ports `1`-`1023`).
