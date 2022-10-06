import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo"
import Query_value from "../graphql/getDepartmentGroup.graphql"
import FilterCategories from "./FilterCategories";


const CardCategories = () => {
  const { data, loading, } = useQuery(Query_value)

  const ruta = window.location.pathname.split("/")

  const [finalData, setFinalData] = useState<any>([])

  useEffect(() => {
    if (data) {
      setFinalData([])
      const rutaMatch = data.categories.filter((category: any) => category.slug === ruta[1])
      console.log("esta es mi ruta match", rutaMatch)
      setFinalData(rutaMatch)
    }
  }, [data])


  return loading
    ?
    <div>loading...</div>
    :
    <div>
      {finalData && <FilterCategories
        departments={finalData[0]?.children}
      />}
    </div>
}

export default CardCategories
