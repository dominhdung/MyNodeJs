Insert into Review (ReviewID, ReviewContent, CustomerID, ProductID, Rating) values 
(null, 'This is good', 1, 1, 8),
(null, 'This is so so', 2, 2, 5),
(null, 'This is excellent', 3, 3, 10);


INSERT INTO Product (ProductID, ProductName, Description, Price, Color, DateCreated, Availability, BrandID, LatestReviewID) VALUES
(null, 'Product_1', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-31', 'In Stock', 1, 1),
(null, 'Product_2', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-30', 'In Stock', 2, 2),
(null, 'Product_3', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-29', 'In Stock', 3, 3),
(null, 'Product_4', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-28', 'In Stock', 2, null),
(null, 'Product_5', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-02', 'In Stock', 2, null),
(null, 'Product_6', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-06', 'In Stock', 2, null),
(null, 'Product_7', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-07', 'In Stock', 3, null),
(null, 'Product_8', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-08', 'In Stock', 3, null),
(null, 'Product_9', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-09', 'In Stock', 1, null),
(null, 'Product_10', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-10', 'In Stock', 1, null),
(null, 'Product_11', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-12', 'In Stock', 1, null),
(null, 'Product_12', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-11', 'In Stock', 1, null),
(null, 'Product_13', 'Kielbasa cupim meatball capicola jerky fatback sirloin t-bone.', 4.59, 'Green', '2016-12-14', 'In Stock', 1, null);


Insert into Brand(BrandID, BrandName, Description) values
(null, 'VinaMilk', 'Vietnam Milk company'),
(null, 'Trung Nguyen', 'Instant Coffee company'),
(null, 'Higland', 'Coffee Shop company');


insert into User (UserID, UserName, UserType, Email, Birthdate) values
(null, 'John', 'Customer', 'john@gmail.com', null),
(null, 'Teddy', 'Employee', 'teddy@gmail.com', null),
(null, 'mary', 'Customer', 'mary@gmail.com', null),
(null, 'David', 'Employee', 'david@gmail.com', null);