---
layout: page_toc
title: "Change Log"
active_item: "changelog"
---

# Change Log
All notable changes to this project will be documented in this file.

## Mergado Apps 0.1.1
- 2016-04-06

### Added
- New API endpoints `PATCH /rules/<id>/queries/` and `DELETE /rules/<id>/queries/<id>/` let you assign and retract queries from rules.

### Fixed
- Correctly update a rule when `PATCH /rules/<id>/` with `data` field is issued.
- When creating or updating a rule or a variable, the API returns 400 Bad Request if the associated element does not exist.

## Mergado Apps 0.1.0
- 2016-03-23

### Added
- Mergado API ([app.mergado.com/api](https://app.mergado.com/api)).
- API documentation ([docs.mergado.apiary.io](http://docs.mergado.apiary.io/)).
