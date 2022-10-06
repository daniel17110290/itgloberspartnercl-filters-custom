import React, { useState } from "react"
import { useQuery } from "react-apollo"
import Query_value from "../graphql/getDepartmentGroup.graphql"
import FilterDepartment from "./FilterDepartment"
// import FilterCategories from "./FilterCategories"

const FilterCards = () => {
  const { data, loading } = useQuery(Query_value)
  console.log("mis datos de query son:", data, loading)
  const [slug, setSlug] = useState("")
  console.log("mi slug seleccionado es:", slug)

  return loading
    ?
    <div>loading...</div>
    :
    <>
      <div>
        <FilterDepartment
          departments={data?.categories}
          handleSetSlug={setSlug}
        />
      </div>

    </>
}

export default FilterCards