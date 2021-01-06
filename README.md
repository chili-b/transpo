# transpo
A simple file sharing web application I hacked together in just under 4 days. 
Since it's been completed I am slowly tidying and improving it.

<b><s>A complete ripoff of</s></b> Inspired by the late [Firefox Send](https://github.com/mozilla/send) which I miss very dearly.

![screenshot of frontend](screenshot.png)

## Features:
* Upload files that will last for a given amount of time
* Option to limit the number of times a file can be downloaded before it expires
* Option to password protect files
* Compresses multi-file uploads
* Client-side encryption and decryption of files

## Planned:
* Togglable dark theme
* Better error messages for the client

## Installation:
1) Make sure you have zip and cargo installed.
2) Clone this repository, adjust the settings in `src/config.rs` to your liking, navigate to the directory and build it with `cargo build --release` and run it with `cargo run --release`

Example Nginx config for transpo running on port 8080:
```nginx
location /transpo/ws/ {
  proxy_pass http://127.0.0.1:8080/ws/;
  proxy_http_version 1.1;
  proxy_set_header Upgrade $http_upgrade;
  proxy_set_header Connection "upgrade";
}

location /transpo/ {
  client_max_body_size 500M;
  proxy_pass http://127.0.0.1:8080/;
}

map $http_upgrade {
        default upgrade;
        '' close;
}
```
