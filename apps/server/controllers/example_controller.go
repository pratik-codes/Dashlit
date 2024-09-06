package controllers

import (
	"chi-boilerplate/helpers"
	"chi-boilerplate/models"
	"chi-boilerplate/repository"
	"encoding/json"
	"net/http"
)

func CreateExample(w http.ResponseWriter, request *http.Request) {
	example := new(models.Example)
	err := json.NewDecoder(request.Body).Decode(&example)
	if err != nil {
		http.Error(w, err.Error(), http.StatusBadRequest)
		return
	}
	repository.Save(&example)
	helpers.SuccessResponse(w, &example)
}

func GetData(w http.ResponseWriter, request *http.Request) {
	var example []models.Example
	repository.Get(&example)
	helpers.SuccessResponse(w, &example)
}
