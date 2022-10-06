import React from "react"
import { useQuery } from "react-apollo"
import Query_value from "../graphql/getDepartmentGroup.graphql"
import FilterDepartment from "./FilterDepartment"


const FilterCards = () => {
  const { data, loading } = useQuery(Query_value)

  return loading
    ?
    <div>loading...</div>
    :
    <>
      <div>
        <FilterDepartment
          departments={data?.categories}
        />
      </div>

    </>
}

export default FilterCards