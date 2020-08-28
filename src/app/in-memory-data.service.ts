import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const mechs = [
      {
        name: 'Drop ALT',
        price: 180,
        description: 'The Drop ALT mechanical keyboard is just like the CTRL, but with 67 keys instead of 87. Absent of function keys, it wastes no space—but it still has a full set of arrows and numerals. Constructed with a solid aluminum frame with a built-in switch plate, the ALT is rock solid.',
        images: [
          './assets/images/mech/Drop-ALT-0.png', 
          './assets/images/mech/Drop-ALT-1.png', 
          './assets/images/mech/Drop-ALT-2.png'
        ],
        url: 'https://drop.com/buy/drop-alt-mechanical-keyboard',
        form: '65%',
        formVal: '65',
        keys: 67,
        switches: [
          'Halo Clear',
          'Halo True',
          'Kailh Box White',
          'Kailh Speed Silver',
          'Cherry MX Blue',
          'Cherry MX Brown'
        ],
        hotswap: true,
        colors: [
          'Black',
          'Space Gray'
        ],
        firmware: 'QMK',
        connector: 'USB-C',
        weight: 696,
        dimensions: {
          length: 32.2, 
          width: 11.2, 
          height: 3.2
        } 
      },
      {
        name: 'Drop CTRL',
        price: 200,
        description: 'To put it simply, the CTRL mechanical keyboard has it all. Constructed with a solid aluminum frame with a built-in switch plate, it’s stable and fortified. And thanks to the hot-swap switch sockets, it allows you to change switches whenever you want with no soldering required. It’s also fully programmable via QMK, meaning you can assign macros or custom keybinds to every key.',
        images: [
          './assets/images/mech/Drop-CTRL-0.png', 
          './assets/images/mech/Drop-CTRL-1.png', 
          './assets/images/mech/Drop-CTRL-2.png'
        ],
        url: 'https://drop.com/buy/drop-ctrl-mechanical-keyboard',
        form: 'TKL',
        formVal: 'TKL',
        keys: 87,
        switches: [
          'Halo Clear',
          'Halo True',
          'Kailh Box White',
          'Kailh Speed Silver',
          'Cherry MX Blue',
          'Cherry MX Brown'
        ],
        hotswap: true,
        colors: [
          'Black',
          'Space Gray'
        ],
        firmware: 'QMK',
        connector: 'USB-C',
        weight: 964,
        dimensions: {
          length: 36.8, 
          width: 14, 
          height: 3.6
        }
      },
      {
        name: 'Drop ENTR',
        price: 90,
        description: 'Mechanical keyboards have been a vital part of the Drop community for years. But with all of their customizable components, they can be difficult to grasp at first. The Drop ENTR is the culmination of our efforts to create an accessible keyboard made with enthusiast-grade materials—a win-win for those just getting into the hobby, and those who’ve been in it for years.',
        images: [
          './assets/images/mech/Drop-ENTR-0.png', 
          './assets/images/mech/Drop-ENTR-1.png', 
          './assets/images/mech/Drop-ENTR-2.png'
        ],
        url: 'https://drop.com/buy/drop-entr-mechanical-keyboard',
        form: 'TKL',
        formVal: 'TKL',
        keys: 87,
        switches: [
          'Gateron Yellow',
          'Halo True'
        ],
        hotswap: false,
        colors: [
          'Black',
          'Green',
          'Silver'
        ],
        firmware: 'Not Programmable',
        connector: 'USB-C',
        weight: 930,
        dimensions: {
          length: 36, 
          width: 12.8, 
          height: 3.2
        }
      },
      {
        name: 'Drop SHIFT',
        price: 250,
        description: 'The latest addition to our family of mechanical keyboards, the Drop SHIFT is our largest and most ambitious undertaking yet. Done in the compact 1800 layout, it’s still significantly shorter than a traditional full-size keyboard, which frees up desk space for other gear. And though the numpad and arrows are much closer, they’re still broken out, so they’re easy to find without looking down. ',
        images: [
          './assets/images/mech/Drop-SHIFT-0.png', 
          './assets/images/mech/Drop-SHIFT-1.png', 
          './assets/images/mech/Drop-SHIFT-2.png'
        ],
        url: 'https://drop.com/buy/drop-shift-mechanical-keyboard',
        form: '1800',
        formVal: '1800',
        keys: 99,
        switches: [
          'Halo Clear',
          'Halo True',
          'Kailh Box White',
          'Kailh Speed Silver',
          'Cherry MX Blue',
          'Cherry MX Brown'
        ],
        hotswap: true,
        colors: [
          'Space Gray'
        ],
        firmware: 'QMK',
        connector: 'USB-C',
        weight: 970,
        dimensions: {
          length: 38.6, 
          width: 14, 
          height: 4.3
        }
      },
      {
        name: 'Ducky One 2 Mini',
        price: 99,
        description: 'Featuring PBT double shot seamless keycaps with side laser engraving technique. Smaller size, but no functions sacrificed. Supports Ducky Macro V2.0 and Mouse control function. The new bezel design shares a similar sleek frame as it’s predecessor, but the One 2 Mini incorporates dual colors on the bezel to match all varieties of keycap colorways.',
        images: [
          './assets/images/mech/Ducky-One-2-Mini-0.png', 
          './assets/images/mech/Ducky-One-2-Mini-1.png', 
          './assets/images/mech/Ducky-One-2-Mini-2.png'
        ],
        url: 'https://mechanicalkeyboards.com/shop/index.php?l=product_detail&p=4322',
        form: '60%',
        formVal: '60',
        keys: 61,
        switches: [
          'Cherry MX Black',
          'Cherry MX Brown',
          'Cherry MX Blue',
          'Cherry MX Red',
          'Cherry MX Silver',
          'Cherry MX Silent Black',
          'Cherry MX Silent Red',
          'Kailh Box White',
          'Kailh Speed Copper',
          'Kailh Speed Pro Burgandy'
        ],
        hotswap: false,
        colors: [
          'Black',
          'Pure White'
        ],
        firmware: 'Proprietary',
        connector: 'USB-C',
        weight: 907,
        dimensions: {
          length: 29.2, 
          width: 10.8, 
          height: 3.8
        }
      }
    ];
    return {mechs};
  }
}
