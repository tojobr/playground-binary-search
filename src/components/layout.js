import Navbar from './navbar';
import Footer from './footer';
import Wrapper from './wrapper';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className='flex h-50 w-full justify-center flex1'>
				<Wrapper>{children}</Wrapper>
			</main>
      <Footer />
    </>
  )
}