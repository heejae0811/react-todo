import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './routes/Home'
import Detail from './routes/Detail'
import './index.css'

function App() {
	return (
		<Layout>
			<BrowserRouter basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/:id" element={<Detail />}></Route>
				</Routes>
			</BrowserRouter>
		</Layout>
	)
}

export default App
