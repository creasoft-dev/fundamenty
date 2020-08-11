Technology Radar Layout
=======================

This layout is inspired by the [Thoughtworks' Technology Radar](https://www.thoughtworks.com/radar).


# Usage
Create a folder for the technology radar, e.g. `/src/radar`.
Copy the file `radar.{lang}.json` and rename it as the folder name, this will make the json file Eleventy data file.

> The default `radar.{lang}.json` file includes definitions for `categories` and `rings`. You can change them accordingly, but

Then create a index page, e.g. `index.md` with the following data in the front matter:
```yml
layout: radar/radar_portal.njk

pagination:
  data: collections.radar
  size: 50
  reverse: true
  alias: radar_items
```

Next, for each of the categories, create a page with - appropriate template suffix- and a folder with the same name.

Under each folder place the tech radar item content files.

## Example folder structure

```
radar
├─radar.json                  - Radar data file
├─techniques.md               - Category techniques
├───techniques                - Content for category techniques
│   ├ techniques.json         - Common front matter for techniques
│   ├─my-awesome-technique.md - A technique in the radar
│   └─another-technique.md    - Another technique in the radar
├─tools.md                    - Category tools
├───tools                     - Content for category tools
│   ├ tools.json              - Common front matter for tools
...
```

## Item files

### Front matter
Example
```yaml
---
title: Title to be displayed in the list and page,

date: Date that the item was created/updated
dateRemoved: Date that the item was removed
ring: One of adopt, trial, assess, hold; as defined in radar.json

description: Short description, for display purpose
keywords: Any keyword, for display purpospe
homepage: Homepage of the technology
repo: URL of the github repository (if applicable)

author: The writer of this doc
---

## {date} Assess

Blip full description.

```

Notice that the tags and category were factored out to a data file in the directory, e.g. `techniques.json`
```json
{
    "tags": ["radar"],
    "category": "techniques"
}
```
