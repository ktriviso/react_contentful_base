import * as Contentful from 'contentful'
import _ from 'lodash'
import AppStore from '../AppStore/AppStore'
import {CONFIG} from '../Config'

export const getAppStore = (callback) => {
    const cms= Contentful.createClient({
        space: CONFIG.space_id,
        accessToken: CONFIG.access_token
    })

    cms.getEntries().then((response) => {
        const responseItems = response.items
        // EXAMPLE FILTER
        // const aboutGrid = _.filter(responseItems, (item) => {
        //     return item.sys.contentType.sys.id === 'aboutGrid'
        // })

        AppStore.data.site_data = responseItems
        AppStore.data.ready = true
        AppStore.emitChange()

        if(callback){
            callback(false, AppStore)
        }

    })
}
