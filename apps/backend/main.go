package main

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/kelsiesmurphy/offline-collective-backend/database"

	"github.com/resend/resend-go/v2"
)

type NewsletterContact struct {
	FirstName string
	LastName  string
	Email     string
}

func createNewsletterContact(context *gin.Context) {
	resendApiKey := os.Getenv("RESEND_API_KEY")

	var body NewsletterContact
	if err := context.BindJSON(&body); err != nil {
		context.AbortWithStatusJSON(http.StatusBadRequest, gin.H{"error": "Bad Input", "details": err.Error()})
		return
	}

	client := resend.NewClient(resendApiKey)
	params := &resend.CreateContactRequest{
		Email:        body.Email,
		FirstName:    body.FirstName,
		LastName:     body.LastName,
		Unsubscribed: false,
		AudienceId:   "a230d224-57a2-4afb-8e58-00bf651507fc",
	}

	contact, err := client.Contacts.Create(params)
	if err != nil {
		fmt.Println("Error creating NewsletterContact:", err)
		context.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Failed to create contact"})
		return
	}

	sqlStatement := "INSERT INTO newsletter_contact (id, email, first_name, last_name) VALUES ($1, $2, $3, $4);"
	_, err = database.Db.Exec(sqlStatement, contact.Id, body.Email, body.FirstName, body.LastName)
	if err != nil {
		fmt.Println("SQL Error:", err)
		context.AbortWithStatusJSON(http.StatusInternalServerError, gin.H{"error": "Couldn't create the new newsletter contact"})
	} else {
		context.JSON(http.StatusOK, gin.H{"message": "Newsletter Contact is successfully created."})
	}
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
			"message": "pong",
		})
	})

	route.POST("/add", addItem)

	route.POST("/newsletter-contact", createNewsletterContact)

	err := route.Run(":8080")
	if err != nil {
		panic(err)
	}

}
