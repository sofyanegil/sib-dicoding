const routes = [
  {
    method: 'GET',
    path: '/',
    handler: (request, h) => 'Homepage',
  },
  {
    method: '*',
    path: '/',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/about',
    handler: (request, h) => 'About page',
  },
  {
    method: '*',
    path: '/about',
    handler: (request, h) => 'Halaman tidak dapat diakses dengan method tersebut',
  },
  {
    method: 'GET',
    path: '/hello/{name?}',
    handler: (request, h) => {
      const { name = 'stranger' } = request.params;
      const { lang } = request.query;
      if (lang === 'id') {
        return `Halo, ${name}`;
      }
      return `Hello, ${name}!`;
    },
  },
  {
    method: '*',
    path: '/{any*}',
    handler: (request, h) => 'Halaman tidak ditemukan',
  },
  {
    method: 'GET',
    path: '/news',
    handler: (request, h) => {
      return h.redirect('https://id-today.vercel.app/');
    },
  },
];
module.exports = routes;
