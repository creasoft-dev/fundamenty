Third Party Services: ElasticSearch
===================================

This page will explain how to integrate with ElasticSearch.

## ElasticSearch providers

There are two services that provide free plan for ElasticSearch storage:
- [bonsai](https://bonsai.io/) 
- [Searchly](http://www.searchly.com/).

Since we need to provide the app key in the webpage, we need restricted user.
Searchly's free plan allows multiple users with different access control, whereas in Bonsai 'Read Only' credentials is only available for paid plans. Hence the recommendation is to use Searchly's free plan.

### AWS
The access to AWS managed ElasticSearch is restricted by default. The easiest way to allow access is to 


## ElasticSearch Endpoints

- `GET /_cat/indices` - List of indices and their 
- `GET /{index}/` - Index mappings and settings
- `GET /{index}/_search` - Index content search


## Indexing 

```sh
# First (one-time) build the ES index 
$ yarn fun-cli search/es init

# Then build the static pages (every time there is change)
$ yarn build

# Finally index the contet
$ yarn fun-cli index
```
