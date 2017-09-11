import { Component } from '@angular/core';

/**
 * A top level component to render the list of all components
 * This will be called as Products Component
 * Next level to render each product, this will be called as ProductList
 */
 class Product {
 	name:string;
 	category:string;
 	availability:string;
 	price:number;
 	imgUrl:string;
 	constructor(name:string, category:string, availability:string, price:number){
 	  this.name = name;
 	  this.category = category;
 	  this.price = price;
 	  this.availability = availability;
 	  this.imgUrl = 'http://www.sunsetteez.com/cms/includes/gallery/includes/gallery/samples/detailed-custom-embroidery-image.jpg';
 	}
 }
 @Component({
  selector: 'productApp',
  template : `
  	<product-list *ngFor="let productItem of products" [product]="productItem">
  `,
})

export class ProductApp {
	products:Product[];
	constructor() {
		this.products = [
			new Product('Nike', 'Shoe', 'In Stock', 1900),
			new Product('Addidas', 'Shoe', 'In Stock', 2400),
			new Product('Titan', 'Watch', 'In Stock', 8250),
		];
		console.log('app const');
    console.log(this.products);
	}
}

@Component({
	selector: 'product-list',
	inputs : ['product'],
	template : `
		<div class="product-item-list">
			<img src={{product.imgUrl}} height="200px" width="200px"/>
			<div>{{product.name}}</div>
			<div>{{product.category}}</div>
			<product-price [productPrice]="product.price"></product-price>
			<div>{{product.availability}}</div>
		</div>
	`,
	styleUrls: ['./product.component.css']
})

export class ProductItems {
	product:Product;
}

@Component({
	selector: 'product-price',
	inputs : ['productPrice'],
	template : `
		<div class="product-item-list">
			<div>{{productPrice}}</div>
		</div>
	`,
})

export class ProductImage {
	productPrice:number;
}