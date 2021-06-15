docker run \
    --name postgres \
    -e POSTGRES_USER=georgelobo \
    -e POSTGRES_PASSWORD="senha01" \
    -e POSTGRES_DB=heroes \
    -p 5432:5432 \
    -d \
    postgres

    docker logs postgres

    docker exec -it postgres psql --username erickwendel --dbname heroes

    CREATE TABLE warriors(
        id serial PRIMARY KEY, 
        name VARCHAR (255) NOT NULL
);

SELECT * FROM warriors;

docker run \
    --name mongodb \
    -e MONGO_INITDB_ROOT_USERNAME=georgelobo \
    -e MONGO_INITDB_ROOT_PASSWORD=senha01 \
    -p 27017:27017 \
    -d \
mongo:4
