const getGifs = async (category) => {

  const url = `https://api.giphy.com/v1/gifs/search?api_key=OchQphKjI2OEFke6OPcJ9eDKR5R2OXTy&q=${category}&limit=10`;
  const resp = await fetch(url);
  const {data = []} = await resp.json();

  return data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }
  });
}

export default getGifs;