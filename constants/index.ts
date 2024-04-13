export const headerLinks = [
    {
      label: 'Home',
      route: '/',
    },
    {
      label: 'Resources',
      route: '/resources/',
    },
    {
      label: 'Help',
      route: '/help',
    },
  ]
  
  export const eventDefaultValues = {
    title: '',
    description: '',
    location: '',
    imageUrl: '',
    startDateTime: new Date(),
    endDateTime: new Date(),
    categoryId: '',
    price: '',
    isFree: false,
    url: '',
  }