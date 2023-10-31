import Navbar from './navbar';
import Footer from './footer';
import Wrapper from './wrapper';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex h-50 w-full items-center justify-center'>
				<Wrapper>{children}</Wrapper>
			</main>
      <Footer />
    </>
  )
}