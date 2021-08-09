import React from 'react';
import { ReactiveBase, MultiDropdownList, MultiList, DataSearch, ReactiveList } from '@appbaseio/reactivesearch';

export default function ArchiSearch() {

  let pathPrefix = process.env.WEB_PATH_PREFIX ? process.env.WEB_PATH_PREFIX : '';
  if (pathPrefix.endsWith('/')) {
    pathPrefix = pathPrefix.substring(0, pathPrefix.length - 1);
  }
  const esCredentials = (process.env.ES_READ_ACCESS_KEY) ? process.env.ES_READ_ACCESS_KEY + ':' + process.env.ES_READ_ACCESS_SECRET: '';
  const params = {
    title: 'Search',
    esIndex: process.env.ES_INDEX_NAME,
    esCredentials: esCredentials,
    esUrl: 'https://' + ( (esCredentials) ? esCredentials + '@': '') + process.env.ES_URL,
    pathPrefix: pathPrefix
  };

  console.log('****' + JSON.stringify(params, null, 2));

  return (
    <div className="border border-gray-400 p-1">
      <ReactiveBase
            app={params.esIndex}
            // credentials={params.esCredentials}
            url={params.esUrl}
          >
        <div className="flex">
          <div className="w-1/4 ">
            <MultiDropdownList
              componentId="Languages"
              dataField="technical_progLanguages.keyword"
              class="filter"
              title="Select Languages"
              selectAllLabel="All"
            />
            <MultiList
              componentId="TechStack"
              dataField="technical_techStack.keyword"
              class="filter"
              title="Select Tech Stack"
              selectAllLabel="All Stack"
              innerClass={{
                label: 'text-xs',
              }}
            />
            <MultiDropdownList
              componentId="SharedServices"
              dataField="technical_sharedServices.keyword"
              class="filter"
              title="Select Shared Services"
              selectAllLabel="All"
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
                react={ {and: ['Languages', 'TechStack', 'SharedServices'] } }
                
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
    </div>
  );
}
