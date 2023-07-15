import { Loading } from 'components/Loading';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';


export const Layout = () => {
    return (
        <>
        <Suspense fallback={<Loading />}>
        <main>
            <Outlet />
        </main>
      </Suspense>
        </>
    )
}