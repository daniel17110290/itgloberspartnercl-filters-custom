import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo"
import Query_value from "../graphql/getDepartmentGroup.graphql"
import FilterCategories from "./FilterCategories";


const CardCategories = () => {
  const { data, loading, } = useQuery(Query_value)
  console.log("mis datos de query son:", data, loading)

  const ruta = window.location.pathname.split("/")
  console.log("esta es la ruta", ruta[1])

  const [slug, setSlug] = useState("")
  console.log("mi slug seleccionado es:", slug)

  //const [position, setPosition] = useState<number | string>("")

  const [finalData, setFinalData] = useState<any>([])

  // const indexCategories = (categories: [], slug: string) => {
  //   const position = categories.findIndex((category: any) => category.slug === slug)
  //   console.log("mis categorias son:", categories, position)
  //   setPosition(position)
  // }


  useEffect(() => {
    if (data) {
      setFinalData([])
      const rutaMatch = data.categories.filter((category: any) => category.slug === ruta[1])
      console.log("esta es mi ruta match", rutaMatch)
      setFinalData(rutaMatch)
      // indexCategories(data?.categories, ruta[1])
    }
  }, [data])

  // useEffect(() => {
  //   if (typeof position !== "string") {
  //     setFinalPosition(position)
  //   }
  // }, [position])




  return loading
    ?
    <div>loading...</div>
    :
    <div>
      {finalData && <FilterCategories
        departments={finalData[0]?.children}
        handleSetSlug={setSlug}
      //indexCategories={indexCategories}
      />}
    </div>
}

export default CardCategories
