class Item {
  Title: string;
  Desc: string;
  Image: string;
  Price: number;
  PostDate: string;
  Publisher: string;
  Location:string;
  Images: string[];

  constructor(
    title: string,
    desc: string,
    image: string,
    price: number,
    postDate: string,
    publisher: string,
    location: string,
    images: string[],
  ) {
    this.Title = title;
    this.Desc = desc;
    this.Image = image;
    this.Price = price;
    this.PostDate = postDate;
    this.Publisher = publisher;
    this.Location = location;    
    this.Images = images;
  }
}

export default Item;
