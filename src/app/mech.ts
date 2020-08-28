export interface Mech {
  name: string;
  price: number;
  description: string;
  images: string[];
  url: string;
  form: string;
  formVal: string;
  switches: string[];
  hotswap: boolean;
  colors: string[];
  firmware: string;
  connector: string;
  weight: number;
  dimensions: {
    length: number,
    width: number,
    height: number
  };
}