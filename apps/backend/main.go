package main

import (
	"fmt"
	"net/http"

	"github.com/gin-gonic/gin"
	"github.com/kelsiesmurphy/offline-collective-backend/database"
)

type NewsletterContact struct {
	FirstName string
	LastName  string
	Email     string
}

type Item struct {
	Name     string `json:"name"`
	Quantity int    `json:"quantity"`
}

func addItem(context *gin.Context) {
	var body Item
	if err := context.BindJSON(&body); err != nil {
		context.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Bad Input", "details": err.Error()})
		return
	}

	sqlStatement := "INSERT INTO inventory (name, quantity) VALUES ($1, $2);"
	_, err := database.Db.Exec(sqlStatement, body.Name, body.Quantity)
	if err != nil {
		fmt.Println("SQL Error:", err)
		context.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Couldn't create the new item"})
	} else {
		context.JSON(http.StatusOK, gin.H{"message": "Item is successfully created."})
	}
}

func main() {
	// gin.SetMode(gin.ReleaseMode) //optional to not get warning
	// route.SetTrustedProxies([]string{"192.168.1.2"}) //to trust only a specific value
	route := gin.Default()
	database.ConnectDatabase()

	route.GET("/ping", func(context *gin.Context) {
		context.JSON(http.StatusOK, gin.H{
			"message": "poong",
		})
	})

	route.POST("/add", addItem)

	err := route.Run(":8080")
	if err != nil {
		panic(err)
	}

}
