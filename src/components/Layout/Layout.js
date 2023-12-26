import Footer from './Footer'

function Layout(props: { children: React.ReactNode }) {
	return (
		<div className="w-full min-h-screen p-6 bg-orange-200">
            <main className="w-full max-w-screen-lg min-h-screen m-auto">
                {props.children}
            </main>

			<Footer />
		</div>
	)
}

export default Layout
