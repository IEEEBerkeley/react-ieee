# Getting started

Read the [Development Onboarding wiki page](https://github.com/IEEEBerkeley/react-ieee/wiki/Development-Onboarding) for details on contributing to this repository!

# Deployment Details

Currently, this app is deployed to
[ieee.berkeley.edu](https://ieee.berkeley.edu).

That server is currently hosted by the EECS department, and is running Ubuntu
12.04 LTS. It is running Nginx 1.1.19, Node 8.9.4, and NPM 5.6.0. The service
is handled by an Upstart job, located in `/etc/init/react-ieee.conf`.

Routing is handled using Nginx in `nginx.conf`

## HOPE sub-site

[ieee.berkeley.edu/hope/](ieee.berkeley.edu/hope/)

HOPE should put their html files in `/home/hope/public_html/hope/`, making sure
that directory is accessible by nginx. Those files will be served at the above
url.

# Deployment Instructions

As a sudoer:

updated 9/5/18:
- ssh into ieee.berkeley.edu
    - `ssh -i .ssh/id_ed25519 username@ieee.berkeley.edu` (depending on where the token is)
- switch to the react-ieee directory
    - `cd /srv/react-ieee `
- `sudo systemctl stop react-ieee` Halts the website hosting the website. Similar to ctrl-c locally.
- `sudo git pull` Fetch and merge the changes on the remote repository.
- `sudo systemctl start react-ieee` Starts the website. Similar to npm start locally.
- check to make sure it worked:
    -  `sudo systemctl status react-ieee` Should show active.
    -  logs in `/var/log/nginx/access.log` and `/var/log/nginx/error.log`
- tips for debugging if website doesn't start up on server: 
    - call `sudo npm start` and you will get the normal error output as you get locally.
