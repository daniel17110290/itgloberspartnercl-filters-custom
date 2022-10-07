import React from "react"
import styles from "./styles.css"

type Props = {
  departments: [Category],
}

type Category = {
  id: number,
  name: string,
  slug: string,
  href: string
}

const filterDepartment = ({ departments }: Props) => {
  console.log("departments group:", departments);

  const departmentOptions: any = departments.map((department: Category) => {
    return (

      <a className={styles.ref} href={`/${department.slug}`}>
        <img className={styles.image} src="https://previews.123rf.com/images/kchung/kchung1506/kchung150600324/40716863-industrial-palabra-departamento-edificio-brazo-rob%C3%B3tico-en-el-fondo-blanco.jpg"
          alt="department image" />
        <p className={styles.paragraph}> {department.name}</p>
      </a>

    )
  })
  return (
    <div className={styles.container_department}>
      {departmentOptions}
    </div>
  )
}

export default filterDepartment