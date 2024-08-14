import "./globals.css"
import Header from "../components/Header"
import { ThemeContextProvider } from "../contexts/themeContexts"

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeContextProvider>
            <Header />
            <main className="w-full">{children}</main>
        </ThemeContextProvider>
    )
}