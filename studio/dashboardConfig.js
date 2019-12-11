export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
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
                  buildHookId: '5df12bb95a78a3133c4ce954',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-bvfee2xf',
                  apiId: '340c07dd-ffb3-4146-b4af-c185174e32aa'
                },
                {
                  buildHookId: '5df12bb971797bf0002e746c',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-j63jdn7j',
                  apiId: '31ac794f-8105-4009-8b75-6bf65098d8fc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JordiYahii/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-j63jdn7j.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
