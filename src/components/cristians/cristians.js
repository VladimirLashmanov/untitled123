
//   let {item}=props;
// let {name,surname,age,photo,info}=item;

// let {item: {name,surname,age,photo,info}}=props;

     import './Cristians.css';

    export default function Cristians({item: {name,surname,age,photo,info}}) {

    return (
        <div>



            <h2>{name} {surname}, age-{age}</h2>

            <img src={photo} alt=""/>

                <div>{info}</div>


        </div>
    );


            }



