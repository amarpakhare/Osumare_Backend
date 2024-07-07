This NodeJS API allow users to perform basic CRUD (Create, Read, Update, Delete) operations on tasks.

To Run : 
    ```
    git clone https://github.com/amarpakhare/Osumare_Backend.git
    ```
    ```
    cd Osumare_Backend
    ```
    ```
    npm install
    ```
    ```
    npm run dev
    ```



1.GET /tasks?page=1&limit=5&sort=title&order=asc&filter=important
```json
[
    {
        "id": "d6361a24-9f04-40bf-beeb-535caa5b0302",
        "title": "Drink Water",
        "description": "Drink enough water throught the day"
    },
]
```

2. GET /tasks
```
[
    {
        "id": "d6361a24-9f04-40bf-beeb-535caa5b0302",
        "title": "Drink Water",
        "description": "Drink enough water throught the day"
    },
    {
        "id": "b434a87f-dcfa-43a1-a6c0-d6a91e52f398",
        "title": "Buy Milk",
        "description": "Buy milk from store"
    }
    ...
]
```
3.POST /tasks  (Returns the newly created task as a response) <br>

    Content-Type: application/json

  {
      "title": "New Task",
      "description": "New Task Description"
  }
```
  {
    "id": "b434a87f-dcfa-43a1-a6c0-d6a91e52f398",
    "title": "New Task",
    "description": "New Task Description"
  }
```

4.PUT /tasks/b434a87f-dcfa-43a1-a6c0-d6a91e52f398 <br>
Content-Type: application/json

{
    "title": "Buy Milk and Tea Powder",
    "description": "Buy milk from store"
}

```
{
    "id": "b434a87f-dcfa-43a1-a6c0-d6a91e52f398",
    "title": "Buy Milk and Tea Powder",
    "description": "Buy milk from store"
}
```
5.DELETE /tasks/b434a87f-dcfa-43a1-a6c0-d6a91e52f398

```
  Deletes the task with the provided ID in the url
```
