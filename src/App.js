import { Routes, Route, Link } from 'react-router-dom';
import { publicRoutes } from '~/routes';
import Fragment from 'react';

import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <div className="App">
            {/* Router */}
            <Routes>
                {publicRoutes.map((route, index) => {
                    const Page = route.component;

                    let Layout = DefaultLayout;
                    if (route.layout) {
                        Layout = route.layout;
                    } else if (route.layout === null) {
                        Layout = Fragment;
                    }

                    return (
                        <Route
                            key={index}
                            path={route.path}
                            element={
                                <Layout>
                                    <Page />
                                </Layout>
                            }
                        />
                    );
                })}
            </Routes>
        </div>
    );
}

export default App;
