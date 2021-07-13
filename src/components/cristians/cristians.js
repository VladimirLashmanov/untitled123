export default function Cristians(props) {
   let {item}=props;



    return (
        <div>



            <h2>{item.name} {item.surname}</h2>

            <img src={item.photo} alt=""/>

                <div>{item.info}</div>


        </div>
    );


            }



