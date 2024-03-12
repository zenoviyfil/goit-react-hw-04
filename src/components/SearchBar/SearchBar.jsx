import { Field, Form, Formik } from "formik"

const SearchBar = ({ onSearchQuery }) => {
  return (
    <Formik
        initialValues={{query: ""}}
        onSubmit={(values) => {
            onSearchQuery(values.query)
        }}
    >
        <Form>
            <Field
            type="text"
            placeholder="Search images and photos"
            name="query"
            />
            <button type="submit">Search</button>
        </Form>
  </Formik>
  )
}

export default SearchBar