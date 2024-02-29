import Header from './Header';
import CartOverview from '../features/cart/CartOverview';
import Loader from './Loader';
import { Outlet, useNavigation } from 'react-router-dom';

function AppLayout() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';

    return (
        <div className="grid h-screen grid-rows-[auto_1fr_auto]">
            {isLoading && <Loader />}

            <Header />
            <div className="overflow-scroll bg-stone-100">
                <main className="mx-auto max-w-3xl">
                    <Outlet />
                </main>
            </div>
            <CartOverview />
        </div>
    );
}

export default AppLayout;