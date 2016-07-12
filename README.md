Exercise on REST API calls
Languages: NodeJS, AngularJS
Frameworks/Libraries: ExpressJS, UI-Router
Database: MySQL

Author: Dzung Do Minh.

Back-end
1. app.js: handles the initiation of server, connection and libraries.
2. connection.js: contains information of connection to mysql server.
3. routers.js: handle routing of APIs
4. product.js, brand.js: to do query on database


Front-end
Views:
1. product.htm: displays list of latest products for all brands.
2. review.htm: to input customer comments.

Known issue:
- Product is not filtered on brand yet.
- Save latest ReviewID into Product table. (I am working on this using $q.all for two rest requests)
- issue on child view so I cannot apply angular validation.
