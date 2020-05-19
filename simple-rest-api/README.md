# Deno Rest API

Building a simple rest API with Deno and Oak

## Run the app
```
deno run --allow-net --allow-env --allow-read app.ts
```

## Routes

| Route                |   Usage                    |
| -------------------- | ---------------------------|
| GET /people	       | return all the people      |
| GET /people/{id}     | return a person            |
| POST /people         | add a person               |
| PUT /people/{id}	   | update a person            |
| DELETE /people/{id}  | delete a person            |
