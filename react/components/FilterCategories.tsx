import React from "react"
import styles from "./styles.css"

type Props = {
    departments: [Category],
    handleSetSlug: any,
    //indexCategories: any
}

type Category = {
    id: number,
    name: string,
    slug: string,
    href: string
}

const filterCategories = ({ departments }: Props) => {
    console.log("mi grupo de departamentos es:", departments);

    // const onHandleSetSlug = (event: any) => {
    //   handleSetSlug(`${event.target.value}/$\{term\}&map=ft`)
    // }

    const departmentOptions: any = departments?.map((department: Category) => {
        console.log("estos son los departamentos:", department)
        return (
            <a >
                <img className={styles.image} src="https://image.shutterstock.com/image-vector/red-color-inserted-label-banner-260nw-2113100120.jpg"
                    alt="imagen de departamento" />
                <p className={styles.paragraph}> {department.name}</p>
            </a>
            //   </div>
        )
    })
    return (
        <div className={styles.container_department}>
            {/* <img src="https://previews.123rf.com/images/kchung/kchung1506/kchung150600324/40716863-industrial-palabra-departamento-edificio-brazo-rob%C3%B3tico-en-el-fondo-blanco.jpg"
      alt="imagen de departamento"/>
    //   <button onClick={onHandleClick} value={}></button> */}
            {/* //  {departmentOptions} */}
            {/* <img src="https://previews.123rf.com/images/kchung/kchung1506/kchung150600324/40716863-industrial-palabra-departamento-edificio-brazo-rob%C3%B3tico-en-el-fondo-blanco.jpg"
        alt="imagen de departamento" />

      <select
        onChange={onHandleSetSlug}
        defaultValue="value0"
      >
        <option disabled value="value0">Seleccione una opcion</option>
        {departmentOptions}

      </select> */}
            {departmentOptions}
        </div>
    )
}

export default filterCategories