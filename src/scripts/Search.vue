<template>
  <div>
    <h1 >{{ title }}</h1>
    <reactive-base
          :app=esIndex
          :credentials=esCredentials
          :url=esUrl
        >
      <div class="flex">
        <div class="w-1/4 ">
          <multi-list
              componentId="Tags"
              dataField="tags"
              class="filter"
              title="Select Tags"
              selectAllLabel="All Tags"
          />
        </div>

        <div class="w-3/4 m-2">
          <data-search
            componentId="SearchSensor"
            :dataField="['title', 'content']"
            highlight="true"
          />
          <reactive-list
              componentId="SearchResult"
              dataField="title.keyword"
              className="result-list-container"
              :pagination="true"
              :from="0"
              :size="10"
              :react="{and: ['Tags', 'SearchSensor']}"
          >
              <div slot="renderItem" slot-scope="{ item }">
                <a :href="item.url" >{{ item.title }}</a>
              </div>
          </reactive-list>
        </div>
      </div>

    </reactive-base>
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      title: 'Search Component!',
      esIndex: process.env.ES_INDEX_NAME,
      esCredentials: process.env.ES_READ_ACCESS_KEY + ':' + process.env.ES_READ_ACCESS_SECRET,
      esUrl: 'https://'+ process.env.ES_READ_ACCESS_KEY + ':' + process.env.ES_READ_ACCESS_SECRET + '@' + process.env.ES_URL
    }
  },
  methods: {
    greet: function (event) {
      // `this` inside methods points to the Vue instance
      alert('Hello ' + this.message + '!')
    }
  }
}
</script>
