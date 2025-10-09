import { Component } from '@angular/core';

@Component({
  selector: 'app-cardcomponent',
  standalone: false,
  templateUrl: './cardcomponent.html',
  styleUrl: './cardcomponent.css',
})
export class Cardcomponent {
  arr = [
  {
    productName: 'HP Pavilion 14',
    productPrice: 70000,
    productDesc:
      'The HP Pavilion laptop is powered by the 12th Gen Intel Core processor which offers smooth and powerful performance.',
    productImage:
      'https://th.bing.com/th/id/R.28552f9ae639d7d003c6b62f8b585c26?rik=L5DZbUP%2b0SQu7Q&riu=http%3a%2f%2fstore.hp.com%2fUKStore%2fHtml%2fMerch%2fImages%2fc05512731_1750x1285.jpg&ehk=v078V0Xw%2bTe2FE8UVA92%2fDUWAJ5XGaNggNTGNoYjq3g%3d&risl=&pid=ImgRaw&r=0'
  },
  {
    productName: 'Dell Inspiron 15 3520',
    productPrice: 68000,
    productDesc:
      'Dell Inspiron 15 comes with a 12th Gen Intel Core i5 processor and FHD display, ideal for productivity and entertainment.',
    productImage:
      'https://www.gearnuke.com/wp-content/sites/gearnuke/2023/04/dell-inspiron-15-3520-review-sub-shot.jpg'
  },
  {
    productName: 'Lenovo IdeaPad Slim 5',
    productPrice: 72000,
    productDesc:
      'Lenovo IdeaPad Slim 5 offers excellent portability with an AMD Ryzen 7 processor and long-lasting battery life.',
    productImage:
      'https://m.media-amazon.com/images/I/816n9hBWHEL._SL1500_.jpg'
  },
  {
    productName: 'ASUS Vivobook 15',
    productPrice: 60000,
    productDesc:
      'ASUS Vivobook 15 features a sleek design, powerful Intel Core i5 processor, and vibrant NanoEdge display for immersive viewing.',
    productImage:
      'https://tse4.mm.bing.net/th/id/OIP.RVSw2J31VUFrH1oI81DVuQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    productName: 'Acer Aspire 7',
    productPrice: 65000,
    productDesc:
      'Acer Aspire 7 combines power and style with an AMD Ryzen 5 processor and NVIDIA GTX 1650 graphics for smooth multitasking.',
    productImage:
      'https://assets.newatlas.com/dims4/default/eaff791/2147483647/strip/true/crop/1511x1080+0+0/resize/1343x960!/quality/90/?url=http:%2F%2Fnewatlas-brightspot.s3.amazonaws.com%2Farchive%2Facer-2018ifa-13.jpg'
  },
  {
    productName: 'Apple MacBook Air M2',
    productPrice: 124000,
    productDesc:
      'MacBook Air with M2 chip delivers ultra-fast performance, stunning Retina display, and all-day battery life in a thin design.',
    productImage:
      'https://i.guim.co.uk/img/media/59d676aeb49e545e4385cd322ef0212840c71972/149_366_5020_3011/master/5020.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=6b295cdc65dec346838b4d8ed9ca00d3'
  },
  {
    productName: 'MSI Modern 14',
    productPrice: 69000,
    productDesc:
      'MSI Modern 14 is a lightweight productivity laptop powered by Intel Core i5 and features a stylish aluminium chassis.',
    productImage:
      'https://tse1.mm.bing.net/th/id/OIP.NwTkiihPHX8oN-qrelIwdwHaFj?rs=1&pid=ImgDetMain&o=7&rm=3'
  },
  {
    productName: 'Samsung Galaxy Book 3',
    productPrice: 95000,
    productDesc:
      'The Samsung Galaxy Book 3 provides a premium AMOLED display, 13th Gen Intel Core processor, and seamless Galaxy ecosystem experience.',
    productImage:
      'https://tse2.mm.bing.net/th/id/OIP.SbTKj5CB7TGY97bRgIgZJQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3'
  }
];

}
