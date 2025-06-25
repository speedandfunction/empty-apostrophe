require('apostrophe')({
  shortName: 'empty-apostrophe',
  modules: {
    // Core modules
    '@apostrophecms/page': {},
    '@apostrophecms/express': {
      options: {
        port: 3000,
        session: {
          secret: 'your-secret-here'
        }
      }
    },
    // Custom page types
    'default-page': {}
  }
});
