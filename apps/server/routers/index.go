package routers

import (
	"chi-boilerplate/controllers"
	"chi-boilerplate/helpers"
	"github.com/go-chi/chi/v5"
	"net/http"
)

//RegisterRoutes add all routing list here automatically get main router
func RegisterRoutes(router *chi.Mux) {
	router.Get("/", func(w http.ResponseWriter, r *http.Request) {
		helpers.SuccessResponse(w, "alive ok")
	})
	//Add All route
	router.Group(func(r chi.Router) {
		r.Post("/test/", controllers.CreateExample)
		r.Get("/test/", controllers.GetData)
	})
}
