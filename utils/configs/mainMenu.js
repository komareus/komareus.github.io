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
      title: 'ДОКУМЕНТИ',
      to: { name: 'documents' },
      show: section === 'public',
    },
  ]
}
