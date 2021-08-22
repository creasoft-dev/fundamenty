Fundamenty CLI Scripts 
======================

Fundamenty cli tool uses scripts to execute tasks, some of the scripts relies on Nunjuck templates. 

## Usage
```sh
$ yarn fun-cli <script/path> [...args]
```

### Site related scripts
```sh
# Initialize site: removes .git folder
$ yarn fun-cli site/init
# (WIP) Create a new locale (will create a folder and add Language name)
$ yarn fun-cli site/locale create en English

# Create a page with the title "About" under english folder
$ yarn fun-cli page/item "delete_me" -l en
# Create a post with the title "How to create a new post" under english folder
$ yarn fun-cli post/item "How to create a new post" -l en
```

### Radar related scripts
```sh
# Create a radar category (Not implemented yet)
$ yarn fun-cli radar/category techniques --color green -l en

# Create a radar item with the title "Test Tech" under `en/radar/techniques` folder with adopt ring
$ yarn fun-cli radar/item "Test Tech" --radar radar --cate techniques --ring adopt -l en
```

### SEARCH related scripts
```sh
# Initialize the search main index, and populate it
$ yarn fun-cli search/es init
# -f argument is to flatten the nested object structure
$ yarn fun-cli search/es index -f

# Initialize the products index, and populate it
$ yarn fun-cli search/es init -n site-products
$ yarn fun-cli search/es index -n site-products -i ./_site/api/products.json -f
```
