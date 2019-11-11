export default function ({ isLogIn = false, section = 'public' }) {
  return [
    {
      icon: 'home',
      title: 'ГОЛОВНА',
      to: { name: 'index' },
      show: section === 'public',
    },
    {
      icon: 'home',
      title: 'НОВИНИ',
      to: { name: 'news' },
      show: section === 'public',
      homeCard: true,
      imgSrc: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    },
    {
      icon: 'home',
      title: 'ДОКУМЕНТИ',
      to: { name: 'documents' },
      show: section === 'public',
      homeCard: true,
      imgSrc: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    },
    // {
    //   icon: 'home',
    //   title: 'ФОТО',
    //   to: { name: 'foto' },
    //   show: section === 'public',
    //   homeCard: true,
    //   imgSrc: 'https://cdn.vuetifyjs.com/images/cards/house.jpg'
    // },
  ]
}
