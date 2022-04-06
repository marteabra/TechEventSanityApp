import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import events from './events.js'
import city from './city.js'
import category from './category.js'
import host from './host.js'
import location from './location.js'

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    events,
    city,
    category,
    host,
    location

  ]),
})
