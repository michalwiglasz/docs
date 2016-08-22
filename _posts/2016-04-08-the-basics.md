---
layout: page
title: "The Basics"
category: intro
date: 2016-04-08 12:44:47
active_item: ""
order: 1
---

Mergado Apps is a way to implement new functionality that can be used by users or agencies of Mergado. This functionality is created and maintained by third-party developers or companies, i.e. Mergado team does not take responsibility for non-working applications.

## Hosting Apps

All applications are hosted on _Mergado App Cloud_. Each application has its own repository and a database. App Cloud also helps developers test and develop their applications, i.e. there is no need to install Apache and PHP on localhost. The development environment can be accessed with SFTP or SSH.

## Technologies Supported By App Cloud

Currently, applications written on Mergado platform can be written only in **PHP** and only **MySQL** is supported for data storage. Other programming languages (e.g. Python) and databases (e.g. PostgreSQL, Redis) are planned in the future.

## Registering an App

Visit the [developers center](https://developers.mergado.com). If you have never visited the developer center, you need to confirm that you want to be a developer first.

_TODO: finish. Perhaps this section should be a part of "Setting Up"_

## Accessing App's Repository

On Linux and Mac, a repository can be accessed via SSH by running the following command from terminal:

```bash
$ ssh <username>@appcloud.mergado.com
```

If you are running Windows, you can install [PuTTY](http://www.putty.org/) or any other SSH client for Windows.

For regular development, you will probably want to access the repository via SFTP:

```bash
$ sftp <username>@appcloud.mergado.com
```

You can, of course, use a graphical SFTP client. There is a variety of clients for Linux and Mac, which one you want to use is up to you. On Windows, very popular GUI client is [WinSCP](https://winscp.net/eng/index.php) or [Total Commander](http://www.ghisler.com/) with an [extension for SFTP support](http://www.ghisler.com/plugins.htm).
