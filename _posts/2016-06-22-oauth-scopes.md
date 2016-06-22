---
layout: page
title: "OAuth Scopes"
category: api
date: 2016-06-22 15:57:45
active_item: ""
order: 2
---

Scopes define permissions for clients or applications. When a developer wants to create a new application, they are first required to choose a list of permissions (scopes) which will be granted to the application. Applications should be created with only a list of permissions they really need as users are required to accept these permissions before they enable an app.

Here is a list of all scopes and their short description currently used in Mergado API:

| Scope                        | Description                                           |
|------------------------------|-------------------------------------------------------|
| **user.read**                | Client is authorized to access user information.      |
| **user.write**               | Client is authorized to modify a user.                |
| **user.shops.read**          | Client is authorized to access user's eshops.         |
| **user.shops.write**         | Client is authorized to modify user's eshops.         |
| **user.notify.read**         | Client is authorized to read user's notifications     |
| **shop.read**                | Client is authorized to access eshop's information.   |
| **shop.write**               | Client is authorized to modify an eshop.              |
| **shop.projects.read**       | Client is authorized to access eshop's projects.      |
| **shop.projects.write**      | Client is authorized to modify eshop's projects.      |
| **shop.notify.read**         | Client is authorized to view sent notifications.      |
| **shop.notify.write**        | Client is authorized to send new notifications.       |
| **project.read**             | Client is authorized to access project's information. |
| **project.write**            | Client is authorized to modify a project.             |
| **project.ga.read**          | Client is authorized to access Google Analytics.      |
| **project.rules.read**       | Client is authorized to access project's rules.       |
| **project.rules.write**      | Client is authorized to modify project's rules.       |
| **project.queries.read**     | Client is authorized to access project's queries.     |
| **project.queries.write**    | Client is authorized to modify project's queries.     |
| **project.elements.read**    | Client is authorized to access project's elements.    |
| **project.elements.write**   | Client is authorized to modify project's elements.    |
| **project.variables.read**   | Client is authorized to access project's variables.   |
| **project.variables.write**  | Client is authorized to modify project's variables.   |
| **project.products.read**    | Client is authorized to access project's products.    |
| **project.products.write**   | Client is authorized to modify project's products.    |
| **project.stats.read**       | Client is authorized to access project's statistics.  |
| **project.stats.write**      | Client is authorized to modify project's statistics.  |
| **project.feedaudits.read**  | Client is authorized to access project's feedauidts.  |
| **project.feedaudits.write** | Client is authorized to create project's feedauidts.  |
| **project.tasks.read**       | Client is authorized to read project's tasks.         |
| **project.tasks.write**      | Client is authorized to create project's tasks.       |
