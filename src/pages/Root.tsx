import { Outlet } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';

export default function RootLayout() {
  return (
    <>
      <NavBar className='fixed top-0 left-0 right-0 z-50' />
      <main className='p-4 mt-16'>
        <Outlet />
      </main>
    </>
  );
}
