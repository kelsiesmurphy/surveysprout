package database

import (
	"database/sql"
	"fmt"
	"os"
	"strconv"

	"github.com/joho/godotenv"
	_ "github.com/lib/pq"
)

var Db *sql.DB


func ConnectDatabase() {
	err := godotenv.Load()
	if err != nil {
		fmt.Println("Error occurred loading .env file. Please check.")
		return
	}
	fmt.Println("Successfully loaded .env file.")

	host := os.Getenv("HOST")
	port, err := strconv.Atoi(os.Getenv("PORT"))
	if err != nil {
		fmt.Println("Error parsing PORT:", err)
		return
	}
	user := os.Getenv("PG_USER")
	dbname := os.Getenv("DB_NAME")
	pass := os.Getenv("PASSWORD")

	psqlSetup := fmt.Sprintf("host=%s port=%d user=%s dbname=%s password=%s sslmode=require", host, port, user, dbname, pass)
	db, errSql := sql.Open("postgres", psqlSetup)
	if errSql != nil {
		fmt.Println("There is an error while connecting to the database:", errSql)
		panic(errSql)
	}

	Db = db
	fmt.Println("Successfully connected to the database!")
}
