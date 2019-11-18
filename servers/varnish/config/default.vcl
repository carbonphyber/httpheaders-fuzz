vcl 4.0;

backend default {
  .host = "web-backend:80";
}

sub vcl_recv {
  set req.http.X--Frontend-Server = "varnish";
}
