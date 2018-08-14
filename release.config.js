module.exports = {
  branch: 'semantic-test',
  noCi: 'true',
  publish: [{
      path: '@semantic-release/npm',
      npmPublish: false
    },
    {
      path: '@semantic-release/github'
    }
  ]
}