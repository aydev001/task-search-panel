import SearchPanel from "./features/search-panel/ui"


const App = () => {
  return (
    <div className="flex justify-center h-[100vh] bg-indigo-50 overflow-auto">
      <div className="my-auto w-[90%]">
        <SearchPanel/>
      </div>
    </div>
  )
}

export default App
