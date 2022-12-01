vcl 4.0;

backend default {
  .host = "web-backend:8080";
}

sub vcl_recv {
  set req.http.X--Frontend-Server = "varnish";
}
