export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e299215a725fb01abcf2042',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-j58ivrq6',
                  apiId: 'a1e31e68-29ec-4ffd-9284-c949f5d732c7'
                },
                {
                  buildHookId: '5e2992155cb54701bb868fae',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-s8ps7nxi',
                  apiId: 'daa342bb-fed9-4a9b-94c8-d9ade4ad94bc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jesperkc/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-s8ps7nxi.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
