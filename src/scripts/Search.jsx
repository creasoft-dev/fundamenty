import React from 'react';
import { ReactiveBase, MultiList, DataSearch, ReactiveList } from '@appbaseio/reactivesearch';

export default function Search() {

  let pathPrefix = process.env.WEB_PATH_PREFIX ? process.env.WEB_PATH_PREFIX : '';
  if (pathPrefix.endsWith('/')) {
    pathPrefix = pathPrefix.substring(0, pathPrefix.length - 1);
  }
  const params = {
    title: 'Search',
    esIndex: process.env.ES_INDEX_NAME,
    esCredentials: process.env.ES_READ_ACCESS_KEY + ':' + process.env.ES_READ_ACCESS_SECRET,
    esUrl: 'https://' + process.env.ES_READ_ACCESS_KEY + ':' + process.env.ES_READ_ACCESS_SECRET + '@' + process.env.ES_URL,
    pathPrefix: pathPrefix
  };

  return (
    <ReactiveBase
          app={params.esIndex}
          credentials={params.esCredentials}
          url={params.esUrl}
        >
      <div className="flex">
        <div className="w-1/4 ">
          <MultiList
              componentId="Tags"
              dataField="tags"
              className="filter"
              title="Select Tags"
              selectAllLabel="All Tags"
          />
        </div>

        <div className="w-3/4 m-2">
          <DataSearch
            componentId="SearchSensor"
            dataField={['title', 'content']}
          />
          <ReactiveList
              componentId="SearchResult"
              dataField="title.keyword"
              className="result-list-container"
              pagination={true}
              from={0}
              size={10}
              react={ {and: ['Tags', 'SearchSensor'] } }
              
              renderItem={( item ) => (
                    <div key={item._id}>
                      <div >
                        <a href={params.pathPrefix + item.url} >{ item.title }</a>
                        <div className="px-1 text-xs rounded-lg bg-indigo-700 text-white inline-block ml-2">{ item.tags }</div>
                      </div>
                    </div>
                )}
          />

        </div>
      </div>
    </ReactiveBase>
  );
}