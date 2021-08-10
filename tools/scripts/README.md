Fundamenty CLI Scripts 
======================

Fundamenty cli tool uses scripts to execute tasks, some of the scripts relies on Nunjuck templates. 

## Usage:
```
$ yarn fun-cli <script/path> [...args]
```

## Examples
```
# Create a new locale (will create a folder and add Language name)
$ yarn fun-cli locale/create en English

# Create a page with the title "About" under english folder
$ yarn fun-cli page "about" -l en
$ yarn fun-cli post "how to create a new post" -l en

# Create a radar category (Not implemented yet)
$ yarn fun-cli radar/category techniques --color green -l en

# Create a radar item with the title "Test Tech" under `en/radar/techniques` folder with adopt ring
$ yarn fun-cli radar/item "Test Tech" --radar radar --cate techniques --ring adopt -l en

# Initialize the main index, and populate it
$ yarn fun-cli search/es init
# -f argument is to flatten the nested object structure
$ yarn fun-cli search/es index -f

# Initialize the products index, and populate it
$ yarn fun-cli search/es init -n site-products
$ yarn fun-cli search/es index -n site-products -i ./_site/api/products.json -f
```
