interface artikel {
name : string,
preis : string,
img : string,
}

// interface um die Strukur von einem Artikel festzulegen, 

// DANN Werden die Daten vom Elternelement übermittelt mit React.FC <artikel>

const ArticleItem : React.FC<artikel> = (props) => {
    return (
        <>
        <img src={props.img} alt={props.name} />
        <p>{props.name}</p>
        <p>{props.preis}</p>
        <button>BUY NOW</button>
        </>
      );
}
 
export default ArticleItem;