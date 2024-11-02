const schema = {
  type: 'object',
  additionalProperties: true,
  required: ['type', 'action', 'data'],
  properties: {
    type: { type: 'string', minLength: 1, maxLength: 255 },
    action: { type: 'string', minLength: 1, maxLength: 255 },
    data: {
      type: 'object',
      additionalProperties: false,
      required: ['id'],
      properties: {
        id: { type: 'string', minLength: 1, maxLength: 255 },
      },
    },
  },
};

export { schema };
