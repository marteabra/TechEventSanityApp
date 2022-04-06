export default {
    title: 'Event',
    name: 'event',
    type: 'document',

    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string'
        },
        {
            title: 'Host',
            name: 'host',
            type: 'reference',
            to: [{ type: 'host' }]
        },
        {
            title: 'Image',
            name: 'image',
            type: 'image'
        },
        {
            title: 'City',
            name: 'city',
            type: 'reference',
            to: [{ type: 'city' }]
        },
        {
            title: 'Location',
            name: 'location',
            type: 'reference',
            to: [{ type: 'location' }]
        },
        {
            title: 'Date From',
            name: 'dateFrom',
            type: 'datetime'
        },
        {
            title: 'Date To',
            name: 'dateTo',
            type: 'datetime'
        },
        {
            title: 'Description',
            name: 'description',
            type: 'text'
        },
        {
            title: 'Price',
            name: 'price',
            type: 'number'
        },
        {
            title: 'Category',
            name: 'category',
            type: 'reference',
            to: [{ type: 'category' }]
        }


    ]
}