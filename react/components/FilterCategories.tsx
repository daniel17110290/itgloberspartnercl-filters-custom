import React from "react"
import styles from "./styles.css"

type Props = {
    departments: [Category]
}

type Category = {
    id: number,
    name: string,
    slug: string,
    href: string
}

const filterCategories = ({ departments }: Props) => {
    console.log("mi grupo de departamentos es:", departments);



    const departmentOptions: any = departments?.map((department: Category) => {
        console.log("estos son los departamentos:", department)
        return (
            <a className={styles.ref}
                href={`${department.href}?initialMap=c&initialQuery=construccion&map=category-1,category-2`}
            >
                <img className={styles.image} src="https://image.shutterstock.com/image-vector/red-color-inserted-label-banner-260nw-2113100120.jpg"
                    alt="imagen de departamento" />
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

export default filterCategories