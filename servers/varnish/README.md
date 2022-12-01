# Varnish

To run the server in the docker image as a daemon (requires the Docker network already exist):
```
docker run -dit --rm --name proxy-varnish --network network-webapp -p 8084:80 -v $(pwd)/config/default.vcl:/etc/varnish/default.vcl:ro --tmpfs /usr/local/var/varnish:exec varnish:fresh-alpine
```

If you want to observe errors if config fails:
```
docker run -it --rm --name proxy-varnish --network network-webapp -p 8084:80 -v $(pwd)/config/default.vcl:/etc/varnish/default.vcl:ro --tmpfs /usr/local/var/varnish:exec varnish:fresh-alpine varnishd -C -f /etc/varnish/default.vcl
```
