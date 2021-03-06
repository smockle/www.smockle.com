---
title: "Keeping systems up-to-date"
date: 2019-04-21
---

When I set up a new home server, **[unattended-upgrades][1]** is one of the first packages I install[^1]. The service watches for package updates and installs them automatically. It makes keeping up with security patches and bug fixes easy, but only for system packages. If you run services inside Docker containers, you’ll need to look elsewhere.

<!--more-->

**[Watchtower][2]** monitors running Docker containers and checks for updated Docker images. When an image used by a running container is updated, Watchtower shuts down the container then restarts it with the same options[^2]. For best results, ensure the images you depend on receive regular updates.

If you maintain Docker images, you’ll want to rebuild them when their base images are updated. This will produce a new image that includes security patches and bug fixes available in the base image. Docker Hub’s [Automated Builds][3] service supports this via a feature called “Repository Links”[^3]:

![Repository Links](/uploads/2019/89a0bf8d2a.jpg)

[^1]: Here’s an example configuration for Raspberry Pi: **[smockle/pifiles][4]**

[^2]: Watchtower runs in a Docker container and yes, it can update itself.

[^3]: I used Travis CI to build and push my images, which unfortunately does not provide similar functionality. I’ll write about my migration to Docker Hub Automated Builds in the future.

[1]:	https://wiki.debian.org/UnattendedUpgrades
[2]:	https://github.com/containrrr/watchtower
[3]:	https://docs.docker.com/docker-hub/builds/
[4]:	https://github.com/smockle/pifiles/blob/def7b993eb0a2c9008154716d6708a887bfe2439/pifiles.sh#L32-L58