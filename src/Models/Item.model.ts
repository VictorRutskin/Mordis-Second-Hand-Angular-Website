import Contact from "./Contact.model";

class Item {
  Title: string;
  Desc: string;
  Image: string;
  Price: number;
  PostDate: string;
  Location:string;
  Images: string[];
  ID: number;
  Contact: Contact;

  constructor(
    title: string,
    desc: string,
    image: string,
    price: number,
    postDate: string,
    location: string,
    images: string[],
    contact: Contact,
  ) {
    this.Title = title;
    this.Desc = desc;
    this.Image = image;
    this.Price = price;
    this.PostDate = postDate;
    this.Location = location;    
    this.Images = images;
    this.Contact = contact;

    const randomNumber = Math.floor(Math.random() * (99999999999999999999 - 10000000000000000000 + 1)) + 10000000000000000000;
    this.ID =randomNumber;
  }
}

export default Item;
