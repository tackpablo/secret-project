# User Stories

## Template

As a **\_\_\_\_\_\_**, I want to **\_\_\_\_\_\_**, because **\_\_\_\_\_\_**.

---

### Priority Stories

1. As a user, I want to be able to call for a designated driver if I am unfit to drive because drinking and driving is dangerous and illegal.
2. As a user, I want to to be able to see where my driver is and how long it will take them to arrive because it can allow me to get prepared.
3. As a user, I want to be able to see how much it will cost for the service (based on destination) because I would like to know before agreeing to the service.
4. As a user, I want to be able to quickly pay for the service because I won't be in the best condition to do this later.
5. As a user, I want to be able call or text my driver for any specific instructions without giving away my personal information because personal information should be kept private.
6. As a user, I want to be able to add extra destinations in case I need to make stops because it prevents having to call multiple drivers.

---

# Resources

-   Users

    -   Service user - normal users
    -   Designate driver - driver

-   Transactions/Payment

-   Communication

    -   Phone call
    -   Text message

-   Maps
    -   Map points

Extras

-   Friend invitations
-   Latest journey and frequently used places
-   Coupons

---

# Routes

Index

-   / (Home Page)

Users

-   B GET /api/users/
-   R GET /api/users/:id
-   E PUT /api/users/:id
-   A POST /api/users/
-   D PUT /api/users/:id/delete

Transactions/Payment

-   B GET /api/transactions/
-   R GET /api/transactions/:id
-   E PUT /api/transactions/:id
-   A POST /api/transactions/
-   D PUT /api/transactions/:id/delete

Communication

-   B GET /api/communication/
-   R GET /api/communication/:id
-   E PUT /api/communication/:id
-   A POST /api/communication/
-   D PUT /api/communication/:id/delete

Maps

-   B GET /api/maps/
-   R GET /api/maps/:id
-   E PUT /api/maps/:id
-   A POST /api/maps/
-   D PUT /api/maps/:id/delete

# Tech Stack

-   Front End - React
-   Back End - Django
-   Database - PostgreSQL
