export default function () {
  return [
    {
      // icon: icons.home,
      icon_material: 'home',
      title: 'Головна',
      to: { name: 'index' }
    },
    {
      icon_material: 'chrome_reader_mode',
      title: 'Новини',
      to: { name: 'news' }
    },
    {
      icon_material: 'chrome_reader_mode',
      title: 'Документи',
      to: { name: 'documents' }
    },
    // {
    //   icon_material: 'search',
    //   title: 'disposersSearch',
    //   to: { name: 'disposers' }
    // },
    // {
    //   icon_material: 'search',
    //   title: 'transactionsSearch',
    //   to: { name: 'transactions' }
    // },
    // {
    //   icon_material: 'insert_chart_outlined',
    //   title: 'statistics',
    //   // to: { name: 'statistics-index-documents' },
    //   children: [
    //     {
    //       title: 'documents',
    //       to: { name: 'statistics-index-documents' },
    //       icon: 'radio_button_unchecked',
    //       icon_active: 'radio_button_checked',
    //     },
    //
    //   ]
    // }
  ]
}
