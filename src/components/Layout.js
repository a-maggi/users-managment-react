import Header from 'components/Header';
const Layout = ({ children }) => (
  <>
    <div className="min-h-screen bg-gray-100 py-0 flex flex-col sm:py-4  ">
      <div className="md:mx-auto max-w-2xl py-3 container  bg-white rounded-lg shadow-sm">
        <Header></Header>
        <div className="p-4">
          {children}
        </div>
      </div>
    </div>
  </>
)

export default Layout;