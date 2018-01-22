# Getting started

Clone the repo, cd into the directory, and type `npm install`. After that, you
can start a local server by typing `npm start`.

# Deployment Details

Currently, this app is deployed to
[ieee.berkeley.edu](https://ieee.berkeley.edu).

That server is currently hosted by the EECS department, and is running Ubuntu
12.04 LTS. It is running Nginx 1.1.19, Node 8.9.4, and NPM 5.6.0. The service
is handled by an Upstart job, located in `/etc/init/react-ieee.conf`.

# Deployment Instructions

(As of 1/21/18)

- ssh into ieee.berkeley.edu
    - `ssh <username>@ieee.berkeley.edu`
- `cd /srv/react-ieee`
- `sudo su deployer`
- `git fetch`
- `git checkout <branch>`
- `sudo initctl restart react-ieee`
- check to make sure it worked
    -  logs in `/var/log/upstart/react-ieee`
    -  `sudo cat /var/log/upstart/react-ieee`
