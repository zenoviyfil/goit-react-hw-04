const ImageGallery = ({ items = null }) => {
    return (
      <ul>
        {items !== null &&
          Array.isArray(items) &&
          items.map((item) => {
            return (
              <li key={item.id}>
                <img width={250} src={item.thumbnail} alt={item.title} />

              </li>
            );
          })}
      </ul>
    );
  };
  
  export default ImageGallery;