import Contact from "./Contact.model";
import Item from "./Item.model";

const contact1: Contact = new Contact("Shay Eshel", 555555555, "quennshay@gmail.com");
const contact2: Contact = new Contact("fella guy", 666666666, "fellaoftheguy@gmail.com");
const contact3: Contact = new Contact("Tomer Shevach", 77777777, "thetomerheuheu11@gmail.com");
const contact4: Contact = new Contact("Israel Israeli", 888888888, "123iloveisrael123@gmail.com");


const products: Item[] = [
    new Item(
      'iPhone 13 pro',
      'Selling my iPhone, brand new conditi...',
      '../assets/Images/ItemsImages/Iphone.png',
      499,
      '12/02',
      'Afula',
      'electronics',
      'New',
      ['../assets/Images/ItemsImages/Iphone.png'],
      contact1,
    ),
    new Item(
      '  vans x nation...',
      '  Limited edition vans x nat geo sk8 hi. U...      ',
      '../assets/Images/ItemsImages/NationalShoes.png',
      40,
      '23/01',
      'Afula',
      'clothing',
      'Slightly used',
      ['../assets/Images/ItemsImages/NationalShoes.png'],
      contact2,
    ),
    new Item(
      '  Vintage night...      ',
      '  French provincial nightstand. Good con...      ',
      '../assets/Images/ItemsImages/VintageTableOrSomething.png',
      85,
      '13/04',
      'Bney Brak',
      'furniture',
      'Ancient',
      ['../assets/Images/ItemsImages/VintageTableOrSomething.png'],
      contact3,

    ),
    new Item(
      'Playstation2',
      'Nice Console',
      '../assets/Images/ItemsImages/NationalShoes.png',
      120,
      '03/11',
      'Tel-Aviv',
      'other',
      'New',
      ['../assets/Images/ItemsImages/NationalShoes.png'],
      contact4,
    ),
  ];

  export default products;
