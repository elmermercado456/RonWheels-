export const product = {
  name: 'product',
  title: 'Producto',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre del Auto',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Precio (S/)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: 'stock',
      title: 'Stock',
      type: 'number',
      description: 'Si pones 0, aparecerá como AGOTADO en la web.',
      validation: (Rule) => Rule.required().min(0),
      initialValue: 1,
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Hot Wheels Básicos', value: 'basic' },
          { title: 'Hot Wheels Premium', value: 'premium' },
          { title: 'Mini GT / Marcas Premium', value: 'minigt' },
          { title: 'Dioramas', value: 'diorama' },
          { title: 'Preventas', value: 'preventa' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Imagen del Producto',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }
  ]
}
