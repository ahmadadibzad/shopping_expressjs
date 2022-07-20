use shopping;
insert into categories (title, createdAt, updatedAt) values ('Jewelry', now(), now()), ('Clothing', now(), now()), ('Watch', now(), now());

#/*
insert into products (name, price, image, categoryId, createdAt, updatedAt)
values 
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing1.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing2.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing3.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing4.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry1.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry2.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry3.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry4.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry5.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch1.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch2.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch3.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry6.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry7.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry8.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry9.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry10.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch4.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch5.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch6.webp', 3, now(), now());


insert into products (name, price, image, categoryId, createdAt, updatedAt)
values 
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing1.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing2.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing3.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing4.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry1.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry2.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry3.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry4.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry5.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch1.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch2.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch3.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry6.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry7.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry8.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry9.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry10.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch4.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch5.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch6.webp', 3, now(), now());


insert into products (name, price, image, categoryId, createdAt, updatedAt)
values 
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing1.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing2.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing3.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing4.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry1.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry2.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry3.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry4.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry5.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch1.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch2.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch3.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry6.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry7.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry8.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry9.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry10.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch4.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch5.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch6.webp', 3, now(), now());


insert into products (name, price, image, categoryId, createdAt, updatedAt)
values 
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing1.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing2.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing3.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing4.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry1.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry2.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry3.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry4.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry5.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch1.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch2.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch3.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry6.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry7.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry8.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry9.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry10.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch4.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch5.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch6.webp', 3, now(), now());


insert into products (name, price, image, categoryId, createdAt, updatedAt)
values 
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing1.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing2.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing3.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Clothing4.webp', 2, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry1.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry2.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry3.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry4.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry5.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch1.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch2.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch3.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry6.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry7.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry8.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry9.jpg', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'Jewelry10.png', 1, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch4.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch5.webp', 3, now(), now()),
('Product', FLOOR(10 + RAND()*(300-100)), 'watch6.webp', 3, now(), now());
#*/

update products set name = concat(name, ' ', id) where id > 0;
#/*
update products set description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique magna sit amet purus. Quis risus sed vulputate odio. Ullamcorper sit amet risus nullam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Cras pulvinar mattis nunc sed blandit libero volutpat. Penatibus et magnis dis parturient. Velit dignissim sodales ut eu sem integer vitae. Dui accumsan sit amet nulla facilisi morbi. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Est ante in nibh mauris cursus mattis molestie.

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique magna sit amet purus. Quis risus sed vulputate odio. Ullamcorper sit amet risus nullam. Odio tempor orci dapibus ultrices in iaculis nunc sed augue. Cras pulvinar mattis nunc sed blandit libero volutpat. Penatibus et magnis dis parturient. Velit dignissim sodales ut eu sem integer vitae. Dui accumsan sit amet nulla facilisi morbi. Cras fermentum odio eu feugiat pretium nibh ipsum consequat nisl. Est ante in nibh mauris cursus mattis molestie.'
where id > 0
#*/