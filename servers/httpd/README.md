# Apache httpd

To build this server as a docker image:

```
docker build --tag proxy-httpd .
```

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name proxy-httpd --network network-webapp -p 8083:80 proxy-httpd
```
