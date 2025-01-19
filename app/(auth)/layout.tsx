import { Inter } from 'next/font/google'
import '../globals.css'
import { ClerkProvider } from '@clerk/nextjs'

// for seo
export const metadata={
    title: 'Threads',
    description:'Threads app'
}
const inter=Inter({subsets:["latin"]})


const RootLayout = ({children}:
    {
        children: React.ReactNode
    }
) => {
  return (
    <ClerkProvider>
        <html lang='en'>
            <body className={`${inter.className} bg-dark-1`}>
                {children}
            </body>
        </html>
    </ClerkProvider>
  )
}

export default RootLayout