export const getGifs = async ( category) => {
    

    //Fetch de la api que entrega la url del gif, el id y el titulo
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=QC1RPgRoyBmpwGw4Zyr5pWffwD02dICE`
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url
      }
    })

    return gifs;
    
  }