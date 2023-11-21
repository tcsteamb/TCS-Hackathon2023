import './globals.css'
import type { Metadata } from 'next'
import { Comfortaa } from 'next/font/google'
import RootLayout from './layout'

const inter = Comfortaa({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'TCS - Hackaton 2023 | AI Tesster - Automated Test Case Generator',
    description: 'is a tool that uses artificial intelligence to automatically create test cases for software. By analyzing the the requirements, it intelligently generates a set of test cases on Gherkin and Typescript Code, reducing manual effort. In a future improving test coverage, and enhancing overall testing efficiency in the software development lifecycle.',
}


export default function App({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <RootLayout children={undefined}/>
    );
}