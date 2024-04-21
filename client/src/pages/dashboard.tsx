import { Link } from "react-router-dom";



const Dashboard = () => {
    return (
        <div key="1" className="flex h-screen w-full flex-col bg-purple-900 text-white">
      <header className="flex items-center justify-between border-b border-purple-800 px-10 pt-2 pb-4">
        <div className="font-extrabold text-4xl">
            <Link to={"/"}>
                nexus
            </Link> 
        </div>
      </header>
      <main className="flex-1 px-6 py-8">
        <div className="flex flex-col mx-auto max-w-5xl space-y-6 pt-8">
          <h1 className="text-7xl font-bold">Elevate Your Digital Presence</h1>
          <p className="text-2xl text-purple-300 pt-4">Unlock the power of our exclusive blogging platform and transform your online presence.</p>
          <div className="grid grid-cols-2 gap-8 pt-40">
            <div className="rounded-lg bg-purple-800 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold">Join the Elite</h2>
              <p className="mt-2 text-purple-300">Create a new account and unlock the full potential of our platform.</p>
              <Link to={"/signup"}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Sign Up
              </Link>
            </div>
            <div className="rounded-lg bg-purple-800 p-6 shadow-lg">
              <h2 className="text-2xl font-semibold">Access the nexus</h2>
              <p className="mt-2 text-purple-300">Sign in to your account and explore the exclusive features of our platform.</p>
              <Link to={"/signin"}
                className="mt-4 inline-flex items-center justify-center rounded-md bg-purple-600 px-4 py-2 text-sm font-medium transition-colors hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
    )
}

export default Dashboard;