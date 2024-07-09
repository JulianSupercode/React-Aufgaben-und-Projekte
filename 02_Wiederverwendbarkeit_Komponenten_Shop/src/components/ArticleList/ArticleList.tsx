import ArticleItem from "../ArticleItem/ArticleItem";
import "./ArticleList.css"



const ArticleList = () => {
    
    const artikelArray = [
        {
          name:
            "cocooil",
          preis: "$30",
           img: "https://cdn2.photostockeditor.com/c/0601/bottle-cocooil-baby-oil-on-desk-lotion-lotion-image.jpg",
        },
        {
            name:
              "Camera",
            preis: "$60",
             img:  "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            name:
              "Was was",
            preis: "$20",
             img:  "https://static.wixstatic.com/media/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg/v1/fill/w%5F740,h%5F493,al%5Fc,q%5F85,usm%5F0.66%5F1.00%5F0.01,enc%5Fauto/25ebdc%5F11569a061f824bc99cda2e6b1ac6348b~mv2.jpg",
          },
       
    ];
    
    
    return ( 
        //hier mappen wir über das array und geben es direkt als Liste aus , wir benutzen keine Extra Ausgabe-Komponente
        // <div>
        //     {artikelArray.map((item, index)=>(
        //         <div key={index}>
        //     {item.name}
        //     <h4>{item.preis}</h4>
        //         </div>
        //     ))}
        // </div>

        //hier mappen wir über das array und geben es direkt als Liste aus , hier benutzen wir eine Extra Ausgabe-Komponente

        <div className="list">
            {/* //geschweifte Klammer weil wir im HTML, Javascript schreiben
            // map weil wir über ein Array drüber gehen */}
            {artikelArray.map((item,index)=>(
               <ArticleItem key={index} name={item.name} preis={item.preis} img={item.img}/> //wir sprechen die Ausgabekomponente an mit item.name etc.
            ))}
        </div>
     );
}
 
export default 


ArticleList;