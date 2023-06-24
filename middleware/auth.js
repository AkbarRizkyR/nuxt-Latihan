export default function ({ route, redirect, $client }) {
    if ($client) {
      const token = localStorage.getItem('token');
      if (!token && route.path !== '/login') {
        return redirect('/login');
      } else if (token && route.path === '/login') {
        return redirect('/dashboard');
      }
    }
  }
  