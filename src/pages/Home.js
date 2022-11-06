import { ContactUS } from "../assets/components/ContactUs"
import { NavBar } from "../assets/components/NavBar"
import { MainContent } from "./MainContent"

export const Home = () => {
    return <>
        <NavBar/>
        <MainContent/>
        <ContactUS/>
    </>
}