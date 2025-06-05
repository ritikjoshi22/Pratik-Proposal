import './App.css'

function App() {

  return (
    <>
      {/* create a will you be my girlfriend page in which she cannot click the no button whenever she try to hover or click it changes its position and if yes write a cute message use tailwind for a romantice UI */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-pink-100">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">Will You Be My Girlfriend?</h1>
          <p className="text-lg text-gray-700">I promise to make you smile every day!</p>
        </div>
        <div className="flex flex-col items-center">
          <button
            onClick={() => alert('Yay! I knew you would say yes!')}
            className="bg-pink-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-pink-600 transition duration-300"
          >
            Yes ❤️
          </button>
          <button
            onMouseOver={(e) => {
              const x = Math.random() * (window.innerWidth - e.target.clientWidth);
              const y = Math.random() * (window.innerHeight - e.target.clientHeight);
              e.target.style.position = 'absolute';
              e.target.style.left = `${x}px`;
              e.target.style.top = `${y}px`;
            }}
            className="mt-4 bg-gray-300 text-gray-800 px-6 py-3 rounded-lg shadow-lg transition duration-300"
          >
            No ❌
          </button>
        </div>
      </div>
      <footer className="text-center mt-8 text-gray-500">
        <p>Made with ❤️</p>
      </footer>
    </>
  )
}

export default App
