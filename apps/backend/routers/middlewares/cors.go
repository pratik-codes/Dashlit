package middlewares

import (
	"github.com/go-chi/cors"
	"github.com/spf13/viper"
	"net/http"
)

func Cors() func(http.Handler) http.Handler {
	allowedHosts := viper.GetString("ALLOWED_HOSTS")
	return cors.Handler(cors.Options{
		AllowedOrigins:   []string{allowedHosts},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders:   []string{"Accept", "Authorization", "Content-Type", "X-CSRF-Token"},
		ExposedHeaders:   []string{"Link"},
		AllowCredentials: false,
		MaxAge:           300, // Maximum value not ignored by any of major browsers
	})
}
