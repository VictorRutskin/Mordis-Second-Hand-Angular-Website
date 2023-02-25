import Contact from './Contact.model';

class Item {
  Title: string;
  Desc: string;
  Image: string;
  Price: number;
  PostDate: string;
  Location: string;
  Category: String;
  Condition: String;
  Images: string[];
  ID: number;
  Contact: Contact;

  constructor(
    title = '',
    desc = '',
    image = '',
    price = 0,
    postDate = '',
    location = '',
    category = '',
    condition = '',
    images: string[] = [],
    contact: Contact = new Contact('', 0, ''),
    id = 0
  ) {
    this.Title = title;
    this.Desc = desc;
    this.Image = image;
    this.Price = price;
    this.PostDate = postDate;
    this.Location = location;
    this.Images = images;
    this.Contact = contact;
    this.Category = category;
    this.Condition = condition;
    if (id !== 0) {
      this.ID = id;
    } else {
      const randomNumber =
        Math.floor(
          Math.random() * (99999999999999999999 - 10000000000000000000 + 1)
        ) + 10000000000000000000;
      this.ID = randomNumber;
    }
  }
}

export default Item;
