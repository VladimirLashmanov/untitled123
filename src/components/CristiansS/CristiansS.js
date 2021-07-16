
import Cristians from "../cristians/cristians";

export default function CristiansS ({items}) {
    return (

        <div className={'wrap'}>

            {items.map(value => <Cristians item={value}/>)}

        </div>

    )
}