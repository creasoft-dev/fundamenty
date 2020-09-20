radar scripts
=============

usage:
```
$ yarn fun-cli <script/path> [...args]
```

Example:
```
$ yarn fun-cli locale/create en English
$ yarn fun-cli page "about" -l en
$ yarn fun-cli post "how to create a new" -l en

$ yarn fun-cli radar/create en:techradar "Technology Radar" -l en
$ yarn fun-cli radar/category techniques --color green -l en
$ yarn fun-cli radar/item "Test Tech" --radar radar --cate techniques --ring adopt -l en
```
