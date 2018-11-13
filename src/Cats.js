import React, { Component } from 'react'

import Cat from './Cat'

class Cats extends Component {
  render() {
    const cats = [
      {
        images:
          'https://octocat-kenny.surge.sh/Images/100-foundingfather_v2.png',
        titles: 'Founding Father v2',
        logo: 'https://octocat-kenny.surge.sh/Images/100-logo.jpg',
        number: '100'
      },
      {
        images:
          'https://octocat-kenny.surge.sh/Images/101-daftpunktocat-guy.gif',
        titles: 'Daftpunktocat-Guy',
        logo: 'https://octocat-kenny.surge.sh/Images/100-logo.jpg',
        number: '101'
      },
      {
        images:
          'https://octocat-kenny.surge.sh/Images/102-daftpunktocat-thomas.gif',
        titles: 'Daftpunktocat-Thomas',
        logo: 'https://octocat-kenny.surge.sh/Images/100-logo.jpg',
        number: '102'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/123-filmtocat.png',
        titles: 'Filmtocat',
        logo: 'https://octocat-kenny.surge.sh/Images/128-logo.jpg',
        number: '123'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/128-skatetocat.png',
        titles: 'Skatetocat ',
        logo: 'https://octocat-kenny.surge.sh/Images/130-logo.png',
        number: '128'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/130-catstello.png',
        titles: 'Catstello',
        logo: 'https://octocat-kenny.surge.sh/Images/141-logo.jpg',
        number: '130'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/141-Hulatocat.gif',
        titles: 'Hulatocat',
        logo: 'https://octocat-kenny.surge.sh/Images/142-logo.jpg',
        number: '141'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/142-surftocat.png',
        titles: 'Surftocat',
        logo: 'https://octocat-kenny.surge.sh/Images/142-logo.jpg',
        number: '142'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/15-octonaut.jpg',
        titles: 'Octonaut',
        logo: 'https://octocat-kenny.surge.sh/Images/15-logo.jpg',
        number: '015'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/16-trekkie.png',
        titles: 'Trekkie',
        logo: 'https://octocat-kenny.surge.sh/Images/15-logo.jpg',
        number: '016'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/3-octobiwan.jpg',
        titles: 'Octobi Wan Catnobi',
        logo: 'https://octocat-kenny.surge.sh/Images/15-logo.jpg',
        number: '003'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/36-xtocat.jpg',
        titles: 'X-tocat',
        logo: 'https://octocat-kenny.surge.sh/Images/36-logo.jpg',
        number: '036'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/43-andycat.jpg',
        titles: 'Andycat',
        logo: 'https://octocat-kenny.surge.sh/Images/43-logo.jpg',
        number: '043'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/47-nyantocat.gif',
        titles: 'Oktobercat',
        logo: 'https://octocat-kenny.surge.sh/Images/47-logo.jpg',
        number: '047'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/55-grim-repo.jpg',
        titles: 'Grim Repo',
        logo: 'https://octocat-kenny.surge.sh/Images/47-logo.jpg',
        number: '055'
      },
      {
        images:
          'https://octocat-kenny.surge.sh/Images/56-octocat-de-los-muertos.jpg',
        titles: 'Octocat De Los Muertos',
        logo: 'https://octocat-kenny.surge.sh/Images/47-logo.jpg',
        number: '056'
      },
      {
        images: 'https://octocat-kenny.surge.sh/Images/57-baracktocat.jpg',
        titles: 'Baracktocat',
        logo: 'https://octocat-kenny.surge.sh/Images/47-logo.jpg',
        number: '057'
      },
      {
        images:
          'https://octocat-kenny.surge.sh/Images/76-twenty-percent-cooler-octocat.png',
        titles: '20% Cooler Octocat',
        logo: 'https://octocat-kenny.surge.sh/Images/47-logo.jpg',
        number: '076'
      }
    ]

    return cats.map(cat => (
      <Cat
        images={cat.images}
        titles={cat.titles}
        logo={cat.logo}
        number={cat.number}
      />
    ))
  }
}

export default Cats
