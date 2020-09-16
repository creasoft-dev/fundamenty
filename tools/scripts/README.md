radar scripts
=============

usage:
```
$ yarn fundamenty:cli <script/path> [...args]
```

Example:
```
$ yarn fundamenty:cli locale/create en English
$ yarn fundamenty:cli page "about" -l en
$ yarn fundamenty:cli post "how to create a new" -l en

$ yarn fundamenty:cli radar/create en:techradar "Technology Radar" -l en
$ yarn fundamenty:cli radar/category techniques --color green -l en
$ yarn fundamenty:cli radar/item "TypeScript" --radar techradar --cate techniques --ring adopt -l en
```
