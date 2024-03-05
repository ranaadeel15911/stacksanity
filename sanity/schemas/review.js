const review = {
    name: 'review',
    title: 'Review',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Name',
        type: 'string',
      },
      {
        name: 'position',
        title: 'Postiion',
        type: 'string',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'string',
      }],
    preview: {
      select: {
        title: 'name',
        positon:'position',
        description: 'description',
      },
    },
  }
  
  export default review