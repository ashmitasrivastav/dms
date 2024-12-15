import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/Home/Home.jsx';
import User from './components/User/User.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import KmsLayout from './components/KMS/KmsLayout.jsx';
import DmsLayout from './components/DMS/DmsLayout.jsx';
import CmsLayout from './components/CMS/CmsLayout.jsx';
import CreateTicket from './components/CMS/CreateTicket.jsx';
import DraftPolicy from './components/KMS/DraftPolicy.jsx';

// const router = createBrowserRouter({
// path: '/',
// element: <Layout />,
// children: [
// {
// path: "",
// element: <Home />
// },
// {
// path: "about",
// element: <About />
// },
// {
// path: "contact",
// element: <Contact />
// }
// ]
// })

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>
            <Route path='' element={<Home />} />
            <Route path='dms' element={<DmsLayout />} />
            <Route path='kms' element={<KmsLayout />} />
            <Route path='draftpolicy' element={<DraftPolicy />} />
            <Route path='cms' element={<CmsLayout />}>
                <Route path='create' element={<CreateTicket />} />
            </Route>
            <Route path='dashboard' element={<Dashboard />} />
            <Route path='user/:userid' element={<User />} />
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
