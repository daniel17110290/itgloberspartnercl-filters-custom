import React from "react"
import { useQuery } from "react-apollo"
import Query_value from "../graphql/getDepartmentGroup.graphql"

const FilterCards = () => {
  const { data, loading } = useQuery(Query_value)
  console.log("mis datos de query son:", data, loading)
  return <div>Filtros departamantos</div>
}

export default FilterCards