import { useEffect, useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import  { requestData, requestQuery } from './assets/apiservcie/api'
import { ErrorMessage } from 'formik'
import Loader from './components/Loader/Loader'
import ImageGallery from './components/ImageGallery/ImageGallery'

function App() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [query, setQuery] = useState(null)
  const [items, setItems] = useState(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const data = await requestData();

        setItems(data.items)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  useEffect(() => {
    if (query === null) return

    async function fetchDataQuery() {
      try {
        setLoading(true)
        const data = await requestQuery(query)

        setItems(data.items)
      } catch (error) {
        setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchDataQuery()
  }, [query])

  const onSetQuery = (query) => {
    setQuery(query)
  }

  return (
    <>
      <SearchBar onSetQuery={onSetQuery} />
      {error && <ErrorMessage />}
      {loading && <Loader />}
      <ImageGallery items={items} />
    </>
  )
}

export default App
