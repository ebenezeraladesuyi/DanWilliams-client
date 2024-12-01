/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { HomeLayout } from "../layout";
import ContactLayout from "../layout/ContactLayout";
import AboutLayout from "../layout/AboutLayout";
import OfferLayout from "../layout/OfferLayout";
import UnveilingLayout from "../layout/UnveilingLayout";
import Register from "../pages/register/Register";
import CacLayout from "../layout/CacLayout";


const HomeComp = lazy(() => import ("../pages/Home/HomeComp"))
const Contact = lazy(() => import ("../pages/contact/Contact"))
const About = lazy(() => import ("../pages/about/About"))
const Offer = lazy(() => import ("../pages/offer/Offer"))
const Unveilling = lazy(() => import ("../pages/unveiling/Unveilling"))
const RegSuccess = lazy(() => import ("../pages/CAC/RegSuccess"))
const CacReg = lazy(() => import ("../pages/CAC/CacReg"))


export const element = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout />,
        children: [
            {
                index: true,
                element: <HomeComp />
            }
        ]
    },
    {
        path: "/contact",
        element: <ContactLayout />,
        children: [
            {
                index: true,
                element: <Contact />
            }
        ]
    },
    {
        path: "/about",
        element: <AboutLayout />,
        children: [
            {
                index: true,
                element: <About />
            }
        ]
    },
    {
        path: "/offer",
        element: <OfferLayout />,
        children: [
            {
                index: true,
                element: <Offer />
            }
        ]
    },
    {
        path: "/unveiling",
        element: <UnveilingLayout />,
        children: [
            {
                index: true,
                element: <Unveilling />
            },
            {
                path: "/unveiling/register",
                element: <Register />
            }
        ]
    },
    {
        path: "/cac",
        element: <CacLayout />,
        children: [
            {
                index: true,
                element: <CacReg />
            },
            {
                path: "/cac/success",
                element: <RegSuccess />
            }
        ]
    },
])

