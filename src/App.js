
import './App.css';

import Cristians from "./components/cristians/cristians";
import Menu from "./components/menu/Menu";
import CristiansS from "./components/CristiansS/CristiansS";


let cristians =[

    {
        name:'Lusy',
        surname :'Сristians',
        age:25,
        info:'Lucia of Syracuse (283–304), also called Saint Lucia (Latin: Sancta Lucia) or Saint Lucy, was a Christian martyr who died during the Diocletianic Persecution. She is venerated as a saint in the Roman Catholic, Anglican, Lutheran, and Eastern Orthodox churches. She is one of eight women (including Saint Mary) explicitly commemorated by Roman Catholics in the Canon of the Mass. Her traditional feast day, known in Europe as Saint Lucy',
        photo:'https://i.pinimg.com/originals/3c/8f/9a/3c8f9ad07c5f305354cdf087cf1d580c.jpg'},


    {
        name:'Gary',
        surname :'Cristians',
        age:29,
        info:'английский профессиональный гольфист , игравший на W eb.com Tour и PGA Tour .Википедия  site:etnowiki.ru',
        photo:'https://klike.net/uploads/posts/2020-01/1578662816_1.jpg'
    },

    {
        name:'Bale',
        surname :'Cristians',
        age:35,
        info:'Бейл родился 30 января 1974 года в Пембрукшире на западе Уэльса в английской семье. Из-за профессий родителей(отец — пилот гражданской авиации, мать — артистка цирка)семья неоднократно меняла место жительства, детство Бейла прошло в Великобритании, Португалии и США (в Калифорнии)',
        photo:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2FEQjYeVYv86TI-kFJ0T4mu52NIKwfTz50Q&usqp=CAU'
    },
];





function App() {
    return (
        <div>
            <Menu/>
            <CristiansS items={cristians}/>

        </div>
    );
}
export default App;
